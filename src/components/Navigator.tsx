import React from "react";

type Props = {};

export default function Navigator({}: Props) {
  return (
    <div
      id="navigator"
      className="z-50 sm:hidden fixed w-full font-proxima flex flex-row items-center justify-between
      px-4 py-2 bg-white"
    >
      <ul className="flex flex-row gap-8 font-semibold">
        <a href="">
          <li className="font-extrabold">PAY IT FORWARD CONF.</li>
        </a>
        <a href="#session-info">
          <li>SESSION INFO</li>
        </a>
        <a href="#time-table">
          <li>TIME TABLE</li>
        </a>
        <a href="#live-streaming">
          <li>LIVE STREAMING</li>
        </a>
        <a href="#location">LOCATION</a>
      </ul>
      <div className="nav-logo-wrapper w-10 h-10">
        <a href="https://sshs.sen.hs.kr/" target="_blank">
          <span className="sr-only">SSHS LOGO</span>
          <img src="/sshslogo.jpeg" alt="SSHS LOGO" />
        </a>
      </div>
    </div>
  );
}

export function NavigatorForMobile({}: Props) {
  return (
    <div
      id="navigator"
      className="w-full font-proxima flex flex-col justify-between text-lg text-white"
    >
      <ul className="flex flex-col gap-4 font-extrabold">
        <a href="#session-info">
          <li className="flex justify-between border-b-2 border-white p-2">SESSION INFO <span className="font-pretendard">→</span></li>
        </a>
        <a href="#time-table">
          <li className="flex justify-between border-b-2 border-white p-2">TIME TABLE <span className="font-pretendard">→</span></li>
        </a>
        <a href="#live-streaming">
          <li className="flex justify-between border-b-2 border-white p-2">LIVE STREAMING <span className="font-pretendard">→</span></li>
        </a>
        <a href="#location">
          <li className="flex justify-between border-b-2 border-white p-2">LOCATION <span className="font-pretendard">→</span></li>
        </a>
      </ul>
    </div>
  );
}
