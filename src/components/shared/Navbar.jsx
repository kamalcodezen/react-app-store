import MyNavLinks from "../ui/MyNavLinks";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
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
    <nav className="max-w-11/12 mx-auto py-2">
      <section className="flex justify-between items-center py- 5">
        {/* logo*/}
        <div>
          <p>RossWell</p>
        </div>

        {/* links*/}
        <div className="flex justify-between items-center">
          {links.map((link, ind) => (
            <MyNavLinks key={ind} to={link.path}>
              {link.label}
            </MyNavLinks>
          ))}
        </div>

        {/* profile dropdown and theme toggle */}
        <div>
          <ThemeToggle />
          <div></div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
