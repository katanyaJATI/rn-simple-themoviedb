import * as React from 'react';
import { Colors } from '../config';
import { ColorKey } from '../config/Colors';
import { IconName } from '../icons';
import * as Icons from '../icons';

type IconProps = {
  name: IconName;
  width?: number | string;
  height?: number | string;
  color?: ColorKey;
  fill?: ColorKey;
};

function Icon({
  name,
  width = 20,
  height = 20,
  color = 'greyscaleDesc',
  fill,
}: IconProps) {
  let newProps: any = { width, height, stroke: Colors[color] };
  if (fill) {
    newProps.fill = Colors[fill];
  }
  const Component: any = Icons[name];
  return <Component {...newProps} />;
}

export default Icon;
