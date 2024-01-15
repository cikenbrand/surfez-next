import { Hero, Gallery, StepsToProceed, CoverageArea, Packages, IndividualPaint, Footer } from "./sections";
import { WhatsAppButton } from "./components";

const Home = () => {
  return (
    <div className="w-full h-full relative before:absolute before:top-0 before:right-0 before:w-[50%] before:h-[100%] before:bg-yellow-tint before:z-[-1]">
      <WhatsAppButton/>
      <Hero/>
      <Gallery/>
      <Packages/>
      <IndividualPaint/>
      <StepsToProceed/>
      <CoverageArea/>
      <Footer/>
    </div>
  );
};

export default Home;