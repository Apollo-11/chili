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
  [Icons.Github]: [
    <path key="0" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-1-.02-1.82-2.78.6-3.37-1.34-3.37-1.34-.45-1.17-1.1-1.48-1.1-1.48-.9-.61.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.03a9.56 9.56 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.41.2 2.45.1 2.71.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.69.92.69 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10 10 0 0 0 12 2z" />,
  ],
  [Icons.Loader]: [
    <circle key="0" cx="12" cy="12" r="10" />,
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
  [Icons.X]: [
    <line key="0" x1="18" y1="6" x2="6" y2="18" />,
    <line key="1" x1="6" y1="6" x2="18" y2="18" />,
  ],
};
