import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type screenType = "mobile" | "desktop";

interface NavbarAppLogoProps {
  imgSrc: string,
  imgAlt: string,
  href: string,
  screenType: screenType
}

const NavbarAppLogo: FC<NavbarAppLogoProps> = ({ imgSrc, imgAlt, href, screenType }) => {
  return (
    <Link 
      className={screenType === "mobile" ? "w-[100px] h-full relative z-50" : "w-[140px] h-full relative z-50"}
      href={href}
    >
    <Image
        src={imgSrc}
        alt={imgAlt}
        fill
        objectFit="contain"
      />
    </Link>
  );
};

export { NavbarAppLogo };