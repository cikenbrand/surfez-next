import { NavigationButton } from "@/components/button";
import Link from "next/link";
import { GalleryCarousel } from "@/pages/components/embla/gallerycarousel";

const caption = "Never let a parcel delivery rule your entire schedule again.";
const header = "Spending time looking for your parcel around the neighbourhood is a thing of the past. That’s a promise.";

const GalleryData = [
  {imgSrc: '/images/stuccovenezianowall.jpg', imgAlt: 'image01'},
  {imgSrc: '/images/stuccovenezianowall.jpg', imgAlt: 'image02'},
  {imgSrc: '/images/stuccovenezianowall.jpg', imgAlt: 'image03'},
  {imgSrc: '/images/stuccovenezianowall.jpg', imgAlt: 'image04'},
];

const GallerySection = () => {
  return (
    <div className="flex flex-col items-center py-16 md:py-32">
      <div className="w-full max-w-section px-6 flex flex-col gap-16 lg:gap-24">
        <div className="flex flex-col md:flex-row ">
          <div className="flex-1">
            <p className="text-primary-color text-[1.2rem] md:text-[1.55rem] font-medium md:max-w-[400px]">{caption}</p>
          </div>

          <div className="flex-1 flex flex-col items-start md:gap-16 gap-12">
            <h1 className="text-primary-color text-[2.5rem] leading-[3rem] md:text-[4rem] md:leading-[4.5rem] font-medium">{header}</h1>
            <Link href={'/'}>
              <NavigationButton title="Discover our smart mailbox" colorOptions="black"/>
            </Link>
          </div>
        </div>

        <GalleryCarousel items={GalleryData}/>
      </div>
    </div>
  );
};

export { GallerySection };