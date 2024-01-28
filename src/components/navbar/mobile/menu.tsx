import { motion, useCycle } from "framer-motion";
import { FC, ReactNode } from "react";
import Image from "next/image";

const sidebars = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 45px) 53.5px)`,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    transition: {
      type: "spring",
      stiffness: 30,
      restDelta: 50,
    },
  }),
  closed: {
    clipPath: `circle(25px at calc(100% - 45px) 53.5px)`,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

interface MobileNavbarMenuProps {
  children?: ReactNode
}

const MobileNavbarMenu:FC<MobileNavbarMenuProps> = ({ children }) => {
   return (
    <motion.div 
      className="absolute top-0 bottom-0 left-0 right-0 px-8"
      variants={sidebars}
    >
      <div className="relative top-[150px] flex flex-col gap-3">
        {children}
      </div>
    </motion.div>
   );
};

export {MobileNavbarMenu};
