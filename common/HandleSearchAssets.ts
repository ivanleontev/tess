export const HandleSearchAssets = (route: string) => {
  const routes = [
    {
      path: `/`,
      name: 'Главная',
      logoUrl: '/assets/logo/LogoMain.svg',
      illistrationUrl: '/assets/illustration/MainIllustration.svg',
    },
    {
      path: `/articles`,
      name: 'Статьи',
      logoUrl: '/assets/logo/LogoMain.svg',
      illistrationUrl: '/assets/illustration/MainIllustration.svg',
    },
    {
      path: `/doneproject`,
      name: 'Реализованные проекты',
      logoUrl: '/assets/logo/LogoMain.svg',
      illistrationUrl: '/assets/illustration/MainIllustration.svg',
    },
    {
      path: `/research`,
      name: 'Инженерные изыскания',
      logoUrl: '/assets/logo/LogoResearch.svg',
      illistrationUrl: '/assets/illustration/ResearchIllustration.svg',
    },
    {
      path: `/construction`,
      name: 'Конструктив и архитектура',
      logoUrl: '/assets/logo/LogoConstruction.svg',
      illistrationUrl: '/assets/illustration/ConsrtuctionIllustration.svg',
    },
    {
      path: `/water`,
      name: 'Водоснабжение и канализация',
      logoUrl: '/assets/logo/LogoWater.svg',
      illistrationUrl: '/assets/illustration/WaterIllustration.svg',
    },
    {
      path: `/heating`,
      name: 'Отопление, вентиляция и кондиционирование',
      logoUrl: '/assets/logo/LogoHeating.svg',
      illistrationUrl: '/assets/illustration/HeatingIllustration.svg',
    },
    {
      path: `/light`,
      name: 'Электроснабжение и автоматика',
      logoUrl: '/assets/logo/LogoLight.svg',
      illistrationUrl: '/assets/illustration/LightIllustration.svg',
    },
    {
      path: `/authorcontrol`,
      name: 'Авторский надзор',
      logoUrl: '/assets/logo/LogoAuthorControl.svg',
      illistrationUrl: '/assets/illustration/ContrtolIllustration.svg',
    },
    {
      path: `/genproektirovanie`,
      name: 'Генеральный проектировщик',
      logoUrl: '/assets/logo/LogoMain.svg',
      illistrationUrl: '/assets/illustration/MainIllustration.svg',
    },
  ];

  const search = routes.find((r) => r.path === route);

  return search ? search : routes[0];
};
