"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App, ConfigProvider } from "antd";
import theme from "@/styles/customTheme";

interface RootProps {
  children: React.ReactNode;
}

export const Root = ({ children }: RootProps) => (
  <AntdRegistry>
    <ConfigProvider theme={theme}>
      <App>{children}</App>
    </ConfigProvider>
  </AntdRegistry>
);
