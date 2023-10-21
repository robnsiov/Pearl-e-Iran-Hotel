import { useState } from "react";

const useResturant = () => {
  const [category, setCategory] = useState("");
  const [foods, setFoods] = useState(Array(20).fill(""));
  const [openModal, setOpenModal] = useState(false);
  return { category, setCategory, foods, openModal, setOpenModal };
};
export default useResturant;
