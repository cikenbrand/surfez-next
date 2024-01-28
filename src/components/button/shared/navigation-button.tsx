import Image from "next/image";
import { FC, useState } from "react";
import Link from "next/link";
import {CustomDomComponent, motion} from 'framer-motion';

type color = 'black' | 'white';

interface NavigationButtonProps {
  title: string;
  colorOptions?: color
}

const NavigationButton: FC<NavigationButtonProps> = ({ title, colorOptions = 'white' }) => {
  const [hover, setHover] = useState(false);
  const duration: number = 0.4;

  return (
    <motion.div 
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="flex flex-col gap-3 overflow-hidden"
    >
      <div className="flex gap-10 md:gap-14 items-center">
        {/* title and union left */}
        <motion.div 
          animate={{ x: hover ? 30 : 0 }} 
          transition={{ duration: duration }}
          className="flex flex-row relative"
        >
          {colorOptions === 'white' ? (
            <>
              <Image
                src='/vectors/union-white.svg'
                alt="union"
                width={18}
                height={18}
                className="absolute top-3 left-[-30px]"
              />
              <p className="text-secondary-color text-[1.2rem] md:text-[1.55rem] font-medium">
                {title}
              </p>
            </>
          ) : (
            <>
              <Image
                src='/vectors/union-black.svg'
                alt="union"
                width={18}
                height={18}
                className="absolute top-3 left-[-30px]"
              />
              <p className="text-primary-color text-[1.2rem] md:text-[1.55rem] font-medium">
                {title}
              </p>
            </>
          )}
        </motion.div>

        {/* union right */}
        <motion.div 
          animate={{ x: hover ? 30 : 0 }}
          transition={{ duration: duration }}
        >
          {colorOptions === 'white' ? (
            <Image
              src='/vectors/union-white.svg'
              alt="union"
              width={18}
              height={18}
              className="relative top-[1px]"
            />
          ) : (
            <Image
              src='/vectors/union-black.svg'
              alt="union"
              width={18}
              height={18}
              className="relative top-[1px]"
            />
          )}

        </motion.div>
      </div>

      {/* underline */}
      <motion.div 
        animate={{ x: hover ? 800: 0 }}
        transition={{ duration: duration }}
        className="flex flex-row relative">
        {colorOptions === 'white' ? (
          <>
            <div className="w-full h-[1px] bg-white absolute left-[-800px]"/>
            <div className="w-full h-[1px] bg-white"/>
          </>
        ) : (
          <>
            <div className="w-full h-[1px] bg-black absolute left-[-800px]"/>
            <div className="w-full h-[1px] bg-black"/>
          </>
        )}

      </motion.div>
    </motion.div>
  )
}

export { NavigationButton };