import { motion } from "framer-motion";
import { ReactNode, FC } from "react";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

interface NavbarMobileNavigationItemProps {
  children: ReactNode;
}

const NavbarMobileNavigationItem:FC<NavbarMobileNavigationItemProps> = ({ children }) => (
  <motion.li variants={variants}>
    {children}
  </motion.li>
);

export { NavbarMobileNavigationItem };