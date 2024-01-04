import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Logo = () => (
  <Image src='/vectors/surfezwallserviceslogo-primary.svg' 
    objectFit="contain" 
    layout="fill"
    objectPosition="left"
    alt="Surfez Wall Services Logo"
  />
);

const HeaderText = () => (
  <h1 className="text-[20px] leading-[30px] font-semibold text-white">
    © 2024 Surfez Wall Services
  </h1>
);

const FooterLink: FC<{ href: string, title: string }> = ({ href, title }) => (
  <Link href={href}>
    <p className="text-white">{title}</p>
  </Link>
);

const Footer = () => {
  return (
    <div className="w-full h-auto bg-hero-background bg-cover bg-center bg-no-repeat flex flex-col px-7 py-7 gap-6">
      <div className="w-full h-[8vh] relative">
        <Logo/>
      </div>
      <div className="flex flex-col gap-2">
        <HeaderText/>
        <div className="flex flex-row gap-4 items-center">
          <FooterLink href="" title="Terms of use"/>
          <div className="w-[5px] h-[5px] bg-white"/>
          <FooterLink href="" title="Privacy Policy"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;