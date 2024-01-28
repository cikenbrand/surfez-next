import { motion, useCycle } from 'framer-motion';
import { FC, ReactNode, useEffect } from 'react';
import { MobileHamburgerMenuToggle } from './hamburger-menu-toggle';
import { MobileNavbarMenu } from './menu';

interface NavbarMobileMenuContainerProps {
  children: ReactNode
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const NavbarMobileMenuContainer:FC<NavbarMobileMenuContainerProps> = ({ children }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    } 
  }, [isOpen]);

  return (
    <motion.div 
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className="block md:hidden z-40"
    >
      <MobileNavbarMenu>
        <motion.ul variants={variants}>
          { children }
        </motion.ul>
      </MobileNavbarMenu>
      
      <MobileHamburgerMenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  );
};

export { NavbarMobileMenuContainer };
