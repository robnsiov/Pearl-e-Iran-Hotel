import AboutUs from "./about-us";
import Articles from "./articles";
import Auth from "./auth";
import Banner from "./banner";
import Landing from "./landing";
import Stats from "./stats";
import Videos from "./videos";

const Home = () => {
  return (
    <>
      <Landing />
      <AboutUs />
      <Banner />
      {/* <Auth /> */}
      <Videos />
      <Stats />
      {/* <Articles /> */}
    </>
  );
};
export default Home;
