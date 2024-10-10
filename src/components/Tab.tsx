import React, { useState, useEffect } from "react";
import classNames from "classnames";

type Props = {
  changeTab: (nextIndex: number) => void;
  json: any;
};

export default function Tab({ changeTab, json }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    changeTab(selectedIndex);
  }, [selectedIndex]);

  return (
    <div className="flex flex-row justify-between font-proxima">
      {json.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className={classNames("tab cursor-pointer pb-2", {
              "text-gray-300": index !== selectedIndex,
              "text-black border-b-2 border-black": index === selectedIndex,
            })}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            <div className="tab-content font-bold text-lg">
              <p>{item.time}</p>
              <p className="mt-1 hidden lg:block">{item.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
