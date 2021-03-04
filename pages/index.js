import React from "react";

import Head from "next/head"
import { Jumbotron, Container } from "reactstrap";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Site de orçamento para desenvolvimento web e Apps"/>
      </Head>
      <Menu />
      <Jumbotron fluid className="descr-top">
        <style>
          {`.descr-top{
            background-color: #050c3d;
            color: #00a1fc;
            margin-bottom: 0rem;
          }`}
        </style>
        <Container className="text-center">
          <h1 className="display-4">
            Temos a solução que sua empresa precisa!
          </h1>
          <p className="lead">This is a simple example a Jumbotron</p>
          <p className="lead">
            <a
              href="/orcamento"
              className="btn btn-outline-primary btn-lg mt-4"
            >
              Orçamento
            </a>
          </p>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="services">
        <style>
          {`.services{
             background-color: #ffffff;
             margin-bottom: 0rem !important;
          }.circle{
            width:140px;
            height:140px;
            background-color: #0a197d;
            font-size: 52px;
            color: #ffffff;
            padding: 24px
          }.centralize{
            margin: 0 auto;
            float: none;
          }
          `}
        </style>
        <Container className="text-center">
          <div>
            <h2 className="display-4">Serviços</h2>
          </div>
          <p className="lead pb-4">
            Lorem ipsum suscipit cras duis pellentesque ipsum class quam taciti.
          </p>

          <div className="row">
            <div className="col-md-4">
              <div className="rounded-circle circle centralize">
              <FontAwesomeIcon icon="laptop-code"/>
              </div>
              <h2 className="mt-4 mb-4">Serviço um</h2>
              <p>
                Lorem ipsum suscipit cras duis pellentesque ipsum class quam
                taciti Lorem ipsum suscipit cras duis pellentesque ipsum class
                quam taciti
              </p>
            </div>

            <div className="col-md-4">
              <div className="rounded-circle circle centralize">
              <FontAwesomeIcon icon="mobile-alt"/>
              </div>
              <h2 className="mt-4 mb-4">Serviço dois</h2>
              <p>
                Lorem ipsum suscipit cras duis pellentesque ipsum class quam
                taciti quam taciti
              </p>
            </div>
            
            <div className="col-md-4">
              <div className="rounded-circle circle centralize">
              <FontAwesomeIcon icon="network-wired"/>
              </div>
              <h2 className="mt-4 mb-4">Serviço tres</h2>
              <p>
                Lorem ipsum suscipit cras duis pellentesque ipsum class quam
                taciti Lorem ipsum suscipit cras duis p quam taciti
              </p>
            </div>
          </div>
        </Container>
      </Jumbotron>

      <Footer/>
      
    </div>
  );
}

export default Home;
