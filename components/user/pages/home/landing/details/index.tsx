import FindNow from "./find-now";

const Details = () => {
  return (
    <>
      <div
        className="absolute inset-0 z-10 flex mx-auto
      justify-center items-center flex-col container"
      >
        <span className="text-white mb-3 text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </span>
        <h1
          className="text-8xl text-white font-black
         text-center leading-[1.2] max-w-4xl w-full md:text-5xl md:leading-[1.3]"
        >
          زیبایی را در هتل{" "}
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: "2px #fff",
            }}
          >
            مروارید
          </span>{" "}
          کشف کنید
        </h1>
        <FindNow />
      </div>
    </>
  );
};
export default Details;
