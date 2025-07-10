import * as L from '@chili';

export const H2 = ({
  children,
}: {
  children: React.ReactNode,
}) => (
  <L.H2
    className="mb-3 mt-6 border-b font-bold"
  >
    {children}
  </L.H2>
);
