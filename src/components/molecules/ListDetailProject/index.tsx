import { ICChecklist } from "@/assets";
import React from "react";

interface ListDetailProps {
  list?: string | string[];
}
const ListDetailProject = ({ list }: ListDetailProps) => {
  return (
    <ul className="mt-3">
      <li className="space-x-2 flex ">
        <div className="pt-1">
          <ICChecklist />
        </div>
        <p>{list}</p>
      </li>
    </ul>
  );
};

export default ListDetailProject;
