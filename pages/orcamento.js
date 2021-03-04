import React from "react";

import Head from "next/head";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import {
  Container,
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function Orcamento() {
  return (
    <div>
      <Head>
        <title>Orçamento</title>
        <meta name="description" content="Solicitar orçamento para desenvolvimento web e Apps"/>
      </Head>
      <Menu />
      <Jumbotron fluid className="descr-top">
        <style>
          {`.descr-top{
            background-color: #050c3d;
            color: #00a1fc;
            padding: 40px 40px;
            margin-bottom: 0rem;
          }`}
        </style>

        <Container className="text-center">
          <h1 className="display-4">Orcamento</h1>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="form-budget">
        <style>
          {`.form-budget{
padding: 80px;
background-color: #ffffff;
margin-top: 0rem;
        }`}
        </style>

        <Container>
          <Form>
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Preencha com o seu nome completo"
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">E-mail</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Preencha com o seu e-mail"
              />
            </FormGroup>

            <FormGroup>
              <Label for="phone">Telefone</Label>
              <Input
                type="text"
                name="phone"
                id="phone"
                placeholder="(xx) xxxxx-xxxx"
              />
            </FormGroup>

            <FormGroup>
              <Label for="whatsapp">Telefone</Label>
              <Input
                type="text"
                name="whatsapp"
                id="whatsapp"
                placeholder="(xx) xxxxx-xxxx"
              />
            </FormGroup>

            <FormGroup>
              <Label for="project">Projeto</Label>
              <Input
                type="textarea"
                name="project"
                id="project"
                placeholder="Fale um pouco de seu projeto"
              />
            </FormGroup>

            <Button type="submit" outline color="primary">
              Solicitar
            </Button>
          </Form>
        </Container>
      </Jumbotron>

      <Footer />
    </div>
  );
}

export default Orcamento;
