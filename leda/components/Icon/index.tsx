import * as React from 'react';
import type { IconProps } from './types';
import { useProps } from '../../utils';
import { ICON_PATHS } from './icons';

export const Icon = (props: IconProps): React.ReactElement | null => {
  const {
    size = 24,
    shouldRender,
    stroke = 'currentColor',
    strokeWidth = 2,
    strokeOpacity,
    fill = 'none',
    icon,
    ...restProps
  } = useProps(props);

  if (shouldRender === false) return null;

  const paths = ICON_PATHS[icon];
  if (!paths) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeOpacity={strokeOpacity}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...restProps}
    >
      {paths}
    </svg>
  );
};
