import { Layout } from "antd";
import "./Content.style.scss";

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

export const Content = ({ children, className }: ContentProps) => (
  <Layout.Content className={`content__main ${className}`}>{children}</Layout.Content>
);
