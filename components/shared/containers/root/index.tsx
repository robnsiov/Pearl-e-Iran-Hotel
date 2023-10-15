import Testimonials from "@/components/user/pages/home/testmonials";
import RootContainerImpl from "./types";
import Footer from "@/components/user/pages/home/footer";
import Menu from "@/components/user/pages/home/landing/menu";

const RootContainer = ({ children }: RootContainerImpl) => {
  return (
    <>
      <div className="bg-zinc-100">
        <Menu />
        {children}
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};
export default RootContainer;
