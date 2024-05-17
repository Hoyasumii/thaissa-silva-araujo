import {
  BookOutlined,
  ContainerOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { createElement } from "react";
import { NavItem } from "@/types";

export const navItems: Array<NavItem> = [
  {
    label: "Início",
    href: "#home",
    icon: createElement(HomeOutlined),
  },
  {
    label: "Sobre mim",
    href: "#about",
    icon: createElement(UserOutlined),
  },
  {
    label: "Conhecimentos",
    href: "#knowledges",
    icon: createElement(BookOutlined),
  },
  {
    label: "Contato",
    href: "#contact",
    icon: createElement(ContainerOutlined),
  },
];
