"use client";
import PrimaryButton from "@/components/shared/buttons/primary";
import TextInput from "@/components/shared/input/text-input";
import PagesBanner from "@/components/shared/pages-banner";
import useResturant from "./use";
import Modal from "@/components/shared/modal";
import Product from "./product";

const Resturant = () => {
  const { foods, category, setCategory, openModal, setOpenModal } =
    useResturant();
  return (
    <>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        className="max-w-2xl w-full"
      >
        <div
          className="w-full grid grid-cols-4 gap-3 p-4 md:grid-cols-3 520px:grid-cols-2 350px:grid-cols-1 
        max-h-[450px] overflow-y-auto"
        >
          {Array(10)
            .fill("")
            .map((_, i) => (
              <Product
                id={i}
                onDecrease={() => {}}
                onIncrease={() => {}}
                onRemove={() => {}}
                price="154.000.000"
                src="/images/pizza.jpg"
                title="پیتزا آلفردو"
                key={i}
              />
            ))}
        </div>
      </Modal>
      <div className="w-full flex justify-start items-start flex-col">
        <PagesBanner alt="contact-us" src="/images/15.jpg">
          <span className="font-light text-sm mb-2">
            لورم ایپسوم متن ساختگی با تولید سادگی
          </span>
          <h2 className="font-extrabold text-6xl md:text-5xl md:mt-3 leading-[1.4]">
            رستوران <span className="text-primary">ما</span>
          </h2>
        </PagesBanner>
        <div className="container flex justify-start items-start flex-col">
          <div className="container flex justify-start items-start flex-col mt-6">
            <div className="max-w-md flex justify-start items-start flex-col">
              <span className="text-primary font-light text-sm mb-2">
                لورم ایپسوم متن ساختگی با تولید سادگی
              </span>
              <h2 className="text-blue-950 font-extrabold text-4xl mb-6 leading-[1.4]">
                سفارش غذا در مروارید
              </h2>
            </div>
            <div className="w-full mb-14 flex justify-between items-center flex-wrap">
              <div className="w-[calc(33.33%-10px)] md:w-[calc(50%-10px)] sm:w-full">
                <TextInput placeholder="دسته بندی" />
              </div>
              <div className="w-[calc(33.33%-10px)] md:w-[calc(50%-10px)] sm:w-full my-2">
                <TextInput placeholder="نام و نام خانوادگی" />
              </div>
              <div className="w-[calc(33.33%-10px)] md:w-full md:mt-5 sm:mt-0">
                <TextInput placeholder="شماره همراه" />
              </div>
              <div className="w-full flex justify-start items-start flex-col my-2">
                <div
                  onClick={() => setOpenModal(true)}
                  className="text-primary underline underline-offset-2 cursor-pointer hover:opacity-75"
                >
                  مشاهده لیست غذاها
                </div>
                <div className="flex justify-start items-start flex-wrap mt-3">
                  <span className="text-zinc-400 ml-3">
                    غذاهای انتخاب شده :{" "}
                  </span>
                  <span className=" bg-primary text-white text-[14px] py-1 px-2 ml-1">
                    x2 پیتزا آلفردو
                  </span>
                  <span className=" bg-primary text-white text-[14px] py-1 px-2 ml-1">
                    x2 پیتزا آلفردو
                  </span>
                </div>
              </div>

              <div className="w-full flex justify-end items-center mt-5 sm:mt-0">
                <div className="flex justify-center items-center flex-col">
                  <div className="w-[200px] mb-1">
                    <span className="text-zinc-500">قیمت مجموع :</span>{" "}
                    <div className="inline-block mr-1">
                      <span className="text-primary text-2xl">125.000</span>{" "}
                      <span className="text-xs text-zinc-400">تومان</span>
                    </div>
                  </div>
                  <div className="w-[200px]">
                    <PrimaryButton className="py-3">ثبت سفارش</PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Resturant;
