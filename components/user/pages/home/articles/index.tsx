"use client";
import Image from "next/image";
import Link from "next/link";
// @ts-ignore
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Slider from "@/components/shared/slider";

const Articles = () => {
  return (
    <>
      <div className="w-full  bg-blue-950">
        <div className="container flex justify-start items-start flex-col py-[100px] md:py-12">
          <span className="text-primary font-light text-sm mb-2">
            لورم ایپسوم متن ساختگی با تولید سادگی
          </span>
          <h2 className="font-extrabold text-5xl md:text-4xl mb-6 leading-[1.4] text-white">
            تجربه های <span className="text-primary">اقامت</span>
          </h2>
          <Slider
            options={{
              gap: "2rem",
              autoWidth: true,
              height: "500px",
              direction: "rtl",
              pagination: false,
              type: "loop",
              arrows: false,
            }}
            arrows={true}
          >
            {Array(8)
              .fill("")
              .map((_, i) => (
                <SplideSlide key={i}>
                  <Link
                    href={"/"}
                    className="w-[300px] inline-block  relative group h-full"
                  >
                    <div className="w-full h-full overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-20 bg-black transition-all duration-700
             group-hover:opacity-40 z-10"
                      ></div>
                      <div
                        className="absolute top-5 right-5 flex 
              justify-center items-center flex-col text-clip 
            bg-primary text-white z-20 px-2 py-1"
                      >
                        <span className="font-bold text-xs mb-1">آبان</span>
                        <span className="font-medium leading-[1]">25</span>
                      </div>
                      <Image
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-700"
                        src="/images/maldives1.jpg"
                        alt="image"
                        width="400"
                        height="800"
                      />
                    </div>
                    <div
                      className="flex justify-start items-start flex-col bg-white 
            z-30 absolute inset-x-6 bottom-6 p-5"
                    >
                      <span className="mb-2 text-sm font-light text-primary">
                        اتاق ویژه
                      </span>
                      <h3 className="text-cyan-800 font-extrabold text-xl">
                        اتاق ها ویژه برای توریست های خارجی
                      </h3>
                    </div>
                  </Link>
                </SplideSlide>
              ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default Articles;
