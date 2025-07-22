import * as L from '@chili';
import Image from 'next/image';
import { MenuButton } from './MenuButton';

export const MainHeader = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean,
  setIsMenuOpen: React.Dispatch<boolean>,
}) => (
  <div className="
      sticky top-0 z-20 border-b
      border-[#09090b] bg-[#09090b]
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
        className="inline-flex items-center max-w-7xl p-4 pt-5"
      >
        <Image
          src="/chili_pepper.png"
          alt="Chili pepper"
          width={32}
          height={32}
          className="inline-block"
        />
        <span className="ml-2 text-3xl text-[#dc2626]">
          Chilii-UI
        </span>
        <span className="ml-2 text-xs text-[#15803d]">0.3.1</span>
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
          className="
            p-3 text-[#15803d]
            md:mr-4
          "
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
