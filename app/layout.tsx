import type { Metadata } from "next";
import { kufi } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import NavBar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";
import ScrollToTopButton from "@/app/ui/ScrollToTopButton";
import ProviderWrapper from "./lib/context/ProviderWrapper";
import LoaderOverlay from "./ui/loader-overlay";
import WhatsappIcon from "./ui/whatsapp-icon";

export const metadata: Metadata = {
  title: {
    template: "%s – Mas",
    default: "Mas – fintech solution company",
  },
  description: "Mas is a leading fintech solution company providing innovative financial services.",
  metadataBase: new URL("https://masfintech.com"),
  icons: {
    icon: "/icon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`$rtl:${kufi.className} antialiased`}>
        <ProviderWrapper>
          <LoaderOverlay />
          <NavBar />
          <div className="mt-[104px]">
            {children}
          </div>
          <Footer />
          <ScrollToTopButton />
          <WhatsappIcon />
        </ProviderWrapper>
      </body>
    </html >
  );
}
