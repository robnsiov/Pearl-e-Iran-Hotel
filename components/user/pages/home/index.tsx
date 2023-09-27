import Articles from "./articles";
import Auth from "./auth";
import Banner from "./banner";
import Landing from "./landing";

const Home = () => {
  return (
    <>
      <Landing />
      <Banner />
      <Auth />
      {/* <Articles /> */}
    </>
  );
};
export default Home;
