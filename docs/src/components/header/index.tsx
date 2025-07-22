import * as L from '@chili';
import Image from 'next/image';
import { MenuButton } from './MenuButton';
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
        flex
        justify-between
      "
    >
      <L.A
        href="/"
        className="inline-block max-w-7xl p-4 pt-5"
      >
        <Image
          src="/chili_pepper.png"
          alt="Chili pepper"
          width={24}
          height={24}
          className="inline-block align-middle"
        />
        <span className="ml-2 align-middle text-3xl font-sans text-[#dc2626]">
          Chilii-UI
        </span>
        <span className="ml-2 align-middle text-xs text-[#15803d]">
          {packageJson.version}
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
