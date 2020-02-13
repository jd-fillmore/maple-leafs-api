import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Dashboard({ data, MarnerImg, TavaresImg, MatthewsImg }) {
  return (
    <>
      <GlobalStyle />
      <Flex>
        <Container>
          <RowWrap>
            <Row>
              <Col lg="4">
                <Image>
                  <img src={TavaresImg} alt="Tavares" />
                </Image>
              </Col>
              <Col lg="8">
                <CardBody>
                  {data.tavares.map(item => (
                    <>
                      <Link to="/tavares">
                        <Title>
                          <h1>{item.fullName}</h1>
                        </Title>
                      </Link>
                      <Number>{item.primaryNumber}</Number>
                      <p>{item.primaryPosition.name}</p>
                    </>
                  ))}
                  <ButtonLink>
                    <Link to="/tavares">
                      <button>View Profile</button>
                    </Link>
                  </ButtonLink>
                </CardBody>
              </Col>
            </Row>
          </RowWrap>
          <RowWrap>
            <Row>
              <Col lg="4">
                <Image>
                  <img src={MatthewsImg} alt="Matthews" />
                </Image>
              </Col>
              <Col lg="8">
                <CardBody>
                  {data.matthews.map(item => (
                    <>
                      <Link to="/matthews">
                        <Title>
                          <h1>{item.fullName}</h1>
                        </Title>
                      </Link>
                      <Number>{item.primaryNumber}</Number>
                      <p>{item.primaryPosition.name}</p>
                    </>
                  ))}
                  <ButtonLink>
                    <Link to="/matthews">
                      <button>View Profile</button>
                    </Link>
                  </ButtonLink>
                </CardBody>
              </Col>
            </Row>
          </RowWrap>
          <RowWrap>
            <Row>
              <Col lg="4">
                <Image>
                  <img src={MarnerImg} alt="Marner" />
                </Image>
              </Col>
              <Col lg="8">
                <CardBody>
                  {data.marner.map(item => (
                    <>
                      <Link to="/marner">
                        <Title>
                          <h1>{item.fullName}</h1>
                        </Title>
                      </Link>
                      <Number>{item.primaryNumber}</Number>
                      <p>{item.primaryPosition.name}</p>
                    </>
                  ))}
                  <ButtonLink>
                    <Link to="/marner">
                      <button>View Profile</button>
                    </Link>
                  </ButtonLink>
                </CardBody>
              </Col>
            </Row>
          </RowWrap>
        </Container>
      </Flex>
    </>
  );
}
// Styles

const GlobalStyle = createGlobalStyle`
  body,html {
    background: #eaeaea;
    padding: 20px 0px 60px 0px;
    font-family: 'Roboto', sans-serif;
  }
`;

const Flex = styled.div`
  display: flex;
`;

const Image = styled.div`
  img {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 20px !important;
  font-weight: bold;
  color: #396afc;
`;

const Number = styled.h3`
  font-size: 30px;
`;

const RowWrap = styled.div`
  margin-top: 30px;
  background: #fff;
  transition: 0.2s;
  @media (min-width: 992px) {
    .col-lg-4,
    .col-lg-8 {
      padding: 0px;
    }
  }
  &:focus,
  &:hover {
    transform: translate3D(0, -5px, 0);
    box-shadow: 0 20px 100px #c7c7c7;
  }
`;

const CardBody = styled.div`
  padding: 30px;
  text-align: center;
  @media (min-width: 1200px) {
    margin-top: 60px !important;
  }
  @media (min-width: 992px) {
    margin-top: 30px;
  }
`;

const ButtonLink = styled.div`
  button {
    width: 100%;
    background: #396afc;
    color: #fff;
    border: none;
    transition: 0.2s;
    padding: 10px 0px 10px 0px;
    &:hover {
      background: #2846f7;
    }
  }
`;
export default Dashboard;
