"use client"

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

import loading from "../../public/loading.json"

const defaultOptionsLoading = {
  loop: true,
  autoplay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Loader() {
  return (
    <div role="status" className="flex flex-col items-center justify-center h-screen mt-[-103]px">
      <Lottie options={defaultOptionsLoading} width="25%" height="25%" style={{ position: "absolute" }} />
      <span className="sr-only">Loading...</span>
    </div>
  )
}