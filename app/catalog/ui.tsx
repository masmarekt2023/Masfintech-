// app/_components/PDFCanvas.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import getPDFDocument from "./getPDFDocument";
import { PDFDocumentProxy } from "pdfjs-dist";
import createPDFPage from "./createPDFPage";
import renderPDFToCanvas from "./renderPDFToCanvas";
import Loader from "../ui/loader";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../lib/context/LanguageContext";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const Modal = ({ isOpen, children }: { isOpen: boolean, children: React.ReactNode }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 z-10 max-w-md w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const PDFCanvas = () => {
  const ref = useRef<HTMLDivElement>(null);
  const pageNumberRef = useRef<number>(1);
  const totalPagesRef = useRef<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const [pdfPages, setPdfPages] = useState<HTMLCanvasElement[]>([]);
  const [loadingPercentage, setLoadingPercentage] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(true);
  const [loadFullPDF, setLoadFullPDF] = useState<boolean>(false);
  const fullScreenHandle = useFullScreenHandle();
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const { language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    if (language) {
      totalPagesRef.current = 0;
      pageNumberRef.current = 1;
      setPdfPages([]);
      setShowModal(true);
    }
  }, [language])

  type Translations = {
    [key: string]: {
      chooseExperience: string;
      proceed: string;
      detailedLoad: string;
      quickLoad: string;
      pdfNotLoaded: string;
      waitOrReload: string;
      firstPage: string;
      previousPage: string;
      nextPage: string;
      lastPage: string;
      fullScreen: string;
      exitFullScreen: string;
    };
  };

  const translations: Translations = {
    en: {
      chooseExperience: "Choose Your Experience",
      proceed: "How would you like to proceed?",
      detailedLoad: "Detailed Load",
      quickLoad: "Quick Load",
      pdfNotLoaded: "PDF is not loaded yet!",
      waitOrReload: "Please wait or try reloading the page",
      firstPage: "First Page",
      previousPage: "Previous Page",
      nextPage: "Next Page",
      lastPage: "Last Page",
      fullScreen: "Full Screen",
      exitFullScreen: "Exit Full Screen",
    },
    ar: {
      chooseExperience: "اختر تجربتك",
      proceed: "كيف تود المتابعة؟",
      detailedLoad: "تحميل مفصل",
      quickLoad: "تحميل سريع",
      pdfNotLoaded: "لم يتم تحميل ملف PDF بعد!",
      waitOrReload: "يرجى الانتظار أو محاولة إعادة تحميل الصفحة",
      firstPage: "الصفحة الأولى",
      previousPage: "الصفحة السابقة",
      nextPage: "الصفحة التالية",
      lastPage: "الصفحة الأخيرة",
      fullScreen: "وضع الشاشة الكاملة",
      exitFullScreen: "الخروج من وضع الشاشة الكاملة",
    }
  };

  const t = (key: keyof Translations["en"]) => translations[language][key];

  const handleDetailedLoad = () => {
    setLoadFullPDF(false);
    setShowModal(false);
  };

  const handleQuickLoad = () => {
    setLoadFullPDF(true);
    setShowModal(false);
  };

  const renderPDF = async () => {
    setLoading(true);
    try {
      // Adjusted URL to use a relative path
      const url = language === "ar" ? "/mas-arabic.pdf" : "/mas.pdf";

      const pdfDocument = await getPDFDocument(url) as PDFDocumentProxy;
      totalPagesRef.current = pdfDocument.numPages;

      const pages: HTMLCanvasElement[] = [];
      const numPagesToLoad = loadFullPDF ? pdfDocument.numPages : 1;
      for (let i = 1; i <= numPagesToLoad; i++) {
        const pdfPage = await createPDFPage(pdfDocument as PDFDocumentProxy, i);
        const viewport = pdfPage.getViewport({ scale: 1 });
        const { height, width } = viewport;

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.className = "w-full h-full"; // Tailwind CSS classes for responsive width and height

        const pdfCanvas = await renderPDFToCanvas(pdfPage, canvas);
        pages.push(pdfCanvas);

        setLoadingPercentage(Math.round((i / numPagesToLoad) * 100));
      }

      setPdfPages(pages);
      ref.current?.replaceChildren(pages[0]);
    } catch (error) {
      console.error("Error loading PDF:", error);
      setPdfPages([]);
    } finally {
      setLoading(false);
    }
  };

  const renderPDFPage = async (pageNumber: number) => {
    try {
      const url = language === "ar" ? "/mas-arabic.pdf" : "/mas.pdf";
      const pdfDocument = await getPDFDocument(url);
      const pdfPage = await createPDFPage(pdfDocument as PDFDocumentProxy, pageNumber);
      const viewport = pdfPage.getViewport({ scale: 1 });
      const { height, width } = viewport;

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      canvas.className = "w-full h-full";

      const pdfCanvas = await renderPDFToCanvas(pdfPage, canvas);
      return pdfCanvas;
    } catch (error) {
      console.error("Error loading PDF page:", error);
      return null;
    }
  };

  useEffect(() => {
    if (!showModal) {
      renderPDF();
    }
  }, [showModal]);

  const goToPage = async (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPagesRef.current) {
      pageNumberRef.current = pageNumber;
      if (!pdfPages[pageNumber - 1]) {
        setLoading(true);
        const pdfCanvas = await renderPDFPage(pageNumber);
        if (pdfCanvas) {
          setPdfPages((prevPages) => {
            const newPages = [...prevPages];
            newPages[pageNumber - 1] = pdfCanvas;
            return newPages;
          });
          ref.current?.replaceChildren(pdfCanvas);
        }
        setLoading(false);
      } else {
        ref.current?.replaceChildren(pdfPages[pageNumber - 1]);
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current !== null && touchEndXRef.current !== null) {
      const distance = touchStartXRef.current - touchEndXRef.current;
      const isSwipeLeft = distance > 50;
      const isSwipeRight = distance < -50;

      if (isRTL) {
        if (isSwipeLeft) {
          goToPage(pageNumberRef.current - 1);
        } else if (isSwipeRight) {
          goToPage(pageNumberRef.current + 1);
        }
      } else {
        if (isSwipeLeft) {
          goToPage(pageNumberRef.current + 1);
        } else if (isSwipeRight) {
          goToPage(pageNumberRef.current - 1);
        }
      }
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const toggleFullScreen = () => {
    if (isFullScreen) {
      fullScreenHandle.exit();
    } else {
      fullScreenHandle.enter();
    }
    setIsFullScreen(!isFullScreen);
  };

  const NavigationButton = ({ onClick, iconPath, title, className }: { onClick: () => void, iconPath: string, title: string, className?: string; }) => (
    <button onClick={onClick} className={`${className || ""} flex items-center bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition`} title={title}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
      </svg>
    </button>
  );

  return (
    <FullScreen handle={fullScreenHandle}>
      <motion.div
        className={`container p-4 mx-auto relative flex flex-col items-center ${isFullScreen ? 'h-[100vh]' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Modal isOpen={showModal}>
          <h2 className="text-xl text-black font-bold mb-4">{t('chooseExperience')}</h2>
          <p className="mb-4 text-black">{t('proceed')}</p>
          <div className="flex flex-col space-y-2">
            <button onClick={handleQuickLoad} className="bg-blue-500 text-white px-4 py-2 rounded">{t('detailedLoad')}</button>
            <button onClick={handleDetailedLoad} className="bg-gray-500 text-white px-4 py-2 rounded">{t('quickLoad')}</button>
          </div>
        </Modal>
        <div className="relative w-full h-auto min-h-[22vh] lg:h-[75vh] lg:w-[75vw] border border-gray-300 shadow-md mb-4">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10 animate-fade-in">
              <Loader />
              <div className="absolute bottom-4 text-gray-700 animate-pulse">{loadingPercentage}%</div>
            </div>
          )}
          {!loading && pdfPages.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10 animate-fade-in">
              <div className="text-gray-700 text-center">
                <p className="text-lg animate-bounce">{t('pdfNotLoaded')}</p>
                <p className="text-sm">{t('waitOrReload')}</p>
              </div>
            </div>
          )}
          <div ref={ref} className="w-full h-full" />
        </div>
        <div className="flex justify-center space-x-2 rtl:space-x-reverse lg:space-x-4">
          <NavigationButton onClick={() => goToPage(1)} iconPath={isRTL ? "M11 17l5-5m0 0l-5-5m5 5H6" : "M11 17l-5-5m0 0l5-5m-5 5h12"} title={t('firstPage')} />
          <NavigationButton onClick={() => goToPage(pageNumberRef.current - 1)} iconPath={isRTL ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} title={t('previousPage')} />
          <NavigationButton onClick={() => goToPage(pageNumberRef.current + 1)} iconPath={isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} title={t('nextPage')} />
          <NavigationButton onClick={() => goToPage(totalPagesRef.current)} iconPath={isRTL ? "M11 17l5-5m0 0l-5-5m5 5H6" : "M13 7l5 5m0 0l-5 5m5-5H6"} title={t('lastPage')} className="rtl:transform rtl:-scale-[1]" />
          <NavigationButton onClick={toggleFullScreen} iconPath={isFullScreen ? "M6 18L18 6M6 6l12 12" : "M4 4h6V2H2v8h2V4zm6 16h-6v-6H2v8h8v-2zm4-16h6v6h2V2h-8v2zm6 16h-6v2h8v-8h-2v6z"} title={isFullScreen ? t('exitFullScreen') : t('fullScreen')} />
        </div>
      </motion.div>
    </FullScreen>
  );
};
