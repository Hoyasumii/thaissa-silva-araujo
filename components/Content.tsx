import { Layout } from "antd";
import "./Content.style.scss";

interface ContentProps {
  children: React.ReactNode;
}

export const Content = ({ children }: ContentProps) => (
  <Layout.Content className="content__main">{children}</Layout.Content>
);
