import React from "react";

import { Container, Jumbotron } from "reactstrap";

const Footer = () => {
  return (
    <Jumbotron fluid className="footer">
      <style>
        {`.footer{
             background-color: #050d3d;
             color: #ffffff;
            padding: 10px 10px;
            margin-bottom: 0rem
         } `}
      </style>
      <Container className="text-center">
        <h1 className="lead">Rodapé</h1>
      </Container>
    </Jumbotron>
  );
};

export default Footer;
