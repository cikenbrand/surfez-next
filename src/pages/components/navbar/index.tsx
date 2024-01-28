import { 
  NavbarDesktopContainer, 
  NavbarAppLogo, 
  NavbarDesktopNavigation, 
  WhatsAppUsButton, 
  NavbarMobileContainer, 
  NavbarMobileMenuContainer,
  NavbarMobileNavigationItem
} from "@/components/navbar";

import Link from "next/link";
import { VerticalUnionButton } from "@/components/button";
import { NavigationLinkData } from "./data/navigation-link-data";


const Navbar = () => {
  return (
    <>
      <NavbarDesktopContainer>
        <NavbarAppLogo 
          imgSrc="/vectors/surfezwallserviceslogo-secondary.svg" 
          imgAlt="surfez wall services logo" 
          href="/"
          screenType="desktop"
        />
        <NavbarDesktopNavigation>
          {NavigationLinkData.map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
            >
              <VerticalUnionButton title={item.title}/>
            </Link>
          ))}
        </NavbarDesktopNavigation>
        <WhatsAppUsButton/>
      </NavbarDesktopContainer>

      <NavbarMobileContainer>
        <NavbarAppLogo 
          imgSrc="/vectors/surfezwallserviceslogo-secondary.svg" 
          imgAlt="surfez wall services logo" 
          href="/"
          screenType="mobile"
        />

        <NavbarMobileMenuContainer>
          {NavigationLinkData.map((item, index) => (
            <NavbarMobileNavigationItem>
              <Link 
                key={index} 
                href={item.href}
              >
                <p className="text-secondary-color text-[2.5rem] font-medium">
                  {item.title}
                </p>
              </Link>
            </NavbarMobileNavigationItem>
          ))}
        </NavbarMobileMenuContainer>
      </NavbarMobileContainer>
    </>
  );
}

export { Navbar };