"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter()
  const createTree = () => {
    router.push(`/generate?Handle=${treeLink}`)
  };
  const [treeLink, settreeLink] = useState("");
  return (
    <main>
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center mt-20 px-14 text-[#d2e823]  min-h-[100vh]">
        <div className="flex flex-col gap-8 h-fit">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-center lg:text-left">
            Everything you are. In one, simple link in bio.
          </h1>
          <p className="text-[17px] text-center lg:text-left">
            Join 50M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="flex gap-2 mt-3 flex-col sm:flex-row items-center justify-center sm:justify-start">
            <input
              className="bg-white text-black pl-3 pr-10 py-5 rounded-[10px] w-fit"
              placeholder="Enter your handle"
              type="text"
              value={treeLink}
              onChange={(e) => settreeLink(e.target.value)}
            />
            <button
              className="bg-[#e9c0e9] text-black px-8 py-5 rounded-full hover:bg-[#e1bce1] w-fit"
              onClick={() => createTree()}
            >
              Claim your Linktree
            </button>
          </div>
        </div>
        <div className="w-fit mx-auto">
          <img
            src={"/home.png"}
            className="w-[80vh]"
            alt={"image of home rotating image"}
          ></img>
        </div>
      </section>
      <section className="bg-[#e76b6b] min-h-[100vh]"></section>
    </main>
  );
}
