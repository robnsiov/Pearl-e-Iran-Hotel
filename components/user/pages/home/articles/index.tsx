"use client";
import Image from "next/image";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Articles = () => {
  return (
    <>
      <div className="w-full  bg-cyan-900">
        <div className="container flex justify-start items-start flex-col py-[100px]">
          <Splide options={{ perPage: 3 }} className="w-full">
            <SplideSlide>
              <Link
                href={"/"}
                className="w-full inline-block aspect-[0.7] relative group"
              >
                <div className="w-full h-full overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20 bg-primary transition-all duration-[3s]
             group-hover:opacity-50 z-10"
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
                    className="w-full h-full object-cover object-center group-hover:scale-125 transition-all duration-[3s]"
                    src="/images/1.jpg"
                    alt="image"
                    width="400"
                    height="800"
                  />
                </div>
                <div
                  className="flex justify-start items-start flex-col bg-white 
            z-30 absolute inset-x-6 bottom-6 p-5 translate-y-[62px] group-hover:translate-y-0
            transition-all duration-[3s]"
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
          </Splide>
        </div>
      </div>
    </>
  );
};
export default Articles;
