import PagesBanner from "@/components/shared/pages-banner";

const Resturant = () => {
  return (
    <>
      <div className="w-full flex justify-start items-start flex-col">
        <PagesBanner alt="contact-us" src="/images/15.jpg">
          <span className="font-light text-sm mb-2">
            لورم ایپسوم متن ساختگی با تولید سادگی
          </span>
          <h2 className="font-extrabold text-6xl md:text-5xl md:mt-3 leading-[1.4]">
            رستوران <span className="text-primary">ما</span>
          </h2>
        </PagesBanner>
      </div>
    </>
  );
};
export default Resturant;
