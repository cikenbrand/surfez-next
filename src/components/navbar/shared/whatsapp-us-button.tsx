import { FC, useState } from "react";
import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";

interface WhatsAppUsButtonProps {
  href?: string;
}

const WhatsAppUsButton:FC<WhatsAppUsButtonProps> = ({ href }) => {
  const [hover, setHover] = useState<boolean>(false);
  const duration: number = 0.2;

  return (
    <a 
      href={href} 
      className='cursor-pointer'>
      <motion.div 
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        whileHover={{ backgroundColor: 'rgba(250, 250, 250, 1)' }} 
        transition={{ duration: duration}}
        className="flex flex-row py-3 px-5 rounded-full items-center gap-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      >
        <Image
          src='/vectors/whatsapp.svg'
          alt='dsadsa'
          width={30}
          height={30}        
        />

        <motion.p 
          className="text-secondary-color text-[1.2rem] md:text-[1.55rem] font-medium hidden md:block"
          animate={{ color: hover ? 'black' : 'white' }}
          transition={{ duration: duration }}
        >
          WhatsApp Us
        </motion.p>
      </motion.div>
    </a>
  );
};

export { WhatsAppUsButton };