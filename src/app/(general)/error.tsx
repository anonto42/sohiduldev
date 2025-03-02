"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ErrorPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg mb-6">We couldn’t load the page. Please try again later.</p>
      <button
        onClick={() => router.push("/")}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
