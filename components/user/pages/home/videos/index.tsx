import { Play } from "iconsax-react";
import Image from "next/image";

const Videos = () => {
  return (
    <>
      <div className="container flex justify-between md:flex-wrap items-start py-10">
        <div
          className="w-[calc(50%-15px)] md:w-full md:mb-5
         flex justify-start items-start flex-col cursor-pointer"
        >
          <div className="w-full aspect-video relative group">
            <div className="absolute inset-0 bg-[#0f2454] opacity-40 z-10"></div>
            <div className="absolute inset-0 flex justify-center items-center z-20">
              <div
                className="w-[100px] md:w-[70px] aspect-square border-2 border-zinc-300 
                transition-all duration-500 group-hover:border-white
              rounded-full flex justify-center items-center"
              >
                <Play
                  size="38"
                  className="text-white transition-all duration-500 group-hover:scale-90 md:hidden"
                />
                <Play className="text-white transition-all duration-500 group-hover:scale-90 hidden md:inline-block" />
              </div>
            </div>
            <div className="w-full h-full overflow-hidden">
              <div className="w-full transition-all duration-500 group-hover:scale-110">
                <Image
                  src={"/images/1.jpg"}
                  alt="landing"
                  className="w-full h-full object-cover object-center"
                  width={1500}
                  height={800}
                />
              </div>
            </div>
          </div>
          <h4 className="mb-3 mt-8 text-xl font-medium text-primary">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
          </h4>
          <span className="w-[80%] md:w-full text-zinc-400 text-[15px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </span>
        </div>
        <div
          className="w-[calc(50%-15px)] md:w-full md:mb-5
         flex justify-start items-start flex-col cursor-pointer"
        >
          <div className="w-full aspect-video relative group">
            <div className="absolute inset-0 bg-[#0f2454] opacity-40 z-10"></div>
            <div className="absolute inset-0 flex justify-center items-center z-20">
              <div
                className="w-[100px] md:w-[70px] aspect-square border-2 border-zinc-300 
                transition-all duration-500 group-hover:border-white
              rounded-full flex justify-center items-center"
              >
                <Play
                  size="38"
                  className="text-white transition-all duration-500 group-hover:scale-90 md:hidden"
                />
                <Play className="text-white transition-all duration-500 group-hover:scale-90 hidden md:inline-block" />
              </div>
            </div>
            <div className="w-full h-full overflow-hidden">
              <div className="w-full transition-all duration-500 group-hover:scale-110">
                <Image
                  src={"/images/1.jpg"}
                  alt="landing"
                  className="w-full h-full object-cover object-center"
                  width={1500}
                  height={800}
                />
              </div>
            </div>
          </div>
          <h4 className="mb-3 mt-8 text-xl font-medium text-primary">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
          </h4>
          <span className="w-[80%] md:w-full text-zinc-400 text-[15px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </span>
        </div>
      </div>
    </>
  );
};
export default Videos;
