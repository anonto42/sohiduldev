"use client"; // Required if using Next.js App Router
import { ThreeDots } from "react-loader-spinner";
import { twMerge } from "tailwind-merge";

const Loader = ({className}:{className:string}) => {
  return (
    <div className={twMerge("flex justify-center absolute items-center w-full h-full bg-white/10 rounded-xl cursor-progress",className.toString())}>
      <ThreeDots color="#00AEFF" height={80} width={80} />
    </div>
  );
};

export default Loader;
