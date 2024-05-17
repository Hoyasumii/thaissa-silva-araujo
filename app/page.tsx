"use client";

import { Card, Col, Layout, Row, Typography } from "antd";
import { Header, Content, Menu } from "@/components";
import "./page.style.scss";
import { navItems } from "@/utils";
import slugify from "slugify";

const { Footer } = Layout;
const { Title, Text } = Typography;

/* 
TODO: Criar o conteúdo principal
TODO: Ver se as cores servem
TODO: No final(footer), colocar um formulário de contato.
*/

export default function Home() {
  const knowledges = ["Python", "TypeScript", "React.js", "Next.js"];

  return (
    <Layout className="content">
      <Header>
        <Menu items={navItems} />
      </Header>
      <Content>
        <div id="home">
          <div>
            <Title className="main-title">Thaissa da Silva Araújo</Title>
            <Text className="main-text">Desenvolvedora de Software</Text>
          </div>
          <div></div>
        </div>
        <div id="about">
          <div>
            <Title className="section-title">Sobre mim</Title>
            <Text className="section-text">
              Eu sou uma estudante de Análise e Desenvolvimento de Sistemas que
              se encontra no 2o período. Atualmente eu estou me aprofundando no
              desenvolvimento Web, me aperfeiçoando em tecnologias como Next.js
              e React.js, devido a facilidade de criar aplicações web e o seu
              vasto ecossistema.
            </Text>
          </div>
          <div></div>
        </div>
        <div id="knowledges">
          <div>
            <Title className="section-title">Conhecimentos</Title>
            {knowledges.map((knowledge) => (
              <Card className="section-card" key={`knowledge-${slugify(knowledge)}`} bordered={false}>{knowledge}</Card>
            ))}
          </div>
          <div></div>
        </div>
      </Content>
      <Footer>
        <div id="contact"></div>
      </Footer>
    </Layout>
  );
}
