import {REM_VALUE} from '../../../theme';

export function adjustSize(size, defaultStyle) {
  return size ? REM_VALUE * size : defaultStyle;
}

export function adjustMargins(margin) {
  let multiplyMargin = 0;

  switch (margin) {
    case 'xs':
      multiplyMargin = 0.25;
      break;
    case 'small':
      multiplyMargin = 0.5;
      break;
    case 'normal':
      multiplyMargin = 1;
      break;
    case 'large':
      multiplyMargin = 2;
      break;
    default:
      return multiplyMargin;
  }

  return REM_VALUE * multiplyMargin;
}

export function optionalStyle(prop, style) {
  return prop ? style : {};
}
