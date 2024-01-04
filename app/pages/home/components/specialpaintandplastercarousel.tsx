import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import './styles/emblapackagescarousel.css';
import Image from 'next/image';
import { SpecialPaintAndPlasterData, SpecialPaintAndPlasterDataByIndex } from '@/app/data/specialpaintandplasterdata';

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const SpecialPaintAndPlasterCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <div className="package embla w-full h-full">
      <div className="embla__viewport w-full h-full" ref={emblaRef}>
        <div className="embla__container w-full h-full">
          {slides.map((index) => (
            <div className="embla__slide w-full h-full flex flex-col gap-4" key={index}>
                <div className='w-full h-[35vh] relative'>
                  <Image
                    className="w-full h-full object-cover"
                    layout='fill'
                    src={SpecialPaintAndPlasterDataByIndex(index).imgSrc}
                    alt={SpecialPaintAndPlasterDataByIndex(index).imgSrc}
                  />
                </div>

                <div className='flex-1 inline-block gap-2'>
                  <h1 className='text-[20px] font-semibold'>{SpecialPaintAndPlasterDataByIndex(index).title}</h1>
                  <p>{SpecialPaintAndPlasterDataByIndex(index).caption}</p>
                </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SpecialPaintAndPlasterCarousel;


