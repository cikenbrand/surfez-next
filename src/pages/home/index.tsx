import { GallerySection } from "./components/gallery-section";
import { HeroSection } from "./components/hero-section";
import { PackagesSection } from "./components/packages-section";
import HomeLayout from "./components/layout";
import { Navbar } from "../components/navbar";

const Home = () => {
  return (
    <HomeLayout>
      <HeroSection/>
      <GallerySection/>
      <PackagesSection/>
    </HomeLayout>
  );
};

export default Home;