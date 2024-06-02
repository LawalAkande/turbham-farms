import React from "react";

export default function HowWeHelp({title, description}) {
  return (
    <main className="flex flex-col gap-6 items-center px-4 text-center md:gap-12">
      <h1 className="text-4xl text-Cyan font-windsorpro-bold md:text-GreenHaza md:text-6xl md:max-w-6xl w-full">{title}</h1>
      <p className="max-w-[343px] w-full text-DavyGrey text-sm md:max-w-[850px] md:text-lg">
        {description}
      </p>
    </main>
  );
}
