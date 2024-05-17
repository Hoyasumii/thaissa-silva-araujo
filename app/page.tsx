"use client";

import { Button, Card, Form, Input, Layout, Typography } from "antd";
import { z } from "zod";
import { Header, Content, Menu } from "@/components";
import "./page.style.scss";
import { navItems } from "@/utils";
import slugify from "slugify";

const { Title, Text } = Typography;

export default function Home() {
  const [form] = Form.useForm();
  const knowledges = ["Python", "TypeScript", "React.js", "Next.js"];

  const sendForm = (event: any) => {
    const dto = z.object({
      name: z.string().min(3),
      email: z.string().email(),
      description: z.string().min(3),
    });
    if (dto.safeParse(event).success) {
      alert("Mensagem enviada com Sucesso");
      form.resetFields();
      return;
    }
    alert("Mensagem não enviada devido a algum mal preenchimento: NAME E DESCRIPTION precisam ter no mínimo 3 de tamanho, e o email precisa ser válido!");
  };

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
              <Card
                className="section-card"
                key={`knowledge-${slugify(knowledge)}`}
                bordered={false}
              >
                {knowledge}
              </Card>
            ))}
          </div>
          <div></div>
        </div>
        <div id="contact">
          <div>
            <Title className="section-title">Contato</Title>
            <Text className="section-text">
              Caso queira solicitar algum serviço meu, basta preencher o
              formulário, que nas próximas horas retornarei.
            </Text>
            <Form className="section-form" form={form} onFinish={sendForm} autoComplete="off" layout="vertical">
              <Form.Item name="name" label="Nome" rules={[{ required: true }]}>
                <Input placeholder="John Doe" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email para contato"
                rules={[{ required: true }]}
              >
                <Input placeholder="account@email.com" />
              </Form.Item>
              <Form.Item
                name="description"
                label="Descreva o seu problema"
                rules={[{ required: true }]}
              >
                <Input.TextArea
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam esse facere atque ex illum, voluptate facilis labore corrupti distinctio aperiam!"
                />
              </Form.Item>
              <Button type="primary" htmlType="submit">Enviar</Button>
            </Form>
          </div>
          <div></div>
        </div>
      </Content>
    </Layout>
  );
}
