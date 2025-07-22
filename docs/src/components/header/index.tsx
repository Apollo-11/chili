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
        className="inline-block p-4 pt-5"
      >
        <Image
          src="/chili_pepper.png"
          alt="Chili pepper"
          width={50}
          height={50}
          className="inline-block align-middle"
        />
        <span className="align-middle">
          <span className="ml-1 font-sans text-xl text-[#dc2626]">
            Chili-UI
          </span>
          <span className="ml-2 text-base text-[#15803d]">
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
          className="p-3 md:mr-4"
        >
          <L.Icon
            icon={L.IconTypes.Icons.Github}
            className="text-[#15803d]"
          />
        </L.A>
        <MenuButton
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    </div>
  </div>
);
