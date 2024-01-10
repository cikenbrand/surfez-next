'use client';

import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/accordion";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FC } from "react";

const stepsdetails = [
  { 
    title: ' Find your design theme.',
    caption: 'Search & choose wisely your preferred design theme. Don’t bias with trendy design. The best design is the one that suits you & your family non-awkwardly.'
  },
  { 
    title: 'Choose package based on budget.',
    caption: 'Although personal design preference is the best outcome, but budgeting is the most important part.'
  },
  { 
    title: 'Whatsapp your detail inquiry.',
    caption: 'Design theme, package, your house location, room size, picture of the area. Don’t worry, we will guide you more on Whatsapp.'
  },
  { 
    title: 'Set a site visit.',
    caption: 'What? Do you think, we will straight do work on your house? No! We need to see your house first. However, we will provide rough price first for you before site visit (We charge absorbable deposit for site visit)'
  },
  { 
    title: 'Layout, design, color ideas.',
    caption: 'After site visit, we will provide you ideas & suggestion on floor layout plan, design of the wall, and colours to match the interiors.'
  },
  { 
    title: '3d design?',
    caption: 'We don’t give 3D design visuals.. We will give sample picture only (like mood boards) for you to imagine. However, if you find it hard to imagine, we have panel interior designers to do 3D design visuals, with charges of course.'
  },
  { 
    title: 'Ideas, discussion and confirmation.',
    caption: 'Yes, we need to discuss on the design, colours and materials. Once you are satisfied & confirm with all, only then we will start the work.'
  },
  { 
    title: 'Payment terms.',
    caption: 'We will provide formal PDF quotation for you with detail works. For below RM10K job, our terms are 80% deposit before start the work, 20% balance after all completed.'
  },
];

const HeaderText = () => (
  <h1 className="text-[35px] leading-[45px] md:text-[5rem] md:leading-[6rem] font-semibold">
    Proceed with these simple steps to get going.
  </h1>
);

const StepAccordion:FC<{ index:number, title:string, caption:string }> = ({index, title, caption}) => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[1px] bg-black opacity-[0.3]"/>
      <AccordionItem py='7vh'>
        <h2>
          <AccordionButton justifyContent='space-between'>
            <div className="flex flex-row gap-5">
              <h1 className="text-lg font-semibold relative md:top-[10px] md:text-[20px]">
                {`0${index + 1}.`}
              </h1>

              <h1 className="text-[20px] font-semibold text-start md:text-[35px]">
                {title}
              </h1>
            </div>
            <AccordionIcon position='relative' right={'2vw'} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} display='flex' flexDirection='row' gap={'40px'} pt={20}>
          {/* empty shell */}
          <div className=" w-[20px] h-[30px]"/> 
          <div>
            <p className="text-[17px] md:text-[25px]">
              {caption}
            </p>
          </div>
        </AccordionPanel>
      </AccordionItem>
      <div className={`w-full h-[1px] bg-black opacity-[0.3] ${index === 7 ? 'block' : 'hidden'}`}/>

    </div>
  );
};

const StepsToProceed = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <div className="w-full flex justify-center py-12">
      <div className="max-w-container w-full h-full flex flex-col px-5 gap-12 md:gap-24">
        <motion.div 
          ref={ref1}
          initial={{opacity: 0, y: 10}}
          animate={{opacity: inView1? 1: 0, y: inView1? 0 : 10}}
          transition={{duration: 0.5}}
          className="w-full h-full"

        >
          <HeaderText/>
        </motion.div>
        <div className="max-w-container w-full flex flex-col items-center justify-center">
          <Accordion
            width='100%'
            allowMultiple
            allowToggle
          >
            {stepsdetails.map((stepdetail, index) => (
              <StepAccordion 
                key={index}
                index={index}
                title={stepdetail.title}
                caption={stepdetail.caption}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default StepsToProceed;