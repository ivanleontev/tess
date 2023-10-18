import { Button } from 'antd';
import style from './style.module.scss';

interface TTButtonProps {
  text: string;
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text' | 'ghost';
}

export const TTButton = ({ type = 'primary', text, ...props }: TTButtonProps) => {
  return (
    <Button className={style.TTButton} type={type} {...props}>
      {text}
    </Button>
  );
};
//test