interface SpecialPaintAndPlasterDataProps {
  imgSrc: string;
  title: string;
  caption: string;
}

const SpecialPaintAndPlasterData: SpecialPaintAndPlasterDataProps[] = [
  { imgSrc: '/images/packages/the_basic.png', title: 'Venetian Plaster', caption: '4 types of surface.' },
  { imgSrc: '/images/packages/the_basic.png', title: 'Venetian Marble', caption: 'Surfez exclusive. Variety of custom colours.' },
  { imgSrc: '/images/packages/the_basic.png', title: 'Strato Series', caption: '7 series finishing.' },
  { imgSrc: '/images/packages/the_basic.png', title: 'Lime Paint', caption: 'Either 1 colour or can also be with colourful limewash.' },
  { imgSrc: '/images/packages/the_basic.png', title: 'Momento Series', caption: '5 types of Momento finishing.' },
  { imgSrc: '/images/packages/the_basic.png', title: 'Texture Spray', caption: 'Can applied indoor or outdoor.' }
];

const SpecialPaintAndPlasterDataByIndex = (index: number): SpecialPaintAndPlasterDataProps => SpecialPaintAndPlasterData[index % SpecialPaintAndPlasterData.length];

export { SpecialPaintAndPlasterData, SpecialPaintAndPlasterDataByIndex };
