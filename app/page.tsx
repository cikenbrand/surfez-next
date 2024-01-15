'use client';

import Home from './home/page';
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const SplashScreen = () => {
  return (
    <motion.div
      className="w-[100vw] h-[100vh] bg-white fixed top-0 left-0 z-10 flex items-center justify-center"
      initial={{ y: 0 }}
      animate={{ y: '-100vh' }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
    >
      <div className="w-[50vw] h-[10vh] relative">
        <Image 
          src='/vectors/surfezwallserviceslogo-primary.svg' 
          alt='Surfez Wall Services Logo' 
          objectFit="contain" 
          layout="fill" 
          className="w-full h-full"
        />
      </div>
    </motion.div>
  );
};

export default function App() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []); 
  

  return (
    <main className="flex flex-col">
      {/* <SplashScreen/> */}
      <Home/>
    </main>
  )
}
