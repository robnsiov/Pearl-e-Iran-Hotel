import Image from "next/image";
import Cover from "./cover";
import Menu from "./menu";
import Details from "./details";

const Landing = () => {
  return (
    <>
      <div className="w-full h-screen relative z-50">
        <Menu />
        <Cover />
        <Details />
      </div>
    </>
  );
};
export default Landing;
