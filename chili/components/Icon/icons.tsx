import * as React from 'react';
import { Icons } from './types';

export const ICON_PATHS: Record<Icons, React.ReactNode[]> = {
  [Icons.Calendar]: [
    <rect key="0" x="3" y="4" width="18" height="18" rx="2" ry="2" />,
    <line key="1" x1="3" y1="10" x2="21" y2="10" />,
    <line key="2" x1="16" y1="2" x2="16" y2="6" />,
    <line key="3" x1="8" y1="2" x2="8" y2="6" />,
  ],
  [Icons.Check]: [
    <polyline key="0" points="20 6 9 17 4 12" />,
  ],
  [Icons.CheckCircle]: [
    <circle key="0" cx="12" cy="12" r="10" />,
    <polyline key="1" points="9 12 12 15 17 10" />,
  ],
  [Icons.CheckSquare]: [
    <rect key="0" x="3" y="3" width="18" height="18" rx="2" ry="2" />,
    <polyline key="1" points="9 11 12 14 22 4" />,
  ],
  [Icons.ChevronDown]: [
    <polyline key="0" points="6 9 12 15 18 9" />,
  ],
  [Icons.ChevronLeft]: [
    <polyline key="0" points="15 18 9 12 15 6" />,
  ],
  [Icons.ChevronRight]: [
    <polyline key="0" points="9 18 15 12 9 6" />,
  ],
  [Icons.ChevronUp]: [
    <polyline key="0" points="18 15 12 9 6 15" />,
  ],
  [Icons.ChevronsLeft]: [
    <polyline key="0" points="11 17 6 12 11 7" />,
    <polyline key="1" points="18 17 13 12 18 7" />,
  ],
  [Icons.ChevronsRight]: [
    <polyline key="0" points="13 17 18 12 13 7" />,
    <polyline key="1" points="6 17 11 12 6 7" />,
  ],
  [Icons.Circle]: [
    <circle key="0" cx="12" cy="12" r="10" />,
  ],
  [Icons.Eye]: [
    <path key="0" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />,
    <circle key="1" cx="12" cy="12" r="3" />,
  ],
  [Icons.EyeOff]: [
    <path key="0" d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.08 21.08 0 0 1 5.07-6.88" />,
    <path key="1" d="M1 1l22 22" />,
  ],
  [Icons.Loader]: [
    <line key="0" x1="12" y1="2" x2="12" y2="6" />,
    <line key="1" x1="12" y1="18" x2="12" y2="22" />,
    <line key="2" x1="4.93" y1="4.93" x2="7.76" y2="7.76" />,
    <line key="3" x1="16.24" y1="16.24" x2="19.07" y2="19.07" />,
    <line key="4" x1="2" y1="12" x2="6" y2="12" />,
    <line key="5" x1="18" y1="12" x2="22" y2="12" />,
    <line key="6" x1="4.93" y1="19.07" x2="7.76" y2="16.24" />,
    <line key="7" x1="16.24" y1="7.76" x2="19.07" y2="4.93" />,
  ],
  [Icons.MinusSquare]: [
    <rect key="0" x="3" y="3" width="18" height="18" rx="2" ry="2" />,
    <line key="1" x1="8" y1="12" x2="16" y2="12" />,
  ],
  [Icons.PlusSquare]: [
    <rect key="0" x="3" y="3" width="18" height="18" rx="2" ry="2" />,
    <line key="1" x1="12" y1="8" x2="12" y2="16" />,
    <line key="2" x1="8" y1="12" x2="16" y2="12" />,
  ],
  [Icons.Square]: [
    <rect key="0" x="3" y="3" width="18" height="18" rx="2" ry="2" />,
  ],
  [Icons.Star]: [
    <polygon key="0" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
  ],
  [Icons.Menu]: [
    <line key="0" x1="3" y1="12" x2="21" y2="12" />,
    <line key="1" x1="3" y1="6" x2="21" y2="6" />,
    <line key="2" x1="3" y1="18" x2="21" y2="18" />,
  ],
  [Icons.X]: [
    <line key="0" x1="18" y1="6" x2="6" y2="18" />,
    <line key="1" x1="6" y1="6" x2="18" y2="18" />,
  ],
};
