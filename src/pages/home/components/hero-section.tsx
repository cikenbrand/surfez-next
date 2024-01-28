import Image from "next/image";
import { FC, ReactNode } from 'react';
import { Navbar } from "@/pages/components/navbar";
import { NavigationButton } from "@/components/button";
import Link from "next/link";

const backdropImage = {
  src: '/images/stuccovenezianowall.jpg',
  alt: 'stucco venezianowall',
};

const headercaption = "Receive the world at your doorstep."

interface ContainerWithImageBackdropProps {
  children?: ReactNode
}

const ContainerWithImageBackdrop: FC<ContainerWithImageBackdropProps> = ({ children }) => (
  <div className="w-full h-full relative">
    <Image
      src={backdropImage.src}
      alt={backdropImage.alt}
      fill
      objectFit="cover"
    />
    <div className="absolute top-0 left-0 w-full h-full flex justify-center">
      {children}
    </div>
  </div>
);

interface SocialMediaLinkButtonProps {
  title: string;
  caption: string;
  imgSrc: string;
  imgAlt: string;
  href: string;
}

const SocialMediaLinkButton: FC<SocialMediaLinkButtonProps> = ({ title, caption, imgSrc, imgAlt, href }) => {
  return (
    <a href={href}>
      <div 
        className="flex flex-row px-4 py-3 rounded-lg gap-6" 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      >
        <div>
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={50}
            height={50}
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-white font-bold text-[1rem] md:text-[1.2rem]">{title}</h3>
          <h3 className="text-white font-medium text-[1rem] md:text-[1.2rem]">{caption}</h3>
        </div>
      </div>
    </a>
  )
}

const HeroSection = () => {
  return (
    <div className="h-[100vh]">
      <ContainerWithImageBackdrop>
        <div className="flex flex-col items-start gap-8 md:gap-20 w-full max-w-section px-6 py-4 md:py-8">
          <Navbar/>

          <div className="flex flex-col items-start gap-10 md:gap-12 w-full h-full relative">
            <div className="flex flex-col items-start gap-12 max-w-[600px]">
              <h1 className="text-secondary-color text-[2.5rem] leading-[3rem] md:text-[4rem] md:leading-[4.5rem] font-medium">
                {headercaption}
              </h1>
            </div>

            <div>
              <Link href={"/"}>
                <NavigationButton title="Discover our smart mailbox"/>
              </Link>
            </div>

            {/* social media links */}
            <div className="flex flex-col gap-2 absolute bottom-0">
              <SocialMediaLinkButton title="Tiktok" caption="@surfezwallservices" imgSrc="/vectors/tiktok.svg" imgAlt="dasdas" href=""/>
              <SocialMediaLinkButton title="Instagram" caption="@surfezwallservices" imgSrc="/vectors/instagram.svg" imgAlt="dasdas" href=""/>
            </div>
          </div>
        </div>
      </ContainerWithImageBackdrop>
    </div>
  );
};

export {HeroSection};