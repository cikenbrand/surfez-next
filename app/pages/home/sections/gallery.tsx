'use client';

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { GalleryCarousel } from "../components";
import { UnionNavigationLink } from '../components';
import GalleryData from "@/app/data/gallerydata";


const HeaderText = () => (
  <h1 className="text-[35px] leading-[45px] font-semibold">
    We deliver detailed, touch-up free wall finishes with the highest standards. It&apos;s a promise.
  </h1>
);

const CaptionText = () => (
  <p className="text-[20px] font-medium max-w-[300px]"> 
    Only the best for your walls. Nothing less.
  </p>
);

const Gallery = () => {
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
    <div className="w-full flex justify-center py-12">
      <div className="max-w-container w-full h-full flex flex-col px-5 gap-12">
        <div className="max-w-container w-full h-full flex flex-col items-start justify-center gap-6">
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
            className="flex-1 w-full h-full flex flex-col justify-between gap-6 items-start"
            initial={{opacity: 0, y: 10}}
            animate={{opacity: inView2? 1: 0, y: inView2? 0 : 10}}
            transition={{duration: 0.5}}
          >
            <HeaderText/>
            <UnionNavigationLink title="Learn more about us" href="" color="secondary"/>
          </motion.div >
        </div>
        <motion.div 
          ref={ref3}
          initial={{opacity: 0, y: 10}}
          animate={{opacity: inView3? 1: 0, y: inView3? 0 : 10}}
          transition={{duration: 0.5}}
          className="max-w-container w-full h-full flex flex-col items-center justify-center">
          <GalleryCarousel items={GalleryData.map(item => ({
            ...item,
          }))} />
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;