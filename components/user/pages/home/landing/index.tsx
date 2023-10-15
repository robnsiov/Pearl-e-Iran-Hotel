import Cover from "./cover";
import Details from "./details";

const Landing = () => {
  return (
    <>
      <div className="w-full h-screen relative z-50">
        <Cover />
        <Details />
      </div>
    </>
  );
};
export default Landing;
