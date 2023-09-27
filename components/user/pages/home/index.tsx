import Articles from "./articles";
import Auth from "./auth";
import Banner from "./banner";
import Landing from "./landing";
import Videos from "./videos";

const Home = () => {
  return (
    <>
      <Landing />
      <Banner />
      <Auth />
      <Videos />
      {/* <Articles /> */}
    </>
  );
};
export default Home;
