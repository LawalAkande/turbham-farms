import Image from "next/image";

export default function PlanningStage({
  step,
  title,
  sections,
  showStep = true,
}) {
  // Determine if the number of sections is odd
  const isOdd = sections.length % 2 !== 0;

  // Helper function to render description based on its type
  const renderDescription = (description) => {
    // Check if the description is an array, render each item
    if (Array.isArray(description)) {
      return description.map((item, subIndex) => (
        <div
          key={subIndex}
          className=" w-full space-y-3 text-DavyGrey text-sm lg:text-lg lg:tracking-normal  md:max-w-[490px] lg:leading-6 "
        >
          {item.subHeading && (
            <p >{item.subHeading}</p>
          )}
          <p >{item.text}</p>
        </div>
      ));
    }
    // If it's a string, render it as a paragraph (make sure to return it)
    return (
      <p className="text-DavyGrey text-sm lg:text-lg lg:tracking-normal  md:max-w-[490px] lg:leading-6 w-full">
        {description}
      </p>
    );
  };

  return (
    <main className="w-full flex flex-col gap-9 lg:gap-24 ">
      <section className="flex items-center justify-start gap-2 md:gap-6">
        {showStep && (
          <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-GreenHaza text-white text-3xl font-windsorpro-bold lg:text-6xl lg:w-[100px] lg:h-[100px]">
            {step}
          </div>
        )}
        <h2 className="text-2xl font-windsorpro-bold text-BalticSea lg:text-5xl">
          {title}
        </h2>
      </section>

      <div className="grid grid-cols-1 gap-11 md:grid-cols-2 md:gap-20 animate-fadeUp">
        {sections.map((section, index) => {
          // Check if it's the last section and if the sections are odd
          const isLastOddSection = isOdd && index === sections.length - 1;

          return (
            <main
              key={index}
              className={`w-full grid grid-cols-1 gap-3 md:content-start animate-fadeUp ${
                isLastOddSection
                  ? "md:grid-cols-2 md:items-center  md:justify-between md:col-span-2 md:gap-20 "
                  : ""
              } `}
            >
              <div className="relative w-full h-96 flex items-center justify-center rounded-2xl lg:h-[660px] lg:rounded-3xl overflow-hidden animate-fadeUp">
                <Image
                  src={section.image}
                  alt={section.altText}
                  layout="fill"
                  objectFit="contain"
                  className="w-full h-full object-cover scale-x-105"
                />
              </div>
              <div
                className={`w-full grid grid-cols-1 gap-4 ${
                  isLastOddSection ? "max-w-[585px]" : ""
                }`}
              >
                <h3 className="text-xl font-bold text-BalticSea md:text-[38px] md:min-h-28 md:flex md:items-center lg:leading-tight md:max-w-[546px] w-full">
                  {section.heading}
                </h3>
                {/* Render description based on its type */}
                <p>{renderDescription(section.description)}</p>
              </div>
            </main>
          );
        })}
      </div>
    </main>
  );
}
