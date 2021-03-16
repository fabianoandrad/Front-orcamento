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
  Alert,
} from "reactstrap";

function Budget() {
  // function useState começa com os objetos vazio
  const [budget, setBudget] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    project: "",
  });

  // resposta para o alerta
  const [response, setResponse] = useState({
    formSave: false, // se form foi enviado e esta sendo salvo, bloqueia o botão
    type: "", // tipo de error
    message: "", // e a menssagem de erro
  });

  // salva na var budget alguma alteração no form
  const onChangeInput = (e) => {
    setBudget({ ...budget, [e.target.name]: e.target.value });
  };

  // executa esta function quando botão do formulario for precionado
  const sendBudget = async (e) => {
    e.preventDefault();

    setResponse({ formSave: true})
    //console.log(budget);

    try {
      const response = await fetch("http://localhost:8080/budget", {
        // envia dados a api e o bd
        method: "POST", // usa o metodo POST
        body: JSON.stringify(budget), // envia a variavel budget no formato de um objeto
        headers: { "Content-Type": "application/json" }, // indica que vai enviar um conteudo em formato json
      });

      const responseSend = await response.json();

      // salva na variavel response se houve error ou success
      if (responseSend.error) {
        setResponse({
          formSave: false,
          type: "error",
          message: responseSend.message,
        });
      } else {
        setResponse({
          formSave: false,
          type: "success",
          message: responseSend.message,
        });
      }

      // neste caso não houve uma resposta da api
    } catch (error) {
      setResponse({
        formSave: false,
        type: "error",
        message: "Erro: Orçamento não enviado!",
      });
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

          {response.type === 'error' ?  <Alert color="danger">{response.message}</Alert> : ""}
          {response.type === 'success' ?  <Alert color="success">{response.message}</Alert> : ""}
         

          <Form onSubmit={sendBudget}>
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Preencha com o seu nome completo"
                onChange={onChangeInput}
                required
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
                required
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
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="whatsapp">Whatsapp</Label>
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
                required
              />
            </FormGroup>

            {response.formSave == true ? <Button type="submit" outline color="warning" disabled >Enviando...</Button> : <Button type="submit" outline color="primary">Solicitar</Button> } 

          </Form>
        </Container>
      </Jumbotron>

      <Footer />
    </div>
  );
}

export default Budget;
