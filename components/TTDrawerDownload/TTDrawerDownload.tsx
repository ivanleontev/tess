import { Button, Checkbox, Col, Drawer, Form, Input, Row, Space, Typography } from 'antd';
import React, { useState } from 'react';

import style from './style.module.scss';
import Dragger from 'antd/lib/upload/Dragger';

const { Text } = Typography;

export default function TTDrawerDownload() {
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
      title=""
      placement="top"
      onClose={onClose}
      open={open}
    >
      <Row>
        <Col span={2} />
        <Col span={10}>
          <Dragger>
            <p className="ant-upload-drag-icon">{/* <InboxOutlined /> */}</p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files
            </p>
          </Dragger>
        </Col>
        <Col span={2} />
      </Row>
    </Drawer>
  );
}
