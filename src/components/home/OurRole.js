"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Button from "../shared/Button";
import roleData from "@/mockdata/ourRole";
import useMobileView from "@/utils/hooks/useMobile";
import LeftArrow from "../../../public/assets/icons/home/arrow-left.svg";
import RightArrow from "../../../public/assets/icons/home/arrow-right.svg";

export default function OurRole() {
  const [items, setItems] = useState([]);
  const isMobile = useMobileView();
  const scrollContainerRef = useRef(null);

  // Adjust the number of visible items based on the viewport
  useEffect(() => {
    const initialItemsCount = isMobile ? 2 : roleData.length;
    setItems(roleData.slice(0, initialItemsCount));
  }, [isMobile]); // Depend on isMobile to adjust dynamically

  const loadMoreItems = () => {
    setItems((currentItems) => {
      // Calculate the next number of items to show
      const nextItemsCount =
        currentItems.length + 2 <= roleData.length
          ? currentItems.length + 2
          : roleData.length;
      return roleData.slice(0, nextItemsCount);
    });
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  return (
    <main className="w-full flex flex-col gap-9 mb-24 lg:mb-64">
      <h2 className="text-3xl font-windsorpro-bold text-BalticSea md:text-center lg:text-6xl ">
        Our role in the Agricultural Value Chain
      </h2>

      <section className="flex flex-col gap-8">
        <div
          ref={scrollContainerRef}
          className="w-full flex flex-col gap-2 md:flex-row md:gap-5 md:self-end md:max-w-[1350px] md:overflow-y-scroll scrollbar-hide"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-7 pt-6 px-2.5 pb-5 bg-WhiteSmoke rounded-xl md:max-w-[412px] shrink-0"
            >
              <div className="relative  w-full h-[248px] flex items-center justify-center rounded-2xl md:max-w-sm overflow-hidden ">
                <Image
                  src={item.image}
                  alt="role image"
                  layout="fill"
                  objectFit="contain"
                  className="w-full h-full  transform hover:scale-105 transition duration-700 ease-in-out object-cover"
                />
              </div>

              <div className="flex flex-col gap-5">
                <h4 className="text-black text-lg font-bold md:text-xl md:max-w-80 w-full">
                  {item.role}
                </h4>
                <p className="text-sm text-Graydark md:max-w-72 w-full">
                  {item.subHeading ? (
                    <span className=" font-bold">{item.subHeading}</span>
                  ) : null}
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className=" self-center">
          {items.length < roleData.length && isMobile && (
            <div className="self-center mt-4">
              <button
                onClick={loadMoreItems}
                className="w-fit border px-3.5 py-3 text-xs rounded-md text-GreenHaza border-GreenHaza font-semi-bold hover:text-white hover:bg-GreenHaza"
              >
                Show more
              </button>
            </div>
          )}

          <div className="hidden md:flex md:items-center md:gap-3">
            <button onClick={scrollLeft} className="cursor-pointer">
              <Image src={LeftArrow} alt="left arrow" />
            </button>
            <button onClick={scrollRight} className="cursor-pointer">
              <Image src={RightArrow} alt="right arrow" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
