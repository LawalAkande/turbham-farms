import Image from "next/image";

export default function SubContent({ subHeading, description, image }) {
  return (
    <main className="mx-auto w-full flex flex-col gap-7 px-4 md:flex-row md:items-start justify-center md:px-20">
      <section className="flex flex-col gap-2 md:w-1/2">
        <div className="w-full h-auto overflow-hidden rounded-xl md:max-w-[548px]">
          <Image
            src={image}
            alt="help image"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <div className=" flex flex-col gap-4  md:w-1/2 md:pt-36">
        <h2 className="text-BalticSea text-xl font-bold md:text-4xl">
          {subHeading}
        </h2>
        <p className="max-w-[343px] text-sm text-DavyGrey md:max-w-2xl w-full md:text-lg">
          {description}
        </p>
      </div>
    </main>
  );
}
