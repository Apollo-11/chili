import type { SVGProps } from 'react';

export type IconProps = {
  fill?: string | null,
  icon: `${Icons}`,
  shouldRender?: boolean,
  size?: number | string | null,
  stroke?: string | null,
  strokeOpacity?: number | string | null,
  strokeWidth?: number | string | null,
  [x: string]: unknown,
} & Omit<SVGProps<SVGSVGElement>, 'fill' | 'stroke' | 'strokeOpacity' | 'strokeWidth'>;

export enum Icons {
  Calendar = 'calendar',
  Check = 'check',
  CheckCircle = 'check-circle',
  CheckSquare = 'check-square',
  ChevronDown = 'chevron-down',
  ChevronLeft = 'chevron-left',
  ChevronRight = 'chevron-right',
  ChevronUp = 'chevron-up',
  ChevronsLeft = 'chevrons-left',
  ChevronsRight = 'chevrons-right',
  Circle = 'circle',
  Eye = 'eye',
  EyeOff = 'eye-off',
  Loader = 'loader',
  MinusSquare = 'minus-square',
  PlusSquare = 'plus-square',
  Square = 'square',
  Star = 'star',
  Menu = 'menu',
  X = 'x',
}
