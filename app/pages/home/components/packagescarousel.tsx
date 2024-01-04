import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Image from 'next/image';
import { PackagesData, PackagesDataByIndex } from '@/app/data/packagesdata';

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const PackagesCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <div 
      className="package embla w-full h-full" 
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
          {slides.map((index) => (
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
                    src={PackagesDataByIndex(index).imgSrc}
                    alt={PackagesDataByIndex(index).imgSrc}
                  />
                </div>

                <div className='flex-1 inline-block gap-2'>
                  <h1 className='text-[20px] font-semibold'>{PackagesDataByIndex(index).title}</h1>
                  <p>{PackagesDataByIndex(index).caption}</p>
                </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PackagesCarousel;


