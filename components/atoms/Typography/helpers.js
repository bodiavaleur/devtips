import {REM_VALUE, Theme} from '../../../theme';

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

export function selectVariant(variant) {
  let styles = {
    paddingVertical: REM_VALUE,
    paddingHorizontal: REM_VALUE * 2,
    borderRadius: REM_VALUE * 2,
    backgroundColor: Theme.colors.primary,
  };

  switch (variant) {
    case 'filled':
      break;
    case 'text':
      styles = {
        paddingVertical: REM_VALUE * 0.5,
        paddingHorizontal: REM_VALUE * 0.5,
        borderRadius: REM_VALUE * 0.5,
        backgroundColor: 'none',
      };
      break;
  }

  return styles;
}

export function optionalStyle(prop, style) {
  return prop ? style : {};
}
