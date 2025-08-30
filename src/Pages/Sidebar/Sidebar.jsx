import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/hooks", label: "Built-in React Hooks" },
  { path: "/community", label: "Community" },
  { path: "/resources", label: "Resources" },
  { path: "/about", label: "About" },
  { path: "/users", label: "Users" },
  { path: "/faq", label: "Faq" },
];

function Sidebar() {
  return (
    <div className="Sidebar">
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
