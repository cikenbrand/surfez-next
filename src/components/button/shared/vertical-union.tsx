import { FC, ReactNode, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface VerticalUnionButtonProps {
  title: string;
}

const VerticalUnionButton:FC<VerticalUnionButtonProps> = ({ title }) => {
  const [hover, setHover] = useState<boolean>(false);
  const duration: number = 0.3;

  return (
    <motion.div 
      className="flex flex-col gap-2"
      onHoverStart={() => setHover(true)} 
      onHoverEnd={() => setHover(false)}
    >
      <div 
        className="flex flex-col gap-3 overflow-hidden" 
      >
        <div className="relative">
          <motion.p 
            className="text-secondary-color text-[1.2rem] md:text-[1.55rem] font-medium"
            animate={{ y: hover ? -20 : 0, opacity: hover ? 0: 1 }}
            transition={{ duration: duration }}
          >
            {title}
          </motion.p>

          <motion.p 
            className="text-secondary-color text-[1.2rem] md:text-[1.55rem] font-medium absolute top-[50px] left-0"
            animate={{ y: hover ? -50 : 0, opacity: hover ? 1: 0 }}
            transition={{ duration: duration }}
          >
            {title}
          </motion.p>
        </div>
      </div>

      <motion.div 
        animate={{ y: hover ? 0 : 5, opacity: hover ? 1 : 0 }} 
        transition={{ duration: duration }}
        className="w-full h-[1px] bg-white"
      />
    </motion.div>
  );
}

export { VerticalUnionButton };