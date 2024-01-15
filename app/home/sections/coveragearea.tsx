'use client';

import { motion } from "framer-motion";
import { GMap } from "../components";

const HeaderText = () => (
  <h1 className="text-[35px] md:text-[5rem] md:leading-[6rem] leading-[45px] font-semibold text-white">
    Coverage area that fits your need.
  </h1>
);

const CaptionText = () => (
  <p className="text-[20px] md:text-[2rem] font-medium text-white"> 
    Only the best for your walls. Nothing less.
  </p>
);


const CoverageArea = () => {
  return (
    <div className="w-full h-full bg-[#1b1b1b] flex justify-center relative">
      {/* container */}
      <div className="max-w-container w-full h-full flex flex-col items-center justify-start px-5 pt-[6vh] md:pt-[10vh] gap-6 md:gap-20">
        <div className="w-full h-full flex flex-col items-start gap-6 md:gap-12">
          <div className="flex flex-row gap-4">
            <div className="w-[1px] bg-white"/>
            <HeaderText/>
          </div>
          <CaptionText/>
        </div>

        {/* map */}
        <div className="w-full max-w-[1000px] h-[60vh] md:h-[70vh] bg-mobile-background bg-cover bg-no-repeat flex items-end justify-center">
          <div className="w-[92%] h-[97%] md:h-[95%] rounded-t-[12%] md:rounded-t-[18%] overflow-hidden">
            <GMap lat={2.9612069129943848} lng={101.81867980957031} areaRadius={45000}/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CoverageArea;