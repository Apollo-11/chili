import * as L from '@chili';
import { MenuButton } from './MenuButton';
import { greekFont } from '@/fonts';

export const MainHeader = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean,
  setIsMenuOpen: React.Dispatch<boolean>,
}) => (
  <div className="
      sticky top-0 z-20 border-b
      border-slate-400 bg-white
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
        className={`
          inline-block
          max-w-7xl
          p-4 pt-5
          ${greekFont.className}
        `}
      >
        <span
          className={`
            text-3xl
          `}
        >
          <span className="text-red-600">
            Chili
          </span>
        </span>
        <span className="ml-2 text-xs">0.1.1</span>
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
            p-3
            md:mr-4
          "
        >
          <L.Icon
            icon={L.IconTypes.Icons.Github}
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
