import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full bg-[#004D43] rounded-4xl py-20">
      <div className="border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className='text-[22vw] tracking-tighter leading-none font-["Founders Grotesk"] font-semibold uppercase mb-2 md:mb-8'
        >
          We are ochii
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className='text-[22vw] tracking-tighter leading-none font-["Founders Grotesk"] font-semibold uppercase mb-2 md:mb-8'
        >
          We are ochii
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className='text-[22vw] tracking-tighter leading-none font-["Founders Grotesk"] font-semibold uppercase mb-2 md:mb-8'
        >
          We are ochii
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
