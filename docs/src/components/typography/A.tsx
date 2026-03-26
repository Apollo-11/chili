import * as L from '@chili';
import classnames from 'classnames';
import type { AProps } from '@chili/components/A/types';
import Link from 'next/link';

export const A = ({
  children,
  className,
  href,
  ...rest
}: AProps & { href: string }) => {
  const classNames = classnames(
    'text-green-700',
    'underline',
    className,
  );

  return (
    <Link
      className={classNames}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
};
