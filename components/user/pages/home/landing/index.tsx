import Image from "next/image";
import Cover from "./cover";
import Menu from "./menu";
import Details from "./details";

const Landing = () => {
  return (
    <>
      <div className="w-full h-screen relative">
        <Menu />
        <Cover />
        <Details />
      </div>
    </>
  );
};
export default Landing;
