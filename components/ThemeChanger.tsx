import { useTheme } from "next-themes";
import { VoidFunctionComponent } from "react";

const ThemeChanger: VoidFunctionComponent<{ setColor: Function }> = ({
  setColor,
}) => {
  const { theme } = useTheme();

  console.log(theme);

  return (
    <div className="flex items-center gap-4 lg:flex-col th-cyan">
      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-skin-base to-skin-secondary"></div>
      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-skin-base to-skin-secondary"></div>
      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-skin-base to-skin-secondary"></div>
      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-skin-base to-skin-secondary"></div>
    </div>
  );
};

export default ThemeChanger;

// 2D3142

// Cyan 73C1C6 top right to 4BC6B9
//  Black 2D2E2E to bottom 0F0F0F
