"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const showNavbar = ["/"].includes(pathname);

  return (
    <>
      {showNavbar && (
        <nav className="w-full absolute top-5 sm:top-[8%] z-50">
          <div className="w-[95%] 2xl:w-[50%] bg-white p-3 rounded-full mx-auto flex justify-between items-center">
            <div>
              <ul className="flex gap-3 items-center">
                <li className="ml-5">
                  <Link href={"/"}>
                    <Image
                      className="2xl:hidden"
                      src="logo.svg"
                      alt="linktree logo"
                      height={30}
                      width={30}
                    />
                    <Image
                      className="hidden 2xl:inline-block"
                      src={"mainlogo.svg"}
                      alt="linktree logo"
                      height={100}
                      width={100}
                    ></Image>
                  </Link>
                </li>
                <li className="hidden lg:inline-block">
                  <ul className="flex  text-gray-700 text-lg">
                    <li className="p-2 rounded-xl hover:bg-[#eff0ec]">
                      Templates
                    </li>
                    <li className="p-2 rounded-xl hover:bg-[#eff0ec]">
                      Marketplace
                    </li>
                    <li className="p-2 rounded-xl hover:bg-[#eff0ec]">
                      Discover
                    </li>
                    <li className="p-2 rounded-xl hover:bg-[#eff0ec]">
                      Pricing
                    </li>
                    <li className="p-2 rounded-xl hover:bg-[#eff0ec]">Learn</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex gap-3">
              <button className="hidden sm:inline-block px-6 py-5 text-black bg-[#eff0ec] rounded-xl hover:bg-[#d7d8d4]">
                Log in
              </button>
              <button className="px-8 py-5 text-white bg-black rounded-full font-semibold hover:bg-[#474747]">
                Sign up free
              </button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
