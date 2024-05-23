import React from 'react';
import style from './style.module.scss';
import { Col } from 'antd';

const data = [
  {
    front: 'Жилые комплексы  и коммерческие объекты ',
    back: [
      'Торговые центы',
      'Офисные центры',
      'Жилые комплексы',
      'Коттеджные поселки',
      'Многоуровневые парковки ',
      'автомойки',
      'Рестораны',
    ],
    classNameFront: 'flipCardFirst',
    classNameBack: 'flipCardFirstBack',
  },
  {
    front: 'Объекты инфраструктуры и производственные сооружения',
    back: [
      'Водозаборные узлы',
      'Очистные сооружения',
      'Линейные инженерные сооружения',
      'Котельные',
      'производственные Складские и ангары',
      'Электрические подстанции',
    ],
    classNameFront: 'flipCardSecond',
    classNameBack: 'flipCardSecondBack',
  },
  {
    front: 'Учебные и культурные сооружения, объекты спорта и здравоохранения',
    back: [
      'Школы',
      'детские сады',
      'Кинотеатры',
      'Спортивне залы',
      'стадионы и фитнес центры',
      'Больницы и лаборатории',
      'культурно-досуговые центры',
    ],
    classNameFront: 'flipCardThird',
    classNameBack: 'flipCardThirdBack',
  },
];

export const TTFlipCard = () => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <Col span={8} key={index} className={style.flipCard}>
            <div className={style.flipCardInner}>
              <div
                className={`${style.flipCardFront}
              ${style[item.classNameFront]}`}
              >
                {item.front.toUpperCase()}
              </div>
              <div className={`${style.flipCardBack} ${style[item.classNameBack]}`}>
                {item.back?.map((elem, idx) => {
                  return <p key={idx}>{elem.toUpperCase()}</p>;
                })}
              </div>
            </div>
          </Col>
        );
      })}
    </>
  );
};
