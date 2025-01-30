// app/_utils/getPDFDocument.tsx
import type { PDFDocumentProxy } from 'pdfjs-dist';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
// this function takes an argument we named path that 
// can be a path to the file or can be an external link
// that contains the PDF
const getPDFDocument = async (path: string) => {

  return new Promise((resolve, reject) => {
    pdfjsLib
      .getDocument(path)
      .promise.then((document: PDFDocumentProxy) => {
        resolve(document);
      })
      .catch(reject);
  });
};

export default getPDFDocument