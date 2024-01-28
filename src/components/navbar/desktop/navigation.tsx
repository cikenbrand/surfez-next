import { FC, ReactNode } from "react";

interface NavbarDesktopNavigationProps {
  children: ReactNode
}

const NavbarDesktopNavigation: FC<NavbarDesktopNavigationProps> = ({ children }) => {
  return (
    <div className="flex flex-row gap-16">
      {children}
    </div>
  );
};

export { NavbarDesktopNavigation };