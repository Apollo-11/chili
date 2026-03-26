import {
  H1, Td, P, TdCode, A,
} from '@/components/typography';
import { PropsTableSection } from '@/sections';
import { MainDemo } from './MainDemo';
import { PATHS } from '@/constants';
import Link from 'next/link';

const ChiliProviderPage = () => (
  <article>
    <H1>Chili</H1>

    <P>
      You can wrap your app into the Chili provider to give nested Chili components access to some globals
      you may want to define in the provider, see the table below.
    </P>

    <PropsTableSection>
      <tr>
        <TdCode>children</TdCode>
        <TdCode>React.ReactNode</TdCode>
        <Td>The app or a part of it that has access to the the other props</Td>
      </tr>
      <tr>
        <TdCode>messages</TdCode>
        <TdCode>PartialGlobalDefaultMessages</TdCode>
        <Td>
          <P>Customize component text labels globally.</P>
          <P>Available messages:</P>
          <P><Link href={PATHS.autoComplete}>autoComplete</Link></P>
          <P><Link href={PATHS.pagination}>pagination</Link></P>
        </Td>
      </tr>
      <tr>
        <TdCode>theme</TdCode>
        <TdCode>
          PartialGlobalDefaultTheme
        </TdCode>
        <Td>...</Td>
      </tr>
      <tr>
        <TdCode>renders</TdCode>
        <TdCode>
          GlobalDefaultRenders
        </TdCode>
        <Td>...</Td>
      </tr>
    </PropsTableSection>

    <MainDemo />
  </article>
);

export default ChiliProviderPage;
