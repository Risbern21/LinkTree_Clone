"use client";
import React from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Dynamicpage = ({ Handle, LinkAndText, profilepic, description }) => {
  return (
    <div className="w-fit rounded-2xl mx-auto pt-5 pb-10 px-2 sm:px-4">
      <Link href={"/"}>
        <div className="flex justify-end">
          <img
            src="/logo.svg"
            alt="linktree logo"
            className="w-[40px] bg-[#ffffff] hover:bg-[#d9d7d7c9] rounded-full p-3 delay-50"
          />
        </div>
      </Link>
      <Image
        src={`${profilepic}`}
        alt="profile picture"
        width={90}
        height={90}
        className="rounded-full mx-auto"
      />
      <h1 className="text-center mb-3 font-bold text-xl sm:text-4xl text-[#2f2e2e]">
        @{Handle}
      </h1>
      <div className="mx-auto text-center mb-7 text-[#2f2e2e] max-w-[45vw] overflow-hidden">
        {description}
      </div>
      <div className="flex flex-col gap-3 items-center">
        {LinkAndText.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-1 p-4 bg-[#ffffffa8] w-fit justify-between items-center text-xs hover:scale-[1.05] duration-100 shadow-xl"
              onClick={() => {
                redirect(item.Link);
              }}
            >
              <div className="text-center w-[70vw] sm:w-[50vw] overflow-hidden">
                {item.LinkText}
              </div>
              <div>
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-rounded/24/menu-2.png"
                  alt="menu-2"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dynamicpage;
