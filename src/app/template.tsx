"use client";
import { animatePageIn } from "@/utils/animations";
import { useEffect, useRef } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      animatePageIn();
    }, 0); // Adjust delay as needed

    // Cleanup function to clear timeout on component unmount
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="z-20">
      <div
        id="banner-1"
        className="min-h-screen bg-green-400 z-[300] fixed top-0 left-0 w-1/4"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-green-400 z-[300] fixed top-0 left-1/4 w-1/4"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-green-400 z-[300] fixed top-0 left-2/4 w-1/4"
      />
      <div
        id="banner-4"
        className="min-h-screen bg-green-400 z-[300] fixed top-0 left-3/4 w-1/4"
      />
      {children}
    </div>
  );
}
