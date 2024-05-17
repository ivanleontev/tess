import { Button } from 'antd';
import style from './style.module.scss';

interface TTButtonProps {
  text: string;
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text' | 'ghost';
  isColorBorder?: 'orangeFull' | 'blueFull' | 'orangeBorder' | 'blueBorder';
}

export const TTButton = ({ type = 'primary', isColorBorder = 'orangeFull', text, ...props }: TTButtonProps) => {
  return (
    <Button
      className={
        isColorBorder === 'blueFull'
          ? style.TTButtonBlueFull
          : isColorBorder === 'blueBorder'
          ? style.TTButtonBlueBorder
          : isColorBorder === 'orangeBorder'
          ? style.TTButtonOrangeBorder
          : isColorBorder === 'orangeFull'
          ? style.TTButtonOrangeFull
          : ''
      }
    >
      {text}
    </Button>
  );
};
