import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col, Card } from "reactstrap";
import ReactDOM from "react-dom";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import DocumentMeta from "react-document-meta";

import Intro from "./components/Intro";
import Tavares from "./components/Tavares";
import Matthews from "./components/Matthews";
import Marner from "./components/Marner";
import Dashboard from "./components/Dashboard";
import TavaresImg from "./img/tavares.jpg";
import MatthewsImg from "./img/matthews.jpg";
import MarnerImg from "./img/marner.jpg";

import "./styles.css";

function App() {
  // Meta tags
  const meta = {
    title: "Maple Leafs API Stats",
    description:
      "Toronto Maple Leafs API Stats Web Application. Built with React, React Hooks, and Styled Components.",
    meta: {
      charset: "utf-8"
    }
  };
  // Set initial state for data
  const [data, setData] = useState({
    tavares: [],
    matthews: [],
    marner: [],
    tavaresFull: [],
    matthewsFull: [],
    marnerFull: []
  });

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      // Grab all players API's
      let tavares =
        "https://statsapi.web.nhl.com/api/v1/people/8475166?expand=person.stats&stats=yearByYear,careerRegularSeason&expand=stats.team&site=en_nhlCA";
      let matthews =
        "https://statsapi.web.nhl.com/api/v1/people/8479318?expand=person.stats&stats=yearByYear,careerRegularSeason&expand=stats.team&site=en_nhlCA";
      let marner =
        "https://statsapi.web.nhl.com/api/v1/people/8478483?expand=person.stats&stats=yearByYear,careerRegularSeason&expand=stats.team&site=en_nhlCA";
      // Axios to get all api's
      axios
        .all([axios.get(tavares), axios.get(matthews), axios.get(marner)])
        .then(
          axios.spread((tavares, matthews, marner) => {
            console.log(tavares.data.people[0].stats[1].splits[0].stat);
            setData({
              tavares: [tavares.data.people[0]],
              matthews: [matthews.data.people[0]],
              marner: [marner.data.people[0]],
              tavaresFull: [tavares.data.people[0].stats[1].splits[0].stat],
              matthewsFull: [matthews.data.people[0].stats[1].splits[0].stat],
              marnerFull: [marner.data.people[0].stats[1].splits[0].stat]
            });
          })
        );
    };
    fetchData();
  }, []);

  return (
    <>
      <DocumentMeta {...meta}>
        <Router>
          <GlobalStyle />
          <Intro
            main="Maple Leafs API"
            text="Built with React, React Hooks, Styled Components and Axios
                consuming the NHL's REST API."
          />
          <Container>
            <Row>
              <Col lg="12">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={() => (
                      <Dashboard
                        data={data}
                        TavaresImg={TavaresImg}
                        MatthewsImg={MatthewsImg}
                        MarnerImg={MarnerImg}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/tavares"
                    component={() => (
                      <Tavares
                        data={data.tavares}
                        dataFull={data.tavaresFull}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/matthews"
                    component={() => (
                      <Matthews
                        data={data.matthews}
                        dataFull={data.matthewsFull}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/marner"
                    component={() => (
                      <Marner data={data.marner} dataFull={data.marnerFull} />
                    )}
                  />
                </Switch>
              </Col>
            </Row>
          </Container>
        </Router>
      </DocumentMeta>
    </>
  );
}

// Styles

const GlobalStyle = createGlobalStyle`
  body,html {
    background: #eaeaea;
    padding-top: 20px;
    font-family: 'Roboto', sans-serif;
  }
`;

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
