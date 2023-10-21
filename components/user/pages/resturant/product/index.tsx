import { AddSquare, MinusSquare } from "iconsax-react";
import Image from "next/image";
import useProduct from "./use";
import ProductImpl from "./types";

const Product = ({
  id,
  onDecrease,
  onIncrease,
  onRemove,
  price,
  src,
  title,
}: ProductImpl) => {
  const { count, decrease, increase } = useProduct({
    id,
    onDecrease,
    onIncrease,
    onRemove,
  });
  return (
    <>
      <div className="bg-white">
        <div className="aspect-video w-full relative">
          <Image
            src={src}
            alt="landing"
            className="w-full h-full object-cover object-center"
            width={300}
            height={300}
          />
          {count === 0 && (
            <div
              className="select-none absolute left-2 top-2 z-10 bg-primary 
                  rounded-[6px] p-0.5 text-zinc-100 hover:text-blue-950 cursor-pointer transition-all duration-200"
              onClick={increase}
            >
              <AddSquare size="18" />
            </div>
          )}

          {count !== 0 && (
            <div
              className="select-none absolute top-2 z-10 left-2 text-zinc-100
                   rounded-[6px] p-0.5 bg-primary flex justify-center items-center"
            >
              <AddSquare
                onClick={increase}
                size="16"
                className="hover:text-blue-950 cursor-pointer transition-all duration-200"
              />
              <span className="w-[15px] text-center text-xs">{count}</span>
              <MinusSquare
                onClick={decrease}
                size="16"
                className="hover:text-blue-950 cursor-pointer transition-all duration-200"
              />
            </div>
          )}
        </div>
        <div className="w-full flex justify-between items-center p-1 bg-primary">
          <span className="text-[13px] text-zinc-100">{title}</span>
          <div className="inline-block text-blue-950 text-[12px]">
            {price} <span className="text-[10px] mr-0.5">تومان</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
