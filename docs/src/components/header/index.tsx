import * as L from '@chili';
import Image from 'next/image';
import { MenuButton } from './MenuButton';
// eslint-disable-next-line import/extensions, import/no-relative-packages
import packageJson from '../../../../package.json';

export const MainHeader = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean,
  setIsMenuOpen: React.Dispatch<boolean>,
}) => (
  <div className="
      sticky top-0 z-20 border-b
      border-slate-400 bg-[#09090b]
      text-[#15803d]
    "
  >
    <div
      className="
        mx-auto flex max-w-7xl
        justify-between
      "
    >
      <L.A
        href="/"
        className="inline-block px-4"
      >
        <Image
          src="/chili_pepper.png"
          alt="Chili pepper"
          width={70}
          height={70}
          className="inline-block align-middle"
        />
        <span className="align-middle">
          <span className="ml-1 font-sans text-[24px] text-[#dc2626]">
            Chili-UI
          </span>
          <span className="ml-2 text-[20px] text-[#15803d]">
            {packageJson.version}
          </span>
        </span>
      </L.A>
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <L.A
          href="https://github.com/chili-development/chili"
          target="_blank"
          className="p-3 md:mr-4 text-[#15803d]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-label="GitHub">
            {/* eslint-disable-next-line max-len */}
            <path d="M12 0.3a12 12 0 0 0-3.79 23.4c0.6 0.1 0.82-0.26 0.82-0.58v-2.02c-3.34 0.73-4.04-1.61-4.04-1.61-0.55-1.4-1.34-1.77-1.34-1.77-1.1-0.76 0.09-0.75 0.09-0.75 1.22 0.08 1.87 1.26 1.87 1.26 1.08 1.85 2.83 1.32 3.52 1.01 0.1-0.78 0.42-1.32 0.76-1.63-2.67-0.3-5.48-1.34-5.48-5.98 0-1.32 0.47-2.4 1.25-3.25-0.13-0.3-0.54-1.52 0.12-3.16 0 0 1-0.32 3.3 1.24a11.5 11.5 0 0 1 6 0c2.3-1.56 3.3-1.24 3.3-1.24 0.66 1.64 0.25 2.86 0.12 3.16 0.78 0.85 1.25 1.93 1.25 3.25 0 4.65-2.81 5.68-5.49 5.97 0.43 0.37 0.81 1.1 0.81 2.22v3.29c0 0.32 0.22 0.69 0.83 0.58A12 12 0 0 0 12 0.3z"/>
          </svg>
        </L.A>
        <MenuButton
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    </div>
  </div>
);
