"use client";

import { Layout } from "antd";
import { Header, Content, Menu } from "@/components";
import "./page.style.scss";
import { navItems } from "@/utils";

const { Footer } = Layout;

/* 
TODO: Adicionar a navbar
TODO: Criar o conteúdo principal
TODO: Ver se as cores servem
TODO: No final(footer), colocar um formulário de contato.
*/

export default function Home() {
  return (
    <Layout className="content">
      <Header>
        <Menu items={navItems} />
      </Header>
      <Content>
        <div id="home">Hello World</div>
      </Content>
      <Footer>aaaa</Footer>
    </Layout>
  );
}
