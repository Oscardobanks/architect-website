import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavigationBar from "./Navbar";

const MainLayout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
