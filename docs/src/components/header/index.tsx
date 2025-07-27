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
          className="p-3 md:mr-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            className="text-[#15803d]"
          >
            <path d="M12 0c-1.66 0-3 1.34-3 3v2.1c-2.09.5-3 1.71-3 3.4v3.5c0 2.64 1.81 4.83 5 5.4-.31.26-.5.71-.5 1.6V22l2.5-1 2.5 1v-3c0-.89-.19-1.34-.5-1.6 3.19-.57 5-2.76 5-5.4V8.5c0-1.69-.91-2.9-3-3.4V3c0-1.66-1.34-3-3-3z" />
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
