import {
  Warm,
  Architekture,
  Power,
  Water,
  Autor,
  Research,
} from '@/components/Icons/MainIconDirection/Normal';

export const Directions = () => {
  const data = [
    [
      {
        icon: <Research />,
        title: 'Предпроектные работы',
        text: 'Инженерные изыскания',
      },
      {
        icon: <Warm />,
        title: 'Проектирование',
        text: 'Отопление, вентиляция и кондиционирование',
      },
    ],
    [
      {
        icon: <Architekture />,
        title: 'Проектирование ',
        text: 'Конструктив и архитектура',
      },
      {
        icon: <Power />,
        title: 'Проектирование ',
        text: 'Электроснабжение и автоматика',
      },
    ],
    [
      {
        icon: <Water />,
        title: 'Проектирование',
        text: 'Водоснабжение и канализация',
      },
      {
        icon: <Autor />,
        title: 'Постпроектные работы',
        text: 'Авторский надзор и сопровождение ',
      },
    ],
  ];

  return data;
};
