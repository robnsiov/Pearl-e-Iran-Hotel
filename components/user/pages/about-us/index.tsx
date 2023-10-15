import Image from "next/image";
import AboutUsBanner from "../home/about-us";
import PrimaryButton from "@/components/shared/buttons/primary";
import TextInput from "@/components/shared/input/text-input";

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
        <div className="w-[calc(33.33%-10px)] md:w-[calc(50%-10px)] sm:w-full">
          <TextInput placeholder="موضوع" />
        </div>
        <div className="w-[calc(33.33%-10px)] md:w-[calc(50%-10px)] sm:w-full my-2">
          <TextInput placeholder="نام" />
        </div>
        <div className="w-[calc(33.33%-10px)] md:w-full md:mt-5 sm:mt-0">
          <TextInput placeholder="شماره همراه" />
        </div>
        <div className="w-full mt-[20px] sm:mt-2 mb-0">
          <TextInput placeholder="پیام" textarea={true} />
        </div>
        <div className="w-full flex justify-end items-center mt-5 sm:mt-0">
          <div className="w-[200px]">
            <PrimaryButton className="py-3">ارسال</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
