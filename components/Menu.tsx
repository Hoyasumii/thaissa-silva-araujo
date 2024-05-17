import { NavItem } from "@/types";
import slugify from "slugify";
import "./Menu.style.scss";

interface MenuProps {
  items: Array<NavItem>;
}

export const Menu: React.FC<MenuProps> = ({ items }: MenuProps) => (
  <div className="navbar">
    {items.map((item) => (
      <a
        href={item.href}
        className="navbar__item"
        key={slugify(item.label, {
          lower: true,
          trim: true,
        })}
      >
        {item.icon}
        <span>{item.label}</span>
      </a>
    ))}
  </div>
);
