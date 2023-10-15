import AboutUs from "./about-us";
import Articles from "./articles";
import Auth from "./auth";
import Banner from "./banner";
import Footer from "./footer";
import InfoBox from "./info-box";
import Landing from "./landing";
import PopularFoods from "./popular-foods";
import PopularRooms from "./popular-rooms";
import Stats from "./stats";
import Testimonials from "./testmonials";
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
      <Testimonials />
      <Footer />
    </>
  );
};
export default Home;
