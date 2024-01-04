'use client';

import { Home } from "./pages";
import { motion } from "framer-motion";
import Image from "next/image";

const SplashScreen = () => (
  <motion.div
    className="w-[100vw] h-[100vh] bg-white fixed top-0 left-0 z-10 flex items-center justify-center"
    initial={{ y: 0 }}
    animate={{ y: '-100vh' }}
    transition={{ duration: 0.5, ease: 'easeInOut', delay:0.5 }}
  >
    <div className="w-[50vw] h-[10vh] relative">
      <Image 
        src='/vectors/surfezwallserviceslogo-primary.svg' 
        alt='surfezwallserviceslogo_primary' 
        objectFit="contain" 
        layout="fill" 
        className="w-full h-full"
      />
    </div>
  </motion.div>
);

export default function App() {
  return (
    <main className="flex flex-col">
      <SplashScreen/>
      <Home/>
    </main>
  )
}
