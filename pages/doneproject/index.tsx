import { TTMainBaner } from '@/components/TTMainBaner/TTMainBaner';
import { Select, Form, Typography, Button } from 'antd';
import React from 'react';

const { Text } = Typography;

const doneproject = () => {
  return (
    <>
      {/* <TTMainBaner /> */}

      <Form layout='inline'>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            // onChange={handleChange}
            options={[]}
          />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            // onChange={handleChange}
            options={[]}
          />
        </Form.Item>
        <Button type="link" htmlType="button">
            Сбросить фильтры
        </Button>
      </Form>
    </>
  );
};
export default doneproject;
