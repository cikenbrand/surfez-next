'use client';

import { FC } from "react";
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Image from "next/image";
import Link from "next/link";
import '@/styles/emblacarousel.css';

type CarouselItemType = {
  title: string,
  caption: string,
  imgSrc: string,
  imgAlt: string
}

interface FullCarouselProps {
  items?: CarouselItemType[],
  options?: EmblaOptionsType
}

const FullCarousel: FC<FullCarouselProps> = ({ items, options }) => {
  const [emblaRef] = useEmblaCarousel(options)
    return (
      <div 
        className="variantone embla w-full h-full" 
      >
      <div 
        className="w-full h-full overflow-hidden" 
        ref={emblaRef}
      >
        <div 
          className="w-full h-full flex touch-pan-y ml-[calc(var(--slide-spacing)*-1)]" 
          style={{ 'backface-visibility': 'hidden' } as React.CSSProperties}
        >
          {items?.map((item, index) => (
            <div 
              className="w-full h-full flex flex-col gap-4 relative" 
              key={index}
              style={{
                flex: '0 0 var(--slide-size)',
                paddingLeft: 'var(--slide-spacing)',
              }}
            >
                <div className='w-full h-[35vh] md:h-[38vh] relative rounded-md overflow-hidden'>
                  <Image
                    className="w-full h-full object-cover"
                    layout='fill'
                    src={item.imgSrc}
                    alt={item.imgAlt}
                  />
                </div>

                <div className='flex-1 flex flex-col gap-1 items-start px-2 py-2'>
                  <div className="w-full h-full flex flex-row gap-2">
                    <div className="w-[1px] my-1 bg-gray-600"></div>
                    <h1 className='text-[1.2rem] md:text-[1.4rem] font-semibold'>{item.title}</h1>
                  </div>
                  <div className="w-full relative left-2">
                    <p className=" text-[1rem] md:text-[1.1rem]">{item.caption}</p>
                  </div>

                  <Link href={""} className="py-2 px-4 mt-4 bg-black relative left-2">
                    <p className="text-white text-[1rem]">Show Details</p>
                  </Link>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default FullCarousel;