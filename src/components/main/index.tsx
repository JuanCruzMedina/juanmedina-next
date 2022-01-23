import { PageTitle } from "@components/page-titles";
import React from "react";
import logo from "logo.png";

import { Wrapper, Container } from "./styled";

export const Main: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Juan Cruz Medina</h1>
        <img src={logo} alt="Logo" />
        <p>Back End Developer &#38; Engineering Student</p>
      </Container>
    </Wrapper>
  );
};
