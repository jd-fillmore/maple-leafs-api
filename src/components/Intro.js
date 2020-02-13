import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

function Intro({ main, text }) {
  return (
    <>
      <Hero>
        <Container>
          <Row>
            <Col>
              <h1>{main}</h1>
              <p>{text}</p>
            </Col>
          </Row>
        </Container>
      </Hero>
    </>
  );
}

export default Intro;

const Hero = styled.div`
  background-image: linear-gradient(to right, #396afc, #2846f7);
  padding: 40px 0px 40px 0px;
  margin-top: -40px;
  margin-bottom: 80px;
  h1,
  p {
    color: #fff;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
