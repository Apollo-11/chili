import * as L from '@chili';
import type { PropsWithChildren } from 'react';
import { H2, THead, Table } from '@/components/typography';

export const CustomizationPropsTableSection = ({ children }: PropsWithChildren) => (
  <section>
    <H2>Customization props</H2>
    <L.Div
      _overflow-x-auto
    >
      <Table>
        <THead headers={['Name', 'Type']} />
        <tbody>
          { children }
        </tbody>
      </Table>
    </L.Div>
  </section>
);
