import { useTheme } from "next-themes";
import { FunctionComponent } from "react";
import { IColorThemes } from "../types";

const ThemeChanger: FunctionComponent<{
  setColor: (value: IColorThemes) => void;
}> = ({ setColor }) => {
  // const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center gap-4 my-2 lg:justify-start lg:flex-col lg:mt-4">
      <div
        className="w-12 h-12 rounded-full th-default bg-gradient-to-tr from-skin-base to-skin-secondary shadow-custom-light dark:shadow-custom-dark"
        onClick={() => setColor("th-default")}
      ></div>
      <div
        className="w-12 h-12 rounded-full th-cyan bg-gradient-to-tr from-skin-base to-skin-secondary shadow-custom-light dark:shadow-custom-dark"
        onClick={() => setColor("th-cyan")}
      ></div>

      <div
        className="w-12 h-12 rounded-full th-blue bg-gradient-to-tr from-skin-base to-skin-secondary shadow-custom-light dark:shadow-custom-dark"
        onClick={() => setColor("th-blue")}
      ></div>
      <div
        className="w-12 h-12 rounded-full th-purple bg-gradient-to-tr from-skin-base to-skin-secondary shadow-custom-light dark:shadow-custom-dark"
        onClick={() => setColor("th-purple")}
      ></div>
      <div
        className="w-12 h-12 rounded-full th-red bg-gradient-to-tr from-skin-base to-skin-secondary shadow-custom-light dark:shadow-custom-dark"
        onClick={() => setColor("th-red")}
      ></div>
    </div>
  );
};

export default ThemeChanger;

// 2D3142

// Cyan 73C1C6 top right to 4BC6B9
//  Black 2D2E2E to bottom 0F0F0F
