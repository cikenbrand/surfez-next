import { FC, ReactNode } from "react";

interface NavbarMobileContainerProps {
  children: ReactNode
}

const NavbarMobileContainer: FC<NavbarMobileContainerProps> = ({ children }) => {
  return (
    <div className="w-full h-[100px] lg:hidden flex flex-row justify-between items-center">
      {children}
    </div>
  );
};

export { NavbarMobileContainer };

