import React from "react";

type Props = {
  sectionId: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function SectionLayout({
  sectionId,
  title,
  subtitle,
  children,
}: Props) {
  return (
    <section
      id={sectionId}
      className="flex flex-col max-w-7xl p-12 pt-14 sm:p-6 mx-auto my-0"
    >
      <div className="flex flex-row sm:flex-col sm:gap-4 justify-between items-start py-12 whitespace-pre-line">
        <h1 className="font-proxima font-extrabold text-5xl sm:text-4xl">{title}</h1>
        <h2 className="font-bold text-xl text-right sm:text-left">{subtitle}</h2>
      </div>
      <div className="flex-1 flex flex-col">{children}</div>
    </section>
  );
}
