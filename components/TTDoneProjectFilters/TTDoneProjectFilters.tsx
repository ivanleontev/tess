import { Typography, Space, Tag, Button, Form, Select } from 'antd';
import { useState } from 'react';
import style from './TTDoneProjectFilters.module.scss';
import { IconRemove } from '../Icons';

const { Text } = Typography;

const tags = [
  'Торговый центр',
  'Водоснабжение',
  'Спорткомплекс',
  'Архитектура',
  'GNSS',
  'Бурение',
  'Канализация',
  'Общепит',
  'Инфраструктура',
  'Под ключ',
  'Коммуникации',
];

interface TTDoneProjectFiltersProps {
  type?: string;
}

export const TTDoneProjectFilters = ({ type }: TTDoneProjectFiltersProps) => {
  const [selectedTags, setSelectedTags] = useState<Array<number>>([]);

  const onSelectTag = (id: number) => {
    let newState: any = [];

    if (selectedTags.some((tag) => tag === id)) {
      newState = selectedTags.filter((tag) => tag !== id);
    } else {
      newState = [...selectedTags, id];
    }

    setSelectedTags(newState);
  };

  return (
    <>
      <Form layout="inline" className={style.doneProjectForm}>
        <Form.Item
          // label="Username"
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
          // label="Username"
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
      <Space direction="horizontal" style={{ flexWrap: 'wrap' }}>
        {tags.map((tag, index) => {
          const isSelected = selectedTags.some((tag) => tag === index);
          return (
            <Tag
              key={tag}
              className={!isSelected ? style.TTTagsFilter : style.TTTagsFilterFocus}
              onClick={() => onSelectTag(index)}
            >
              {tag}
              {selectedTags.some((tag) => tag === index) ? <IconRemove /> : ''}
            </Tag>
          );
        })}
      </Space>
    </>
  );
};
