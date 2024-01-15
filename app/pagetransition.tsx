import { motion, AnimatePresence } from 'framer-motion';
import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';

const pageVariants = {
  initial: {
    opacity: 0,
    x: -200,
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: 200,
    scale: 1.2,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const PageTransition: FC<{children: ReactNode}> = ({ children }) => {
  const router = useRouter(); // Call useRouter to get the router object

  return (
    <AnimatePresence>
      <motion.div
        key={router.route} // Use router.route as the key
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;