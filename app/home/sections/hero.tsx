'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { FC } from "react";
import { UnionNavigationLink } from "../components";
import Link from "next/link";

const SocialMediaLink:FC<{imgSrc:string, title:string, caption:string}> = ({imgSrc, title, caption}) => (
  <a href="/" className="flex bg-black/[.8] py-2 px-4 rounded-lg gap-6">
    <div className="w-[40px] md:w-[50px] relative">
      <Image 
        src={imgSrc} 
        alt={imgSrc} 
        objectFit="contain" 
        layout="fill" 
        className="w-full h-full"
      />
    </div>
    <div className="flex flex-col">
      <p className="text-white font-semibold text-[1.2rem] md:text-[1.4rem]">{title}</p>
      <p className="text-white text-[1rem] md:text-[1.2rem]">{caption}</p>
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
      <p className="text-white text-[1rem] lg:text-[1.2rem]">SCROLL TO EXPLORE</p>
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
    width={150}
    height={1}
    objectPosition="left"
    alt="Surfez Wall Services Logo"
  />
);

const HeaderText = () => (
  <h1 className="md:max-w-[40rem] text-white font-medium text-[2.5rem] md:text-[4.5rem] leading-[3rem] md:leading-[5rem]">More than just brush and paint.</h1>
);

const NavLink:FC<{ href:string, title:string }> = ({ href, title }) => (
  <Link href={href}>
    <h3 className="text-white text-[1.4rem] font-medium">{title}</h3>
  </Link>
);

const Hero = () => {
  return (
    <div className="w-full h-[100vh] bg-hero-background bg-cover bg-center bg-no-repeat py-7 gap-12 flex flex-col items-center">
      <div className="max-w-container w-full h-full flex flex-col gap-8 md:gap-20 px-5">
        <div className="w-full h-[11vh] flex flex-row relative justify-between">
          <Logo/>

          <div className="hidden md:flex flex-row gap-6 items-center justify-center">
              <div className="h-[5px] w-[5px] bg-white"/>
              <NavLink href="" title="Our Works"/>
              <div className="h-[5px] w-[5px] bg-white"/>
              <NavLink href="" title="Packages"/>
              <div className="h-[5px] w-[5px] bg-white"/>
              <NavLink href="" title="Individual Finishes"/>
              <div className="h-[5px] w-[5px] bg-white"/>
              <NavLink href="" title="Coverage Area"/>
              <div className="h-[5px] w-[5px] bg-white"/>
          </div>

          <div className="hidden md:flex items-center">
            <div className="bg-black py-4 px-6 rounded-full bg-opacity-[0.8]">
              <p className="text-white text-[1.4rem] font-medium">Contact Us</p>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-10 items-start relative">
          <HeaderText/>

          <UnionNavigationLink title='Explore our packages' href='' color='primary'/>

          <div className="flex flex-col gap-2 md:gap-4 items-start absolute bottom-0">
            <SocialMediaLink imgSrc="/vectors/tiktok.svg" title="Tiktok" caption="@surfezwallservices"/>
            <SocialMediaLink imgSrc="/vectors/instagram.svg" title="Instagram" caption="@surfezwallservices"/>

            <div className="pt-6 relative left-2">
              <ScrollToExplore/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;