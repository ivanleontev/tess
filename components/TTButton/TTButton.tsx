import style from './style.module.scss';

interface TTButtonProps {
  text: string;
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text' | 'ghost';
  isColorBorder:
  'orangeFull' |
  'blueFull' |
  'orangeBorder' |
  'blueBorder' |
  'orangeFullWhite' |
  'orangeBorderWhite';
}

export const TTButton = ({ type = 'primary', isColorBorder = 'orangeFull', text, ...props }: TTButtonProps) => {
  return (
    <button
      className={
        isColorBorder === 'blueFull'
          ? style.TTButtonBlueFull
          : isColorBorder === 'blueBorder'
          ? style.TTButtonBlueBorder
          : isColorBorder === 'orangeBorder'
          ? style.TTButtonOrangeBorder
          : isColorBorder === 'orangeFull'
          ? style.TTButtonOrangeFull
          : isColorBorder === 'orangeBorderWhite'
          ? style.TTButtonOrangeBorderWhite
          : isColorBorder === 'orangeFullWhite'
          ? style.TTButtonOrangeFullWhite
          : undefined
      }
    >
      {text.toUpperCase()}
    </button>
  );
};
