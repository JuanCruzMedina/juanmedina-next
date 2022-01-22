import { PageTitle } from "@components/page-titles";
import React from "react";

import { Wrapper, Container } from "./styled";

export const Main: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Juan Cruz Medina.</h1>
        <p>Back End Developer &#38; Engineering Student.</p>
      </Container>
    </Wrapper>
  );
};
