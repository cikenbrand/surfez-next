import { FC, ReactNode } from "react";

interface NavbarDesktopContainerProps {
  children: ReactNode
}

const NavbarDesktopContainer: FC<NavbarDesktopContainerProps> = ({ children }) => {
  return (
    <div className="w-full h-[100px] hidden lg:flex flex-row justify-between items-center">
      {children}
    </div>
  );
};

export { NavbarDesktopContainer };

