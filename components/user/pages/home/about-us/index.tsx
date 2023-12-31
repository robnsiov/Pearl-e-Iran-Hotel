import { ArrowRight2, CallCalling, DirectRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className="container py-20 flex justify-center items-center md:items-start sm:flex-col sm:py-10">
        <div className="w-1/2 flex justify-start items-center pr-8 sm:pr-4 ml-14 sm:w-full sm:ml-0 sm:mb-16 sm:justify-center">
          <div className="w-[400px] h-[500px] relative md:w-[350px] md:h-[400px] sm:h-[350px]">
            <div className="absolute inset-0 z-10">
              <span className="absolute -top-8 -left-8 sm:-left-4 sm:-top-4 h-[200px] w-[200px] bg-[url('/images/dots.png')] z-10"></span>
              <Image
                src={"/images/about.jpeg"}
                alt="about"
                className="w-full h-full object-cover object-center relative z-20 hover:scale-95 transition-all duration-500"
                width={1500}
                height={800}
              />
            </div>
            <span className="absolute inset-0 bg-primary translate-x-8 sm:translate-y-4 sm:translate-x-4 translate-y-8"></span>
          </div>
        </div>
        <div className="w-1/2 flex justify-start items-start flex-col text-zinc-500 sm:w-full">
          <span className="text-primary font-light text-sm mb-2">
            لورم ایپسوم متن ساختگی با تولید سادگی
          </span>
          <h2 className="text-blue-950 font-extrabold text-4xl mb-6 leading-[1.4]">
            لورم ایپسوم متن <span className="text-primary">ساختگی</span> با
            تولید سادگی نامفهوم از صنعت چاپ
          </h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            <br />
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد
          </p>
          <div className="flex justify-start items-start flex-col space-y-2 text-zinc-500 mt-7">
            <div className="flex justify-center items-center">
              <div className="bg-primary w-8 aspect-square rounded-full flex justify-center items-center">
                <DirectRight size="16" className="text-white" />
              </div>
              <span className="mr-3">لورم ایپسوم متن ساختگی</span>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-primary w-8 aspect-square rounded-full flex justify-center items-center">
                <DirectRight size="16" className="text-white" />
              </div>
              <span className="mr-3">لورم ایپسوم متن ساختگی</span>
            </div>
          </div>
          <Link
            href="tel:09125632541"
            className="flex justify-start items-center mt-6"
          >
            <CallCalling size="38" className="text-primary" />
            <div className="flex justify-start items-start flex-col mr-3">
              <span>لورم ایپسوم متن ساختگی</span>
              <h3 className="text-primary mt-1 text-2xl">09122563254</h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
