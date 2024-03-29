'use client';

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FC } from "react";
import { FullCarousel, UnionNavigationLink } from "../components";
import { SpecialPaintAndPlasterData } from "@/app/data/specialpaintandplasterdata";
import { WoodsBricksAndPanellingData } from "@/app/data/woodsbricksandpanellingdata";

const HeaderText = () => (
  <h1 className="text-[1.5rem] leading-[2rem] md:text-[3rem] md:leading-[3.5rem] font-medium text-gray-800">
    Looking for a unique touch? Choose from our individual paint finishes.
  </h1>
);

const CaptionText: FC<{ content: string }> = ({ content }) => (
  <p className="text-[30px] leading-[40px] md:text-[5rem] md:leading-[6rem] font-semibold text-black"> 
    {content}
  </p>
);

const CaptionDetailText: FC<{ content: string }> = ({ content }) => (
  <p className="text-gray-800 md:text-[2rem] max-w-[1000px]"> 
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
    <div className="w-full flex justify-center py-6 md:py-14">
      <div className="max-w-container w-full h-full flex flex-col px-5 gap-6 md:gap-14">
        <motion.div 
            ref={ref1}
            className="w-full h-full flex flex-row justify-between items-start"
            initial={{opacity: 0, y: 10}}
            animate={{opacity: inView1? 1: 0, y: inView1? 0 : 10}}
            transition={{duration: 0.5}}
        >
          <div className="flex-1">
            <HeaderText/>
          </div>
          <div className="hidden md:block flex-1"/>
        </motion.div >

        <div className="w-full h-full flex flex-col gap-8 md:gap-[200px]">
          {/* special paint and plaster series */}
          <div className="flex flex-col gap-6 md:gap-14">
            <p className="text-gray-700 relative text-[0.9rem] md:text-[1.4rem] top-4 font-medium">03.</p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="flex-1 flex flex-row gap-4">
                <div className="w-[1px] bg-black"/>
                <CaptionText content="Special Paint and Plaster Series"/>
              </div>

              <div className="flex-1 flex flex-col justify-end items-start">
                <CaptionDetailText content="Offering custom special effect paint and plaster, charged by square foot for precise and personal service."/>
              </div>
            </div>

            <div className="flex flex-row md:gap-10">
              <div className="flex-1 hidden md:flex"/>
              <div className="flex-1 flex items-start">
              <UnionNavigationLink title="View more" href="" color="secondary"/>
              </div>
            </div>

            <div className="pt-4">
              <FullCarousel items={SpecialPaintAndPlasterData.map(item => ({
                ...item,
                imgAlt: `${item.title} image`
              }))}/>
            </div>
          </div>

          {/* woods, bricks and panelling */}
          <div className="flex flex-col gap-6 md:gap-14">
            <p className="text-gray-700 relative text-[0.9rem] md:text-[1.4rem] top-4 font-medium">04.</p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="flex-1 flex flex-row gap-4">
                <div className="w-[1px] bg-black"/>
                <CaptionText content="Woods, bricks and panelling"/>
              </div>

              <div className="flex-1 flex flex-col justify-end items-start">
                <CaptionDetailText content="We also provide woodwork for walls and doors, including wainscoting and panels. We also accept custom requests."/>
              </div>
            </div>

            <div className="flex flex-row md:gap-10">
              <div className="flex-1 hidden md:flex"/>
              <div className="flex-1 flex items-start">
              <UnionNavigationLink title="View more" href="" color="secondary"/>
              </div>
            </div>

            <div className="pt-4">
              <FullCarousel items={WoodsBricksAndPanellingData.map(item => ({
                ...item,
                imgAlt: `${item.title} image`
              }))} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualPaint;