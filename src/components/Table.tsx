import React from "react";
import classNames from "classnames";

type Props = {
  json: any[];
};

export default function Table({ json }: Props) {
  return (
    <div className="bg-gradient-to-l to-black from-white">
      <div className="flex flex-col bg-white my-[2px]">
        {json.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className={classNames(
                "flex flex-row items-center leading-none py-4 text-lg sm:text-base gap-2",
                {
                  "bg-gradient-to-l to-[#E1D4E4] from-[#9188A4]/0":
                    item.type === "session",
                }
              )}
            >
              <div className="font-bold w-40 font-proxima text-center px-2">
                <p>{item.time}</p>
              </div>
              <div className="font-bold w-80">
                <p className="mt-1 leading-5">{item.content}</p>
                <p className="font-normal hidden sm:block mt-1 text-sm">{item.more}</p>
              </div>
              <div className="flex-1 sm:hidden">
                <p>{item.more}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
