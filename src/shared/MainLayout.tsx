import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#FFFAFE]">
      <Navbar />
      <div className="max-w-[85rem] relative isolate mx-auto pt-20 px-6 lg:px-8 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
