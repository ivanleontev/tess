import { Space, Typography } from 'antd';
import style from './TTHeadings.module.scss';

interface Heading {
  label: string;
  icon?: React.ReactSVGElement;
  size?: number;
}
const { Title, Text } = Typography;

export const Heading1 = ({ label, icon, size, ...props }: Heading) => {
  return (
    <>
      <Title className={style.TTHeading1} style={{fontSize: `${size}px`}} {...props}>
        {label}
      </Title>
      {icon && icon}
    </>
  );
};

export const Heading2 = ({ label, icon, ...props }: Heading) => {
  return (
    <Space direction="horizontal" align="center">
      <Title className={style.TTHeading2} {...props}>
        {label}
      </Title>
      {icon && icon}
    </Space>
  );
};

export const Heading3 = ({ label, icon, ...props }: Heading) => {
  return (
    <>
      <Title className={style.TTHeading3} {...props}>
        {label}
      </Title>
      {icon && icon}
    </>
  );
};

export const TextHeading = ({ label, icon, ...props }: Heading) => {
  return (
    <>
      <Text className={style.TTTextHeading} {...props}>
        {label}
      </Text>
      {icon && icon}
    </>
  );
};
