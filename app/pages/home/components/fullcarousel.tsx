'use client';

import { FC } from "react";
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Image from "next/image";
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
        style={{ 
          '--slide-size': '90%', 
          '--slide-height': '100%', 
          '--slide-spacing': '1rem' } as React.CSSProperties}
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
                <div className='w-full h-[35vh] relative'>
                  <Image
                    className="w-full h-full object-cover"
                    layout='fill'
                    src={item.imgSrc}
                    alt={item.imgAlt}
                  />
                </div>

                <div className='flex-1 inline-block gap-2'>
                  <h1 className='text-[20px] font-semibold'>{item.title}</h1>
                  <p>{item.caption}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default FullCarousel;