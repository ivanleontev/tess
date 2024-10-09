import { Button, Checkbox, Col, Drawer, Form, Input, Row, Space, Typography } from 'antd';

import style from './style.module.scss';
import { TTButton } from '../TTButton/TTButton';
import { IconUploadFile1, IconUploadFile2 } from '../Icons';

const { Text } = Typography;

interface TTDrawerSearchPartners {
  open: boolean;
  onClose: (open: boolean) => void;
}

export const TTDrawerSearchPartners = ({ open, onClose }: TTDrawerSearchPartners) => {
  return (
    <Drawer
      height={839}
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
      // title="LOGO"
      placement="top"
      onClose={() => onClose(false)}
      open={open}
    >
      <Row>
        <Col span={2} />
        <Col span={10}>
          <Space direction="vertical" size={38} style={{ marginBottom: 90 }}>
            <Text className={style.ModalSearchPartnerHeading}>Ищете партнера для проектирования?</Text>
            <Text className={style.ModalSearchPartnerDescription}>
              Нужен генеральный проектировщик на строительный объект? Нужно спроектировать отдельно иженерную систему
              или провести инженерные изыскания? <br /> Позвоните или напишмие нам – мы ответим на ваши вопросы.
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
        <Col span={2} />
        <Col span={8}>
          <Form name="basic">
            <Form>
              <Form.Item className={style.inputItem}>
                <Input placeholder="Имя" className={style.contactsFormName} />
              </Form.Item>
              <Form.Item className={style.inputItem}>
                <Input placeholder="Телефон или e-mail" className={style.contactsFormPhoneOrEmail} />
              </Form.Item>
              <Form.Item className={`${style.inputItem} ${style.contactsFormFile}`}>
                <Input
                  placeholder="Прикрепить ТЗ"
                  className={style.contactsFormMessage}
                  suffix={
                    <Space>
                      <IconUploadFile1 />
                      <IconUploadFile2 />
                    </Space>
                  }
                />
              </Form.Item>
              <span className={style.itemInputTextDown}>При наличии ТЗ прикрепите файл не более 10 МБ</span>
              <Form.Item className={style.inputItem}>
                <Input
                  placeholder="Сообщение"
                  className={`${style.contactsFormMessage} ${style.contactsFormLastItem}`}
                />
              </Form.Item>
              <Form.Item>
                <TTButton htmlType="submit" text={'Отправить'} isColorBorder="blueBorder" />
              </Form.Item>
            </Form>
          </Form>
        </Col>
        <Col span={2} />
      </Row>
    </Drawer>
  );
};
