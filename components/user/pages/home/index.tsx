import AboutUs from "./about-us";
import Articles from "./articles";
import Auth from "./auth";
import Banner from "./banner";
import InfoBox from "./info-box";
import Landing from "./landing";
import PopularFoods from "./popular-foods";
import PopularRooms from "./popular-rooms";
import Stats from "./stats";
import Videos from "./videos";

const Home = () => {
  return (
    <>
      <Landing />
      <AboutUs />
      <PopularRooms />
      <Stats />
      <PopularFoods />
      <Banner />
      <InfoBox />
      <Articles />
      <Videos />
      {/* <Auth /> */}
    </>
  );
};
export default Home;
