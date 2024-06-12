import React from "react";
import Image from "next/image";

export default function PlantingAsAService({
  title,
  description,
  media,
  mediaType,
  altText,
}) {
  return (
    <main className="w-full mx-auto flex flex-col gap-8 lg:gap-20 animate-fadeUp">
      <div className="w-full flex flex-col gap-4 md:flex-row md:justify-between">
        <h1 className="max-w-56 w-full font-windsorpro-bold text-3xl text-Dune md:max-w-md md:text-[52px] md:leading-none">
          {title}
        </h1>
        <p className="w-full text-sm text-DavyGrey md:max-w-[530px] lg:text-lg lg:tracking-tight">
          {description}
        </p>
      </div>

      <div className="relative w-full h-80 flex items-center justify-center rounded-2xl lg:h-[550px] lg:rounded-3xl overflow-hidden animate-fadeUp">
        {mediaType === "image" ? (
          <Image
            src={media}
            alt={altText}
            layout="fill"
            objectFit="cover"
            className="w-full h-full transform hover:scale-105 transition duration-700 ease-in-out"
          />
        ) : mediaType === "video" ? (
          <video
            src={media}
            alt={altText}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-full transform hover:scale-105 transition duration-700 ease-in-out"
          />
        ) : null}
      </div>
    </main>
  );
}
