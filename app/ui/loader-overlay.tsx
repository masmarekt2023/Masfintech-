"use client"

import { useEffect } from "react";
import { useLoading } from "../lib/context/LoadingContext";
import Loader from "./loader";

export default function LoaderOverlay() {
  const { isLoading } = useLoading();
  useEffect(() => {
    document.body.style.overflow = '';
    document.body.style.animationPlayState = 'running';
    // Disable scrolling and background animations when loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      document.body.style.animationPlayState = 'paused';
    }
  }, [isLoading])

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Loader />
        </div>
      )}
    </>
  );
}