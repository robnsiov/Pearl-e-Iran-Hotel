import Testimonials from "@/components/user/pages/home/testmonials";
import Menu from "@/components/user/pages/home/landing/menu";
import Footer from "@/components/user/pages/home/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Testimonials />
      <Footer />
    </>
  );
};
export default Layout;
