import Image from "next/image";
import AboutUsBanner from "../home/about-us";
import PrimaryButton from "@/components/shared/buttons/primary";

const AboutUs = () => {
  return (
    <div className="w-full flex justify-start items-center flex-col">
      <div className="w-full h-[430px]" style={{ clipPath: " inset(0)" }}>
        <div
          className="flex justify-center h-full items-start flex-col container relative z-20 text-white
        mt-[40px]"
        >
          <span className="font-light text-sm mb-2">
            لورم ایپسوم متن ساختگی با تولید سادگی
          </span>
          <h2 className="font-extrabold text-6xl md:text-5xl md:mt-3 leading-[1.4]">
            تماس با <span className="text-primary">ما</span>
          </h2>
        </div>
        <div className="absolute inset-0 bg-blue-950 opacity-50 z-10"></div>
        <Image
          src={"/images/15.jpg"}
          alt="landing"
          className="fixed top-0 left-0 w-full h-full object-cover object-center"
          width={1500}
          height={800}
        />
      </div>
      <AboutUsBanner />
      <div className="container mb-14 flex justify-between items-center flex-wrap">
        <label className="w-[calc(33.33%-10px)]">
          <input
            placeholder="ایمیل"
            className="outline-none w-full border-[1px] border-primary p-4 text-zinc-600 caret-primary"
          />
        </label>
        <label className="w-[calc(33.33%-10px)]">
          <input
            placeholder="ایمیل"
            className="outline-none w-full border-[1px] border-primary p-4 text-zinc-600 caret-primary"
          />
        </label>
        <label className="w-[calc(33.33%-10px)]">
          <input
            placeholder="ایمیل"
            className="outline-none w-full border-[1px] border-primary p-4 text-zinc-600 caret-primary"
          />
        </label>
        <textarea
          className="outline-none w-full border-[1px] border-primary mt-[20px]
         p-4 text-zinc-600 caret-primary resize-none"
          rows={7}
        />
        <div className="w-full flex justify-end items-center mt-[20px]">
          <div className="w-[200px]">
            <PrimaryButton className="py-3">ارسال</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
