'use client';

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FC } from "react";
import { FullCarousel, UnionNavigationLink } from "../components";
import { SpecialPaintAndPlasterData } from "@/app/data/specialpaintandplasterdata";
import { WoodsBricksAndPanellingData } from "@/app/data/woodsbricksandpanellingdata";
import { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
 
const OPTIONS: EmblaOptionsType = { dragFree: true };
const specialPaintAndPlasterCount = SpecialPaintAndPlasterData.length;
const specialPaintAndPlasterSlides = Array.from(Array(SpecialPaintAndPlasterData.length).keys());

const woodsBricksAndPanellingCount = WoodsBricksAndPanellingData.length;
const woodBricksAndPanellingSlides = Array.from(Array(WoodsBricksAndPanellingData.length).keys());

const HeaderText = () => (
  <h1 className="text-[35px] leading-[45px] font-semibold text-black">
    Looking for a unique touch? Choose from our individual paint finishes.
  </h1>
);

const CaptionText: FC<{ content: string }> = ({ content }) => (
  <p className="text-[30px] leading-[40px] font-semibold text-black"> 
    {content}
  </p>
);

const CaptionDetailText: FC<{ content: string }> = ({ content }) => (
  <p className="text-gray-800"> 
    {content}
  </p>
);

const IndividualPaint = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <div className="w-full flex justify-center py-12">
      <div className="max-w-container w-full h-full flex flex-col px-5 gap-10">
        <motion.div 
            ref={ref2}
            className="flex-1 w-full h-full flex flex-col justify-between gap-6 items-start"
            initial={{opacity: 0, y: 10}}
            animate={{opacity: inView2? 1: 0, y: inView2? 0 : 10}}
            transition={{duration: 0.5}}
        >
          <HeaderText/>
        </motion.div >

        {/* special paint and plaster series */}
        <div className="flex flex-col gap-6 items-start">
          <div className="flex flex-row gap-4">
            <div className="w-[1px] bg-black"/>
            <CaptionText content="Special Paint and Plaster Series"/>
          </div>

          <CaptionDetailText content="Offering custom special effect paint and plaster, charged by square foot for precise and personal service."/>
          <UnionNavigationLink href="" color="secondary" title="View more" size="small"/>
          <FullCarousel items={SpecialPaintAndPlasterData.map(item => ({
            ...item,
            imgAlt: `${item.title} image`
          }))} />
        </div>

        {/* wood, bricks and panelling */}
        <div className="flex flex-col gap-6 items-start">
          <div className="flex flex-row gap-4">
          <div className="w-[1px] bg-black"/>
            <CaptionText content="Woods, bricks and panelling"/>
          </div>

          <CaptionDetailText content="We also provide woodwork for walls and doors, including wainscoting and panels. We also accept custom requests."/>
          <UnionNavigationLink href="" color="secondary" title="View more" size="small"/>
          <FullCarousel items={WoodsBricksAndPanellingData.map(item => ({
            ...item,
            imgAlt: `${item.title} image`
          }))} />
        </div>

      </div>
    </div>
  );
};

export default IndividualPaint;