'use client';

import { useState, useCallback, useEffect } from "react";
import { flushSync } from "react-dom";
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import '@/styles/emblacarousel.css';

const TWEEN_FACTOR = 1.2;

type CarouselItemType = {
  imgSrc: string,
  imgAlt: string,
}

interface GalleryCarouselProps {
  items?: CarouselItemType[],
  options?: EmblaOptionsType
}

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ items, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      return diffToTarget * (-1 / TWEEN_FACTOR) * 100;
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll());
    });
    emblaApi.on('reInit', onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="varianttwo embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {items?.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__parallax">
                <div
                  className="embla__parallax__layer rounded-md overflow-hidden"
                  style={{
                    ...(tweenValues.length && {
                      transform: `translateX(${tweenValues[index]}%)`
                    })
                  }}
                >
                  <img
                    className="embla__slide__img embla__parallax__img"
                    src={item.imgSrc}
                    alt={item.imgAlt}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryCarousel;
