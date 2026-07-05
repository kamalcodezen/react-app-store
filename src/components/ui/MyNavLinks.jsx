import { NavLink } from "react-router";

const MyNavLinks = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-base font-medium transition-colors duration-300 px-3 py-2 rounded-md select-none
        ${
          isActive
            ? "text-[var(--perf-gold)] font-semibold underline decoration-2 underline-offset-8"
            : "text-[var(--perf-text-muted)] hover:text-[var(--perf-text-main)]"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLinks;
