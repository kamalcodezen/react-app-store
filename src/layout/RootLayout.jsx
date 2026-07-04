import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <h1>Navbar</h1>
      <Outlet />
      <h2>Footer</h2>
    </>
  );
};

export default RootLayout;
