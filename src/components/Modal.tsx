import React from "react";
import speakerInfo from "../data/speaker-info";
import classNames from "classnames";

type Props = {
  speakerId: number;
  closeModal: () => void;
};

export default function Modal({ speakerId, closeModal }: Props) {
  return (
    <div
      className={classNames(
        "h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-50 z-20",
        {
          hidden: speakerId === -1,
          flex: speakerId !== -1,
        }
      )}
      onClick={(e) => {
        e.stopPropagation();
        closeModal();
      }}
    >
      <div
        className={
          "fixed z-50 inset-0 overflow-y-auto bg-white w-2/3 max-w-4xl min-w-[40rem] sm:min-w-[84vw] h-1/2 sm:h-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col px-8 pb-8 pt-6 gap-2"
        }
      >
        <div
          className="h-fit w-fit self-end"
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex flex-row gap-4 sm:flex-col">
          <div className="min-w-[280px]">
            <h4 className="text-xl font-bold">
              {speakerInfo.at(speakerId - 1)?.name}
            </h4>
            <p className="whitespace-pre-wrap font-proxima font-medium mt-4 text-xs leading-tight text-gray-700">
              {speakerInfo.at(speakerId - 1)?.about}
            </p>
          </div>
          <div className="max-w-[480px]">
            <p className="whitespace-pre-wrap leading-6 text-sm">
              {speakerInfo.at(speakerId - 1)?.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
