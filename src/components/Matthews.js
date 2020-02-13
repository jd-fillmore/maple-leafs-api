import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

import headerImg from "../img/matthews-main.jpg";
import MatthewsImg from "../img/matthews.jpg";

function Matthews({ data, dataFull }) {
  return (
    <>
      <Container>
        <Row>
          <BackLink>
            <Link to="/">Back to Dashboard</Link>
          </BackLink>
        </Row>
        <Row>
          <CardWrap>
            <Card>
              <Hero>
                <img src={headerImg} alt="Matthews header" />
              </Hero>
              <Col lg="12">
                <ProfileCard>
                  <img src={MatthewsImg} alt="Matthews headshot" />
                  {data.map(item => (
                    <>
                      <h1>{item.fullName}</h1>
                      <h4>
                        #{item.primaryNumber} | {item.primaryPosition.name}
                      </h4>
                      <Flex>
                        <p>
                          <strong>Age</strong>: {item.currentAge}
                        </p>
                        <span>|</span>
                        <p>
                          <strong>Height</strong>: {item.height}
                        </p>
                        <span>|</span>
                        <p>
                          <strong>Weight</strong>: {item.weight} lbs
                        </p>
                        <span>|</span>
                        <p>
                          <strong>Born</strong>: {item.birthCity},{" "}
                          {item.nationality}
                        </p>
                      </Flex>
                    </>
                  ))}
                </ProfileCard>
                {dataFull.map(item => (
                  <>
                    <Table>
                      <div className="table-responsive">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">GP</th>
                              <th scope="col">G</th>
                              <th scope="col">A</th>
                              <th scope="col">P</th>
                              <th scope="col">+/-</th>
                              <th scope="col">PIM</th>
                              <th scope="col">PPG</th>
                              <th scope="col">PPP</th>
                              <th scope="col">SHG</th>
                              <th scope="col">SHP</th>
                              <th scope="col">GWG</th>
                              <th scope="col">OTG</th>
                              <th scope="col">S</th>
                              <th scope="col">S%</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{item.goals}</td>
                              <td>{item.games}</td>
                              <td>{item.assists}</td>
                              <td>{item.points}</td>
                              <td>{item.plusMinus}</td>
                              <td>{item.pim}</td>
                              <td>{item.powerPlayGoals}</td>
                              <td>{item.powerPlayPoints}</td>
                              <td>{item.shortHandedGoals}</td>
                              <td>{item.shortHandedPoints}</td>
                              <td>{item.gameWinningGoals}</td>
                              <td>{item.overTimeGoals}</td>
                              <td>{item.shots}</td>
                              <td>{item.shotPct}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Table>
                  </>
                ))}
              </Col>
            </Card>
          </CardWrap>
        </Row>
      </Container>
    </>
  );
}

export default Matthews;

const BackLink = styled.div`
  a {
    font-size: 20px;
  }
`;

const Hero = styled.div`
  img {
    width: 100%;
  }
`;

const CardWrap = styled.div`
  margin-top: 10px;
  width: 100%;
`;

const ProfileCard = styled.div`
  margin-top: -130px;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: -60px;
  }
  img {
    width: 250px;
    border-radius: 220px;
    margin-bottom: 40px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    @media (max-width: 480px) {
      width: 180px;
    }
  }
  h1,
  span {
    color: #396afc;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0px 20px 0px;
`;

const Table = styled.div`
  padding: 0px 0px 20px 0px;
`;
