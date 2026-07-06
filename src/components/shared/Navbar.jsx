import { useState } from "react";
import MyNavLinks from "../ui/MyNavLinks";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/apps",
      label: "Apps",
    },
    {
      path: "/games",
      label: "Games",
    },
    {
      path: "/books",
      label: "Books",
    },
  ];

  return (
    <nav className="max-w-11/12 mx-auto py-4">
      <section className="flex justify-between items-center">
        {/* logo*/}
        <div>
          <p className="font-bold text-2xl text-perf-gold">RossWell</p>
        </div>

        {/* links*/}
        <div className="justify-between items-center hidden md:flex">
          {links.map((link, ind) => (
            <MyNavLinks key={ind} to={link.path}>
              {link.label}
            </MyNavLinks>
          ))}
        </div>

        {/* profile dropdown and theme toggle */}
        <div className="flex justify-center items-center gap-4">
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>

          {/* mobile menu trigger */}
          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-perf-gold cursor-pointer"
            >
              <Menu size={30} />
            </button>
          </div>
        </div>

        {/* mobile drawer/slider  */}
        {/* overlay  */}
        <div
          onClick={() => setIsOpen(false)}
          className={` fixed inset-0 z-[90] bg-perf-bg/30 backdrop-blur-sm h-screen transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        />

        {/* mobile drawer */}
        <div
          className={`fixed top-0 left-0 h-screen w-[80%] max-w-[350px] z-[100] bg-perf-bg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform flex flex-col ${isOpen ? "translate-x-0 shadow-[10px_0_40px_rgba(0,0,0,0.3)]" : "-translate-x-full"}`}
        >
          {/* header */}
          <div
            onClick={() => setIsOpen(false)}
            className="flex justify-between items-center p-6 border border-b-2 shadow"
          >
            <Link to="/">
              <p className="font-bold text-2xl text-perf-gold">RossWell</p>
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="text-perf-gold cursor-pointer"
            >
              <X size={35} />
            </button>
          </div>

          {/* NavLinks */}
          <div className="pt-4 flex-2">
            {links.map((link, ind) => (
              <div className="flex flex-col px-6">
                <NavLink
                  key={ind}
                  onClick={() => setIsOpen(false)}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-base p-3 inline border-3 font-bold border-perf-border rounded-xl mt-3 hover:bg-perf-text-muted/80 hover:text-white ${isActive && "bg-perf-text-muted/80 text-white"}`
                  }
                >
                  {link.label}
                </NavLink>
              </div>
            ))}
          </div>

          {/*  theme toggle */}
          <div className="mx-6 p-2.5 border-3 border-perf-border rounded-xl  flex items-center justify-between">
            <p className="text-base font-semibold">Appearance</p>
            <ThemeToggle />
          </div>

          {/* Cta button */}
          <div
            onClick={() => setIsOpen(false)}
            className="p-6 rounded-xl flex flex-col space-y-2.5 font-semibold"
          >
            <Link className="p-3 text-base border-3 border-perf-border rounded-xl text-center hover:bg-perf-text-muted/80 hover:text-white cursor-pointer">
              Login
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              className="p-3 text-base  border-3 border-perf-border rounded-xl text-center hover:bg-perf-text-muted/80 hover:text-white cursor-pointer"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
