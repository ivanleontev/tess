export const HandleSearchAssets = (route: string) => {
  const routes = [
    {
      path: `/`,
      logoUrl: '',
      illistrationUrl: './assets/illustration/MainIllustration.svg',
    },
    {
      path: `/research`,
      logoUrl: '',
      illistrationUrl: './assets/illustration/ResearchIllustration.svg',
    },
    {
      path: `/consruction`,
      logoUrl: '',
      illistrationUrl: './assets/illustration/ConsrtuctionIllustration.svg',
    },
    {
      path: `/water`,
      logoUrl: '',
      illistrationUrl: './assets/illustration/WaterIllustration.svg',
    },
    {
      path: `/heating`,
      logoUrl: '',
      illistrationUrl: './assets/illustration/HeatingIllustration.svg',
    },
    {
      path: `/light`,
      logoUrl: '',
      illistrationUrl: './assets/illustration/LightIllustration.svg',
    },
    {
      path: `/authorControl`,
      logoUrl: '',
      illistrationUrl: './assets/illustration/ContrtolIllustration.svg',
    },
  ];

  return routes.find((r) => r.path === route);
};
