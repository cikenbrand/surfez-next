interface PackagesDataProps {
  imgSrc: string;
  title: string;
  caption: string;
}

const PackagesData: PackagesDataProps[] = [
  { imgSrc: '/images/packages/the_basic.png', title: 'The Basic', caption: 'All normal paint with wall sealer.' },
  { imgSrc: '/images/packages/modern_vibes.png', title: 'Modern Vibes', caption: 'Normal paint + featured wall using special paints/plaster.' },
  { imgSrc: '/images/packages/modern_vibes_extra.png', title: 'Modern Vibes Extra', caption: 'Normal paint + special paints + wall panel.' },
  { imgSrc: '/images/packages/lite_industrial.png', title: 'Lite Industrial', caption: 'Normal paint + bricks + cement effect.' },
  { imgSrc: '/images/packages/heavy_industrial.png', title: 'Heavy Industrial', caption: 'Bricks + cement / concrete effect (No normal paint at all).' },
  { imgSrc: '/images/packages/lime_paint.png', title: 'Lime Paint', caption: 'As the name. All Lime paint on the wall.' },
  { imgSrc: '/images/packages/lite_italian.png', title: 'Lite Italian', caption: 'Venetian plaster + Lime paint.' },
  { imgSrc: '/images/packages/full_venetian_plaster.png', title: 'Full Venetian Plaster', caption: 'As the name. All venetian plaster on the wall.' },
  { imgSrc: '/images/packages/lite_english.png', title: 'Lite English', caption: 'Normal paint + wainscoting.' },
];

export { PackagesData };
