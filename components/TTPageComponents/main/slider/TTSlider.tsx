import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import Image from 'next/image';

import 'swiper/css';
import { Space, Typography } from 'antd';

import style from './TTSlider.module.scss';

const { Text, Title } = Typography;

export const TTSlider = () => {
  return (
    <div className={style.wrapperSlider}>
      <Title className={style.Title}>Клиенты и партнеры</Title>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Space direction="vertical">
            <Image
              className={style.sliderImage}
              src="/assets/slider/av.png"
              height={45}
              width={150}
              alt="Picture of the author"
            />
            <Text className={style.sliderText}>
              Сотрудничаем 3 года, завершено 2 проекта по проектрованию систем водоснабжения, третий в активной стадии.
              Работы выполняются в срок и в полном объеме. Проектировщики – настоящие профи в своем деле.
            </Text>
            <Text className={style.sliderUser}>
              Еремейкин Иван, специалист отдела по работе с поставщиками и подрядчиками
            </Text>
          </Space>
        </SwiperSlide>
        <SwiperSlide>
          <Space direction="vertical">
            <Image
              className={style.sliderImage}
              src="/assets/slider/ros.png"
              height={56}
              width={167}
              alt="Picture of the author"
            />
            <Text className={style.sliderText}>
              Сотрудничаем 3 года, завершено 2 проекта по проектрованию систем водоснабжения, третий в активной стадии.
              Работы выполняются в срок и в полном объеме. Проектировщики – настоящие профи в своем деле.
            </Text>
            <Text className={style.sliderUser}>
              Еремейкин Иван, специалист отдела по работе с поставщиками и подрядчиками
            </Text>
          </Space>
        </SwiperSlide>
        <SwiperSlide>
          <Space direction="vertical">
            <Image
              className={style.sliderImage}
              src="/assets/slider/pik.png"
              height={53}
              width={114}
              alt="Picture of the author"
            />
            <Text className={style.sliderText}>
              Сотрудничаем 3 года, завершено 2 проекта по проектрованию систем водоснабжения, третий в активной стадии.
              Работы выполняются в срок и в полном объеме. Проектировщики – настоящие профи в своем деле.
            </Text>
            <Text className={style.sliderUser}>
              Еремейкин Иван, специалист отдела по работе с поставщиками и подрядчиками
            </Text>
          </Space>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
