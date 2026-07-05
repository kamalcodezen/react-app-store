import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <h2>Footer</h2>
    </>
  );
};

export default RootLayout;
