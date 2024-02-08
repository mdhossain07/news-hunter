import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
