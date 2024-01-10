'use client';

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FullCarousel, UnionNavigationLink } from "../components";
import { PackagesData } from "@/app/data/packagesdata";

const HeaderText = () => (
  <h1 className="text-[35px] leading-[45px] md:text-[5rem] md:leading-[6rem] font-semibold">
    Tailored service to match your design vision. Share your ideas for a custom quote.
  </h1>
);

const CaptionText = () => (
  <p className="text-[20px] md:text-[2rem] font-medium max-w-[500px]"> 
    We offer tailored service packages for every space.
  </p>
);

const Packages = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <div className="w-full flex justify-center py-12 md:py-36">
      <div className="max-w-container w-full h-full flex flex-col px-5 gap-12 md:gap-16">
        <div className="max-w-container w-full h-full flex flex-col items-start justify-center gap-6 md:gap-20">
          <motion.div 
            ref={ref1}
            className="flex-1 flex flex-row w-full h-full gap-4"
            initial={{opacity: 0, y: 10}}
            animate={{opacity: inView1? 1: 0, y: inView1? 0 : 10}}
            transition={{duration: 0.5}}
          >
            <div className="w-[1px] bg-gray-500"/>
            <CaptionText/>
          </motion.div>

          <motion.div 
            ref={ref2}
            className="flex-1 w-full h-full flex flex-col justify-between gap-6 md:gap-20 items-start"
            initial={{opacity: 0, y: 10}}
            animate={{opacity: inView2? 1: 0, y: inView2? 0 : 10}}
            transition={{duration: 0.5}}
          >
            <HeaderText/>
            <UnionNavigationLink title="Explore more packages" href="" color="secondary"/>
          </motion.div >
        </div>
        <motion.div 
          ref={ref3}
          initial={{opacity: 0, y: 10}}
          animate={{opacity: inView3? 1: 0, y: inView3? 0 : 10}}
          transition={{duration: 0.5}}
          className="max-w-container w-full h-full flex flex-col items-center justify-center">
          <FullCarousel items={PackagesData.map(item => ({
            ...item,
            imgAlt: `${item.title} image`
          }))} />
        </motion.div>
      </div>
    </div>
  );
};

export default Packages;