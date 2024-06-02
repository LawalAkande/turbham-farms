import Image from "next/image";

export default function ContentCard({
  step,
  title,
  subHeading,
  description,
  image,
}) {
  return (
    <main className="mx-auto w-full flex flex-col gap-7 px-4 md:flex-row md:items-start justify-center md:px-20">
      <section className="flex items-center justify-start gap-4 md:gap-6   md:flex-col md:items-start">
        <div className="w-[50px] h-[50px] flex-shrink-0 flex items-center justify-center rounded-full bg-GreenHaza text-white text-3xl font-windsorpro-bold grow lg:text-6xl lg:w-[100px] lg:h-[100px]">
          {step}
        </div>
        <div className="md:flex md:flex-col md:gap-11">
          <h2 className="text-2xl font-windsorpro-bold text-BalticSea lg:text-5xl lg:leading-snug">
            {title}
          </h2>
          <div className=" hidden md:flex md:flex-col md:gap-4">
            <h2 className="text-BalticSea text-xl font-bold md:text-4xl">
              {subHeading}
            </h2>
            <p className=" text-sm text-DavyGrey md:max-w-[600px] w-full md:text-lg">
              {description}
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-2 md:w-1/2">
        <div className="w-full h-auto overflow-hidden rounded-xl md:max-w-[548px]">
          <Image
            src={image}
            alt="help image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 md:hidden">
          <h2 className="text-BalticSea text-xl font-bold">{subHeading}</h2>
          <p className="text-sm text-DavyGrey">{description}</p>
        </div>
      </section>
    </main>
  );
}
