import { Button, Col, Form, Input, Row, Space, Typography } from 'antd';
import React from 'react';
import Image from 'next/image';

import style from './style.module.scss';
import { Download } from '@/components/Icons';

const { Text } = Typography;

const contacts = () => {
  return (
    <div className={style.wrapperContacts}>
      <Row className={style.wrapperContactsBaner}>
        <Col span={24}>
          <Space direction="horizontal">
            <Space direction="vertical">
              <Text className={style.contactsBanerTitle}>Проектируем объекты разной сложности</Text>
              <Text>
                Спроектировать объект целиком? Разработать проект инженерной коммуникаии? Или просто узнать как мы
                делаем свою работу? Нам очень интересна ваша история
              </Text>
              {/* <Form>
                <Form.Item label="Имя">
                  <Input className={style.test} />
                </Form.Item>
                <Form.Item label="Телефон">
                  <Input />
                </Form.Item>
                <Form.Item label="Email">
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Отправить
                  </Button>
                </Form.Item>
              </Form> */}
            </Space>
            <div>
              <Image height={401} width={640} src="/assets/contacts.png" alt="Picture of the author" />
              <Row>
                <Col span={12}>
                  <Space direction="vertical" size={50}>
                    <Space direction="vertical">
                      <Text className={style.bannerInfoTitle}>Адрес</Text>
                      <Text className={style.bannerInfoText}>119071, г. Москва, Ленинский пр., д. 19, стр. 2</Text>
                    </Space>
                    <Space direction="vertical">
                      <Text className={style.bannerInfoTitle}>Новые проекты</Text>
                      <a>+ 7 985 060-06-61</a>
                      <a href="mailto:mail@info@tesserakt.ru">info@tesserakt.ru</a>
                      <div>icons</div>
                    </Space>
                  </Space>
                </Col>
                <Col span={12}>
                  <Space direction="vertical" size={50}>
                    <Space direction="vertical">
                      <Text className={style.bannerInfoTitle}>Главный инженер проекта</Text>
                      <Text className={style.bannerInfoText}>Михаил Михайлов-Михайловский</Text>
                      <a>+ 7 985 060-06-61</a>
                    </Space>
                    <Space direction="vertical" size={0}>
                      <Text className={style.bannerInfoTitle}>
                        Реквизиты
                        <a href="/assets/requisites.pdf" download>
                          <Download />
                        </a>
                      </Text>
                      <Text className={style.bannerInfoText}>ООО “Тессеракт”</Text>
                      <Text className={style.bannerInfoText}>ИНН 7703450987</Text>
                      <Text className={style.bannerInfoText}>КПП 770301001</Text>
                      <Text className={style.bannerInfoText}>р/с 40702810608760001234</Text>
                      <Text className={style.bannerInfoText}>В АО "АЛЬФА-БАНК" г.Москва</Text>
                      <Text className={style.bannerInfoText}>БИК 044525593</Text>
                      <Text className={style.bannerInfoText}>К/сч 30101810200000000593</Text>
                    </Space>
                  </Space>
                </Col>
              </Row>
            </div>
          </Space>
        </Col>
      </Row>
      <Row style={{ marginTop: 113, marginBottom: 180, padding: '0px 64px' }}>
        <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Space style={{ alignItems: 'flex-start' }}>
            <Space>
              <Image height={480} width={640} src="/assets/contactsAbout.png" alt="Picture of the author" />
            </Space>
            <Space direction="vertical" style={{ marginLeft: 33, maxWidth: 480 }}>
              <Space direction="vertical" size={16}>
                <Text className={style.contactsTitle}>О КОМПАНИИ</Text>
                <Text className={style.contactsSubtitle}>
                  Тессеракт - это комплексный подход в масштабах всей Росии
                </Text>
                <Text className={style.contactsDesc}>
                  Проводим изыскания, все виды проектирования и авторский надзор.
                </Text>
                <Text className={style.contactsDesc}>
                  Работаем по всей России. Наши специалисты каждый день готовы отправиться решать ваши задаячи в любую
                  точку России.
                </Text>
                <Text className={style.contactsDesc}>
                  Наш главный принцип при проектировании – обоснуй каждое решение нормативами и расчетами эффективности.
                </Text>
                <Text className={style.contactsDesc}>
                  Решаем задачи любой сложности, используя инновационные подходы и успешный опыт зарубежных коллег.
                </Text>
              </Space>
              <Space>
                <Button>Получить консультацию</Button>
              </Space>
            </Space>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default contacts;
