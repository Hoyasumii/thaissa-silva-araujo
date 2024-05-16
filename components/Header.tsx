import { Layout } from "antd";
import "./Header.style.scss";

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => (
  <Layout.Header className="content__header">{children}</Layout.Header>
);
