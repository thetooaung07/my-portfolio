import { VoidFunctionComponent } from "react";
import { ISkill } from "../types";

const Bar: VoidFunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
   console.log(level)
  return (
    <div className="my-2 text-white bg-gray-200 rounded-full">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600 "
        style={{ width: `${level}%` }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
