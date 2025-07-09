import * as L from '@chili';

export const Li = ({
  children,
  className,
}: {
  children: React.ReactNode,
  className?: string,
}) => (
  <L.Li
    className={`${className ?? ''} mb-2`}
  >
    {children}
  </L.Li>
);
