'use client';

import Link from "next/link";
import { FC, useState } from "react";


type UnionNavigationLinkColor = 'primary' | 'secondary';
type UnionNavigationLinkSize = 'regular' | 'small';

interface UnionNavigationLinkProps {
  href: string,
  title: string,
  color: UnionNavigationLinkColor,
  size?: UnionNavigationLinkSize
}

const UnionNavigationLink:FC<UnionNavigationLinkProps> = ({ href, title, color, size = 'regular' }) => {
  return (
    <Link href={href}>
      <div className="w-full h-full flex flex-col gap-2 md:gap-4">
        <div className="w-full h-full flex flex-row gap-8 md:gap-12">
          <p className={`font-medium ${size === 'regular' ? 'text-lg md:text-2xl' : 'text-md md:text-xl'} ${color === 'primary' ? 'text-white' : 'text-black'}`}>{title}</p>
          <div className={`h-full ${size === 'regular' ? 'w-[1.2rem]' : 'w-[1rem]'}`}>
            <img 
                src={`${color === 'primary' ? '/vectors/unionright-primary.svg' : '/vectors/unionright-secondary.svg' }`}
                alt="Surfez Wall Services Logo"
                className="relative top-2 md:top-3"
            />
          </div>
        </div>
        <div className={`w-full h-[1px] ${color === 'primary' ? 'bg-white' : 'bg-black'}`} />
      </div>
    </Link>
  );
};

export default UnionNavigationLink;
