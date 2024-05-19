import { Heading3 } from '@/components/TTHeadings/TTHeadings';
import { Row, Col, Typography, Space } from 'antd';
import React from 'react';
import Image from 'next/image';

import style from './TTCommand.module.scss';
import { Command1, Command2, Command3, Command4 } from '@/components/Icons';

const { Text } = Typography;

export const TTCommand = () => {
  return (
    <section className={style.wrapperCommand}>
      <Row style={{ marginBottom: 112 }}>
        <Col span={12}>
          <Heading3 label={'Тессеракт – это мы'} />
        </Col>
        <Col span={12}>
          <Space direction="vertical" size={24}>
            <Text className={style.textHeading}>Команда</Text>
            <Text className={style.textDesc}>
              Тессеракт объеденяет команду инженеров для решения задач любой сложности.
            </Text>
            <Text className={style.textDesc}>
              В команде работают профессора занимающиеся научно-исследовательской деятельностью.
            </Text>
          </Space>
        </Col>
      </Row>
      <Row style={{ marginBottom: 112 }}>
        <Col span={24} style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Space direction="vertical" align="center">
            <Image
              className={style.headerSearch}
              src="/assets/TTCommandPerson1.png"
              height={179}
              width={200}
              alt="Picture of the author"
            />
            <Text className={style.textHeading}>Главный инженер проекта</Text>
            <Text className={style.textDesc}>Сергей</Text>
          </Space>
          <Space direction="vertical" align="center">
            <Image
              className={style.headerSearch}
              src="/assets/TTCommandPerson2.png"
              height={179}
              width={200}
              alt="Picture of the author"
            />
            <Text className={style.textHeading}>Главный инженер проекта</Text>
            <Text className={style.textDesc}>Сергей</Text>
          </Space>
          <Space direction="vertical" align="center">
            <Image
              className={style.headerSearch}
              src="/assets/TTCommandPerson1.png"
              height={179}
              width={200}
              alt="Picture of the author"
            />
            <Text className={style.textHeading}>Главный инженер проекта</Text>
            <Text className={style.textDesc}>Сергей</Text>
          </Space>
        </Col>
        <Col span={24} style={{ display: 'flex', justifyContent: 'space-around', marginTop: 48 }}>
          <Space direction="vertical" align="center">
            <Image
              className={style.headerSearch}
              src="/assets/TTCommandPerson2.png"
              height={179}
              width={200}
              alt="Picture of the author"
            />
            <Text className={style.textHeading}>Главный инженер проекта</Text>
            <Text className={style.textDesc}>Сергей</Text>
          </Space>
          <Space direction="vertical" align="center">
            <Image
              className={style.headerSearch}
              src="/assets/TTCommandPerson1.png"
              height={179}
              width={200}
              alt="Picture of the author"
            />
            <Text className={style.textHeading}>Главный инженер проекта</Text>
            <Text className={style.textDesc}>Сергей</Text>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col span={12}></Col>
        <Col span={12}>
          <Space style={{ marginBottom: 32 }}>
            <Text style={{ marginLeft: 25 }} className={style.textHeading}>
              Что нас характеризует
            </Text>
          </Space>
          <Space direction="vertical" size={32}>
            <Text className={style.textDesc}>
              <Command1 />
              Применяем знания и опыт в различных сферах пректирования
            </Text>
            <Text className={style.textDesc}>
              <Command2 />
              Обосновываем решения нормативами и расчетами эффективности
            </Text>
            <Text className={style.textDesc}>
              <Command3 />
              Решаем задачи не прописанные нормативными документами
            </Text>
            <Text className={style.textDesc}>
              <Command4 />
              Работаем по новейшим технологиям, используем подходы и успешный опыт зарубежных коллег
            </Text>
          </Space>
        </Col>
      </Row>
    </section>
  );
};
