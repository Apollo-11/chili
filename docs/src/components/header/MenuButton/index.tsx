import * as L from '@chili';

export const MenuButton = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean,
  setIsMenuOpen: React.Dispatch<boolean>,
}) => (
  <L.Button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="
        mr-2
        border-0
        bg-[#09090b]
        py-2
        text-[#15803d]
        hover:bg-[#09090b]
        md:hidden"
  >
    <L.Icon
      icon={L.IconTypes.Icons.Menu}
      size={24}
      className="text-[#15803d]"
    />
  </L.Button>
);
