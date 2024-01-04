interface WoodsBricksAndPanellingDataProps {
  imgSrc: string;
  title: string;
  caption: string;
}

const WoodsBricksAndPanellingData: WoodsBricksAndPanellingDataProps[] = [
  { imgSrc: '/images/packages/the_basic.png', title: 'Wainscoting', caption: 'Solid wood & PVC.' },
  { imgSrc: '/images/packages/the_basic.png', title: 'Shiplap', caption: 'Solid wood, MDF & PVC.' },
  { imgSrc: '/images/packages/the_basic.png', title: 'Architrave, Mouldings & Skirtings', caption: 'Solid wood & PVC.' },
  { imgSrc: '/images/packages/the_basic.png', title: 'Bricks Veneer', caption: 'Real bricks veneer from Suzuka Kastone bricks.' },
  { imgSrc: '/images/packages/the_basic.png', title: 'Wall Panelling', caption: 'Coming soon.' },
  { imgSrc: '/images/packages/the_basic.png', title: 'Not Sure?', caption: 'Hey, we do consultation thru Wassap also. Don’t worry 😊' }
];

const WoodsBricksAndPanellingDataByIndex = (index: number): WoodsBricksAndPanellingDataProps => WoodsBricksAndPanellingData[index % WoodsBricksAndPanellingData.length];

export { WoodsBricksAndPanellingData, WoodsBricksAndPanellingDataByIndex };
