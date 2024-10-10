import React, { useEffect, useState } from "react";

import Navigator, { NavigatorForMobile } from "./components/Navigator";
import SectionLayout from "./components/SectionLayout";
import Tab from "./components/Tab";
import Table from "./components/Table";
import Modal from "./components/Modal";
import FixedButton from "./components/FixedButton";

import sessionInfo from "./data/session-info";
import timeTable from "./data/time-table";

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [nowSelectedSpeakerId, setNowSelectedSpeakerId] = useState(-1);

  const changeTab = (nextIndex: number) => {
    setSelectedIndex(nextIndex);
  };

  const closeModal = () => {
    setNowSelectedSpeakerId(-1);
  };

  return (
    <div id="wrap" className="font-pretendard">
      <Navigator />
      <a href="https://docs.google.com/presentation/d/1amXERB8fMDcsZ2ponc--ABPw0kRGzy6gLMHjFmK6mSo/edit?usp=sharing" target="_blank"><FixedButton>컨퍼런스 브로셔 보러 가기 →</FixedButton></a>
      <div id="container">
        <div
          id="main"
          className="relative w-full h-screen bg-[#9188A4] bg-main bg-cover bg-center sm:bg-right-top md:bg-right-top flex flex-col pt-40 pb-16 px-14 sm:pt-16 sm:pb-8 sm:px-6"
        >
          <div className="lg:hidden absolute top-0 left-0 bg-black bg-opacity-20 w-full h-full"></div>
          <div className="z-10 font-proxima font-black text-8xl sm:text-5xl text-white lg:flex-1">
            <h1>
              1<sup>st</sup> SSHS
              <br />
              PAY IT FORWARD
              <br />
              CONFERENCE
            </h1>
          </div>
          <div className="z-10 font-proxima font-black text-5xl sm:text-2xl text-white sm:mt-6">
            <h2 className="leading-tight">
              2023 OCTOBER 28 (SAT)
              <br />
              10:00 - 18:00{" "}
              <span className="font-pretendard">@서울과학고등학교</span>
            </h2>
          </div>
          <div className="hidden sm:block sm:flex-1"></div>
          <div className="z-10 mt-2 hidden sm:block">
            <NavigatorForMobile />
          </div>
          <div className="z-10 self-center mt-8 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
        <SectionLayout
          sectionId="session-info"
          title={`SESSION\nINFORMATION`}
          subtitle="세션 정보"
        >
          <Tab changeTab={changeTab} json={sessionInfo} />
          <div className="flex-1 relative">
            <h4 className="font-proxima text-3xl sm:text-2xl font-extrabold leading-9 sm:leading-7 mt-10">
              SESSION #{selectedIndex + 1}
              <br />
              {sessionInfo[selectedIndex].title}
            </h4>
            <p className="text-xl sm:text-lg mt-8 whitespace-pre-wrap leading-9 sm:leading-7 font-bold">
              {sessionInfo[selectedIndex].description}
            </p>
            <div className="moderator-container flex flex-row sm:flex-col mt-14">
              <div className="w-40 font-bold font-proxima sm:mb-2">
                MODERATOR
              </div>
              <div>
                <ul className="font-medium">
                  <li
                    className="cursor-pointer border-b-2 border-b-white hover:border-b-black transition ease-out inline-block"
                    onClick={() => {
                      setNowSelectedSpeakerId(
                        sessionInfo[selectedIndex].moderator.id
                      );
                    }}
                  >
                    {sessionInfo[selectedIndex].moderator.name}
                  </li>
                </ul>
              </div>
            </div>
            <div className="panels-container flex flex-row sm:flex-col mt-6">
              <div className="w-40 font-bold font-proxima sm:mb-2">PANELS</div>
              <ul className="columns-2 sm:columns-1 font-medium h-[96px] sm:h-fit">
                {sessionInfo[selectedIndex].panels.map(
                  (panel: { name: string; id: number }, index: number) => {
                    return (
                      <li key={index} className="cursor-pointer leading-8 w-64" onClick={() => {
                        setNowSelectedSpeakerId(panel.id);
                      }}>
                        <div>
                          <span className="border-b-2 border-b-white hover:border-b-black transition ease-out pb-1">{panel.name}</span>
                        </div>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
            <Modal speakerId={nowSelectedSpeakerId} closeModal={closeModal} />
          </div>
        </SectionLayout>
        <SectionLayout
          sectionId="time-table"
          title={`TIME TABLE`}
          subtitle="컨퍼런스 일정"
        >
          <Table json={timeTable} />
        </SectionLayout>
        <SectionLayout
          sectionId="live-streaming"
          title={`LIVE STREAMING`}
          subtitle={`라이브 스트리밍`}
        >
          <div className="">
            <p className="leading-7 font-medium">
              PAY IT FORWARD 컨퍼런스의 라이브 스트리밍은 행사 당일(2023.10.28.)
              Zoom을 통해 진행합니다.
              <br />
              Zoom 회의실 입장 링크는 참가 신청자 대상으로 추후 이메일을 통해
              안내드릴 예정입니다.
            </p>
          </div>
        </SectionLayout>
        <SectionLayout
          sectionId="location"
          title="LOCATION"
          subtitle="위치 정보"
        >
          <div className="w-full h-[600px] flex flex-row sm:flex-col gap-8 pb-10">
            <iframe
              width={window.innerWidth < 820 ? "100%" : "50%"}
              height="100%"
              frameBorder={0}
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?q=서울과학고등학교&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
              allowFullScreen
            ></iframe>
            <div className="flex-1 flex flex-col justify-between h-full">
              <div>
                <h4 className="text-2xl font-extrabold leading-8">
                  서울과학고등학교
                </h4>
                <p className="text-xl mt-4 sm:mt-2 sm:mb-8 whitespace-pre-wrap leading-8 font-medium">
                  서울특별시 종로구 혜화로 63
                </p>
              </div>
              <button className="w-full text-left bg-[#4287F5] py-3 px-4 font-bold text-lg">
                <a
                  href="https://www.google.com/maps/place/%EC%84%9C%EC%9A%B8%EA%B3%BC%ED%95%99%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90/data=!3m1!4b1!4m6!3m5!1s0x357cbcd67355bd21:0x9fdac84b29299336!8m2!3d37.5916754!4d126.9982134!16zL20vMDZ4d255?entry=ttu"
                  target="_blank"
                >
                  Google Map에서 보기 →
                </a>
              </button>
            </div>
          </div>
        </SectionLayout>
      </div>
      <footer>
        <div className="text-slate-400 text-center pt-8 pb-16">
          <p className="text-xs">Designed & Developed by <a href="https://github.com/mori8" target="_blank" className="underline">Suyeon Nam (@mori8)</a></p>
        </div>
      </footer>
    </div>
  );
}
