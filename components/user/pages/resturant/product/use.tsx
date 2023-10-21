import { useState } from "react";
import { UseProductImpl } from "./types";

const useProduct = ({
  id,
  onDecrease,
  onIncrease,
  onRemove,
}: UseProductImpl) => {
  const [count, setCount] = useState(0);
  const increase = () => {
    const next = count + 1;
    onIncrease(id, next);
    setCount(next);
  };
  const decrease = () => {
    const prev = count - 1;
    if (prev === 0) onRemove(id);
    else onDecrease(id, prev);
    setCount(prev);
  };

  return { count, increase, decrease };
};
export default useProduct;
