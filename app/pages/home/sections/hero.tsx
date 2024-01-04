'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { FC } from "react";
import { UnionNavigationLink } from "../components";

const SocialMediaLink:FC<{imgSrc:string, title:string, caption:string}> = ({imgSrc, title, caption}) => (
  <a href="/" className="flex bg-black/[.8] py-2 px-4 gap-2 rounded-lg gap-4">
    <div className="w-[40px] relative">
      <Image 
        src={imgSrc} 
        alt={imgSrc} 
        objectFit="contain" 
        layout="fill" 
        className="w-full h-full"
      />
    </div>
    <div className="flex flex-col">
      <p className="text-white font-semibold">{title}</p>
      <p className="text-white">{caption}</p>
    </div>
  </a>
);

const ScrollToExplore = () => {
  return (
    <motion.div 
      className="flex flex-row gap-2"
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop'
      }}
    >
      <p className="text-white text-[15px]">SCROLL TO EXPLORE</p>
      <div className="h-full w-[1.2rem] relative top-[2.5px]">
        <img 
          src='/vectors/chevron.svg' 
          alt="Surfez Wall Services Logo"
        />
      </div>
    </motion.div>
  );
};

const Logo = () => (
  <Image src='/vectors/surfezwallserviceslogo-secondary.svg' 
    objectFit="contain" 
    layout="fill"
    objectPosition="left"
    alt="Surfez Wall Services Logo"
  />
);

const HeaderText = () => (
  <h1 className="text-white font-medium text-[2.5rem] leading-[2.5rem]">More than just brush and paint.</h1>
);

const Hero = () => {
  return (
    <div className="w-full h-[100vh] bg-hero-background bg-cover bg-center bg-no-repeat flex flex-col px-7 py-7 gap-12">
      {/* nav bar */}
      <div className="w-full h-[11vh] relative">
        <Logo/>
      </div>

      {/* content */}
      <div className="w-full h-full flex flex-col gap-10 items-start relative">
        <HeaderText/>

        {/* link */}
        <UnionNavigationLink title='Explore our packages' href='' color='primary'/>

        <div className="flex flex-col gap-2 items-start absolute bottom-0">
          <SocialMediaLink imgSrc="/vectors/tiktok.svg" title="Tiktok" caption="@surfezwallservices"/>
          <SocialMediaLink imgSrc="/vectors/instagram.svg" title="Instagram" caption="@surfezwallservices"/>

          <div className="pt-6 relative left-2">
            <ScrollToExplore/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;