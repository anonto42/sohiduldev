"use client"; // Required if using Next.js App Router
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center absolute items-center w-full h-full bg-white/10 rounded-xl">
      <ThreeDots color="#00AEFF" height={80} width={80} />
    </div>
  );
};

export default Loader;
