import React from 'react';
import styles from './icon.scss';
import {
  AnonIcon,
  BlockIcon,
  CommentsIcon,
  MenuIcon,
  SaveIcon,
  ShareIcon,
  WarningIcon,
} from '../icons';
import classNames from 'classnames';

export enum EName {
  block = 'Block',
  comments = 'Comments',
  menu = 'Menu',
  save = 'Save',
  share = 'Share',
  warning = 'Warning',
  anonim = 'Anonim,',
}

const icons: any = {
  [EName.block]: <BlockIcon />,
  [EName.comments]: <CommentsIcon />,
  [EName.menu]: <MenuIcon />,
  [EName.save]: <SaveIcon />,
  [EName.share]: <ShareIcon />,
  [EName.warning]: <WarningIcon />,
  [EName.anonim]: <AnonIcon />,
};

type TSize = 30 | 20 | 18 | 16 | 14 | 12 | 'menu';

interface IIconProps {
  name: EName;
  size?: TSize;
}

export function Icon({ name, size = 14 }: IIconProps) {
  const classes = classNames(styles[`iconSize_${size}`]);

  return <div className={classes}>{icons[name]}</div>;
}
