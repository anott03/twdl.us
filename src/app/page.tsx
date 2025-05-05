"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const AnimatedDivOnScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const div = 
    <div className="w-full h-screen">
      <div ref={ref} className="h-screen flex items-center justify-center">
      </div>
    </div>;

  const movingDiv = 
        <motion.div
          style={{ scale, opacity }}
          className={`${scrollYProgress.get() < 0.6 ? 'sticky top-0' : ''} w-full min-h-screen bg-black`}
        >

        </motion.div>

  return {ad1:div, ad2:movingDiv, scrollYProgress};
};

export default function Home() {
    const {ad1, ad2, scrollYProgress} = AnimatedDivOnScroll();
    return (
        <main className="font-mono font-semibold">
            <div className="w-screen h-screen flex flex-col items-center justify-center">
                <h1 className="text-[15vw]">howdy</h1>
            </div>
            <div className={`${scrollYProgress.get() < 0.6 ? 'sticky' : ''} top-0 w-screen h-screen flex flex-col items-center justify-center`}>
                <h1 className="text-[15vw]">hello</h1>
            </div>
            { ad2 }
            { ad1 }
            <div className="w-screen h-screen flex flex-col items-center justify-center">
                <h1 className="text-[15vw]">howdy</h1>
            </div>
        </main>
    )
}
