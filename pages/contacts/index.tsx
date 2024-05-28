import { Button, Col, Form, Input, Row, Space, Typography } from 'antd';
import React from 'react';
import Image from 'next/image';

import style from './style.module.scss';
import { Download } from '@/components/Icons';
import { TTButton } from '@/components/TTButton/TTButton';
import { TTBreadcrumb } from '@/components/TTBreadcrumb/TTBreadcrumb';
import { Route } from 'antd/lib/breadcrumb/Breadcrumb';

const { Text } = Typography;

const routes: Route[] = [
  {
    path: '',
    breadcrumbName: 'Главная',
  },
  {
    path: '',
    breadcrumbName: 'Контакты',
  },
];

const contacts = () => {
  return (
    <div className={style.wrapperContacts}>
      <TTBreadcrumb routes={routes} />
      <Row className={style.wrapperContactsBaner}>
        <Col span={24}>
          <Space direction="horizontal" className={style.SpaceWrapper}>
            <Space direction="vertical" size={16}>
              <Text className={style.contactsTitle}>Контакты</Text>
              <Text className={style.contactsBanerTitle}>
                Проектируем <br /> объекты разной сложности
              </Text>
              <div style={{ maxWidth: 400 }}>
                <Text className={style.contactsSubtitle}>
                  Спроектировать объект целиком? Разработать проект инженерной коммуникаии? Или просто узнать как мы
                  делаем свою работу? Нам очень интересна ваша история
                </Text>
              </div>
              <Form>
                <Form.Item>
                  <Input placeholder="Имя" className={style.contactsFormName} />
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Телефон или e-mail" className={style.contactsFormPhoneOrEmail} />
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Сообщение" className={style.contactsFormMessage} />
                </Form.Item>
                <Form.Item>
                  <TTButton htmlType="submit" text={'Отправить'} isColorBorder="blueFull" />
                </Form.Item>
              </Form>
            </Space>
            <div>
              <Row>
                <Col span={24} style={{ height: 400, width: 500 }}>
                  <Image layout="fill" objectFit="contain" src="/assets/contacts.png" alt="Picture of the author" />
                </Col>
              </Row>
              <Row>
                <Col span={11}>
                  <Space direction="vertical" size={50}>
                    <Space direction="vertical">
                      <Text className={style.bannerInfoTitle}>Адрес</Text>
                      <Text className={style.bannerInfoText}>
                        119071, г. Москва, <br /> Ленинский пр., д. 19, стр. 2
                      </Text>
                    </Space>
                    <Space direction="vertical">
                      <Text className={style.bannerInfoTitle}>Новые проекты</Text>
                      <a>+ 7 985 060-06-61</a>
                      <a href="mailto:mail@info@tesserakt.ru">info@tesserakt.ru</a>
                      <div>icons</div>
                    </Space>
                  </Space>
                </Col>
                <Col span={2} />
                <Col span={11}>
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
                <Text className={style.contactsSubtitle2}>
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
                <TTButton htmlType="submit" text={'Получить консультацию'} isColorBorder="blueFull" />
              </Space>
            </Space>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default contacts;
