import React, { useState } from "react";

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

function Budget() {
  const [budget, setBudget] = useState({
    // function useState começa com os objetos vazio
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    project: "",
  });

  const onChangeInput = (e) => {
    setBudget({ ...budget, [e.target.name]: e.target.value });
  };
  const sendBudget = async (e) => {
    e.preventDefault();
    console.log(budget)

    try {
      const response = await fetch("http://localhost:8080/budget", {
        method: "POST", // usa o metodo POST
        body: JSON.stringify(budget), // envia no formato de um objeto a variavel budget
        headers: {'Content-Type': 'application/json'} // indica que vai enviar um conteudo em formato json
      });

      const responseSend = await response.json()

      if(responseSend.error){
        alert(responseSend.message)
      }else{
        alert(responseSend.message)
      }
      
    } catch (error) {
      alert("Erro: Orçamento não enviado!")
    }


  };

  return (
    <div>
      <Head>
        <title>Orçamento</title>
        <meta
          name="description"
          content="Solicitar orçamento para desenvolvimento web e Apps"
        />
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
          <Form onSubmit={sendBudget}>
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Preencha com o seu nome completo"
                onChange={onChangeInput}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">E-mail</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Preencha com o seu e-mail"
                onChange={onChangeInput}
              />
            </FormGroup>

            <FormGroup>
              <Label for="phone">Telefone</Label>
              <Input
                type="text"
                name="phone"
                id="phone"
                placeholder="(xx) xxxxx-xxxx"
                onChange={onChangeInput}
              />
            </FormGroup>

            <FormGroup>
              <Label for="whatsapp">Telefone</Label>
              <Input
                type="text"
                name="whatsapp"
                id="whatsapp"
                placeholder="(xx) xxxxx-xxxx"
                onChange={onChangeInput}
              />
            </FormGroup>

            <FormGroup>
              <Label for="project">Projeto</Label>
              <Input
                type="textarea"
                name="project"
                id="project"
                placeholder="Fale um pouco de seu projeto"
                onChange={onChangeInput}
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

export default Budget;
