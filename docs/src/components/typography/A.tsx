import * as L from '@chili';
import classnames from 'classnames';
import type { AProps } from '@chili/components/A/types';

export const A = ({
  children,
  className,
  ...rest
}: AProps) => {
  const classNames = classnames(
    'text-green-700',
    'underline',
    className,
  );

  return (
    <L.A
      className={classNames}
      {...rest}
    >
      {children}
    </L.A>
  );
};
