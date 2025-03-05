"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const showFooter = ["/"].includes(pathname);
  return (
    <>
      {showFooter && (
        <footer className="bg-[#502274] p-14">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl sm:text-5xl text-[#f19af1] font-extrabold w-full sm:w-[72%] mx-auto text-center">
              Jumpstart your corner of the internet today
            </h1>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
