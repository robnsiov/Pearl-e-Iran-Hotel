import PrimaryCard from "@/components/shared/cards/primary";
import { Clock } from "iconsax-react";
import cls from "classnames";

const PopularRooms = () => {
  return (
    <>
      <div className="w-full bg-zinc-200">
        <div className="container flex justify-start items-start flex-col py-10">
          <div className="w-full grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-6">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <div
                  className={cls(
                    "lg:h-auto lg:aspect-square",
                    i === 0 || i === 1 ? "h-[400px]" : "h-[230px]",
                    {
                      "col-span-2 lg:col-span-1": i === 1,
                    }
                  )}
                  key={i}
                >
                  <PrimaryCard
                    image="/images/maldives1.jpg"
                    label="2 میلیون تومان"
                    title="اتاق ویژه مهمان"
                  >
                    <div className="flex justify-start items-center text-white">
                      <div className="flex justify-center items-center ml-3">
                        <Clock size="16" />
                        <span className="text-[13px] mr-1">7 روز</span>
                      </div>
                      <div className="flex justify-center items-center ml-3">
                        <Clock size="16" />
                        <span className="text-[13px] mr-1">7 روز</span>
                      </div>
                    </div>
                  </PrimaryCard>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default PopularRooms;
