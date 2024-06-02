import { Typography, Space, Tag, Button, Form, Select, TreeSelect } from 'antd';
import { useState } from 'react';
import style from './TTDoneProjectFilters.module.scss';
import { DownCollapseArrow, IconRemove } from '../Icons';

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

const treeData = [
  {
    title: 'Все направления',
    value: '0-1',
    key: '9',
  },
  {
    title: 'Генеральное проектирование',
    value: '0-2',
    key: '1',
  },
  {
    title: 'Инженерные изыскания',
    value: '0-3',
    key: '2',
  },
  {
    title: 'Конструктивное и архитектурное проектирование',
    value: '0-4',
    key: '3',
  },
  {
    title: 'Проектирование водоснабжения и канализации',
    value: '0-5',
    key: '4',
  },
  {
    title: 'Проектирование отоплении, вентиляции и кондиционирования',
    value: '0-6',
    key: '5',
  },
  {
    title: 'Проекирование электроснабжения и автоматики',
    value: '0-7',
    key: '6',
  },
  {
    title: 'Авторский надзор и сопровождение ',
    value: '0-8',
    key: '7',
  },
];

interface TTDoneProjectFiltersProps {
  type?: string;
}

export const TTDoneProjectFilters = ({ type }: TTDoneProjectFiltersProps) => {
  const [selectedTags, setSelectedTags] = useState<Array<number>>([]);
  const [selectThreeDirection, setSelectThreeDirection] = useState<Array<string>>([treeData[0].title]);
  const [selectThreeType, setSelectThreeType] = useState<Array<string>>([treeData[0].title]);

  const onChangeDirection = (newValue: string[]) => {
    setSelectThreeDirection(newValue);
  };
  const onChangetype = (newValue: string[]) => {
    setSelectThreeType(newValue);
  };

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
    <Space direction="vertical" size={32}>
      <Space direction="horizontal" align="end">
        <Space direction="vertical">
          <span className={style.titleTreeSelect}>Направления</span>
          <TreeSelect
            value={selectThreeDirection}
            onChange={onChangeDirection}
            listHeight={400}
            style={{ width: 350 }}
            treeData={treeData}
            treeCheckable={true}
            showArrow
            suffixIcon={<DownCollapseArrow />}
            placeholder="Выберите направление"
          />
        </Space>
        <Space direction="vertical">
          <span className={style.titleTreeSelect}>Типы объектов</span>
          <TreeSelect
            value={selectThreeType}
            listHeight={400}
            style={{ width: 350 }}
            treeData={treeData}
            treeCheckable={true}
            onChange={onChangetype}
            showArrow
            suffixIcon={<DownCollapseArrow />}
            placeholder="Выберите тип объекта"
          />
        </Space>
        <Button
          onClick={() => {
            setSelectThreeDirection([]);
            setSelectThreeType([]);
          }}
          type="link"
          htmlType="button"
          className={style.btnClear}
        >
          Сбросить фильтры
        </Button>
      </Space>
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
    </Space>
  );
};
