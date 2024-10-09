import {
  ArchitektureHover,
  AutorHover,
  PowerHover,
  ResearchHover,
  WarmHover,
  WaterHover,
} from '@/components/Icons/MainIconDirection/Hover';
import { Warm, Architekture, Power, Water, Autor, Research } from '@/components/Icons/MainIconDirection/Normal';

export const Directions = () => {
  const data = [
    [
      {
        icon: <Research />,
        iconHover: <ResearchHover />,
        title: 'Предпроектные работы',
        text: 'Инженерные изыскания',
        link: '/research',
      },
      {
        icon: <Warm />,
        iconHover: <WarmHover />,
        title: 'Проектирование',
        text: 'Отопление, вентиляция и кондиционирование',
        link: '/heating',
      },
    ],
    [
      {
        icon: <Architekture />,
        iconHover: <ArchitektureHover />,
        title: 'Проектирование ',
        text: 'Конструктив и архитектура',
        link: '/construction',
      },
      {
        icon: <Power />,
        iconHover: <PowerHover />,
        title: 'Проектирование ',
        text: 'Электроснабжение и автоматика',
        link: '/light',
      },
    ],
    [
      {
        icon: <Water />,
        iconHover: <WaterHover />,
        title: 'Проектирование',
        text: 'Водоснабжение и канализация',
        link: '/water',
      },
      {
        icon: <Autor />,
        iconHover: <AutorHover />,
        title: 'Постпроектные работы',
        text: 'Авторский надзор и сопровождение ',
        link: '/authorcontrol',
      },
    ],
  ];

  return data;
};
