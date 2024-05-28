import { Button, Checkbox, Col, Drawer, Form, Input, Row, Space, Typography } from 'antd';
import React, { useState } from 'react';

import style from './style.module.scss';

const { Text } = Typography;

export const TTDrawerSearchPartners = () => {
  const [open, setOpen] = useState(true);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      height={839}
      // className={style.TTMainMenu}
      headerStyle={{
        backgroundColor: '#232247',
        border: 0,
      }}
      maskClosable={true}
      bodyStyle={{
        backgroundColor: '#232247',
        backgroundImage: 'url(./assets/Left24.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom left ',
      }}
      closeIcon={
        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5366 6.15039L6.83984 18.1504" stroke="white" strokeWidth="2" strokeLinejoin="round" />
          <path d="M6.83984 6.15039L19.5366 18.1504" stroke="white" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      }
      title="LOGO"
      placement="top"
      onClose={onClose}
      open={open}
    >
      <Row>
        <Col span={2} />
        <Col span={10}>
          <Space direction="vertical" size={38} style={{ marginBottom: 90 }}>
            <Text className={style.ModalSearchPartnerHeading}>Ищете партнера для проектирования?</Text>
            <Text className={style.ModalSearchPartnerDescription}>
              Нужен генеральный проектировщик на строительный объект? Нужно спроектировать отдельно иженерную систему
              или провести инженерные изыскания? Позвоните или напишмие нам – мы ответим на ваши вопросы.
            </Text>
          </Space>
          <Space direction="vertical" size={12}>
            <Text className={style.ModalSearchPartnerPost}>Главный инженер проекта</Text>
            <Text className={style.ModalSearchPartnerName}>
              Михаил <br /> Михайлов-Михайловский
            </Text>
            <Text className={style.ModalSearchPartnerPhone}>
              <a>+ 7 985 060-06-61</a>
            </Text>
          </Space>
        </Col>
        <Col span={10}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item name="username">
              <Input />
            </Form.Item>

            <Form.Item name="password">
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={2} />
      </Row>
    </Drawer>
  );
};
