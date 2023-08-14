"use client";

import { fuzzy_bubbles_bold as fbb } from "@/styles/fonts";
import { Square, Circle, Triangle } from "@/components/shapes";
import { Menu } from "@/components/icons";
import { useState } from "react";
import Link from "next/link";

function SwankyButton({ onClick, children, className }: any) {
    return (
        <button className={"p-3 px-5 bg-purple-1 rounded-lg flex flex-row gap-3 hover:bg-gradient-to-br hover:from-purple-1 hover:to-pink-1 transition-all duration-200 " + className} onClick={onClick}>{children}</button>
    );
}

export default function Home() {
  let [ e, se ] = useState(false);

  return (
    <main className="w-screen h-screen flex flex-row justify-center bg-pink-2 p-3 overflow-hidden">
        <div className="max-w-[800px] w-full h-full flex flex-col justify-center items-center p-3 relative">
            <Square width={75} height={75} color="fill-red-1" className="absolute top-12 left-8 md:left-32 duration-200" rotate="z 45deg" />
            <Circle radius={50} color="fill-purple-1" className="absolute -bottom-12 right-16" />
            <Triangle width={100} height={100} color="fill-blue-4" className="absolute -right-4 opacity-70 md:opacity-100 duration-500" rotate="z -60deg"/>
            <Triangle width={75} height={75} color="fill-green-1" className="absolute bottom-12 left-4" rotate="z 60deg"/>

            <div className={`absolute top-0 right-0 flex flex-row justify-between rounded-lg text-slate-3 z-20 min-w-0 duration-500 transition-all delay-0 ${e ? "min-w-full bg-purple-1" : ""}`}>
                <div className="flex flex-row gap-5 items-center p-3">
                    { e && <><Link className="" href="https://me.twdl.us">About Me</Link>
                    <Link className="" href="https://me.twdl.us">URL Shortener</Link> </> }
                </div>
                <SwankyButton onClick={() => se(!e)}>Menu <Menu /></SwankyButton>
            </div>

            <div className="flex flex-col flex-1 justify-center items-center text-center z-10">
                <div className="flex flex-col justify-center items-center">
                    <h1 className={"text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-1 to-red-1 " + fbb.className}>Hello</h1>
                    <p className="text-xl text-slate-3">Welcome to my little corner of the internet!</p>
                    <p className="text-slate-3 px-12 md:px-32 pt-3">This page is where I test ideas out, have fun, and make a mess. You've been warned.</p>
                </div>
            </div>
        </div>
    </main>
  )
}
