import React, { Component } from "react";
import Header from "../components/Header";
import OCGraph from "./OCGraph";
import EpochGraph from "./EpochGraph";
import DurationGraph from "./DurationGraph";

const ExoplanetTransitGraph = props => {
  return (
    <div>
      <Header>Exoplanet Transit Graphs</Header>
      <OCGraph />
      <EpochGraph />
      <DurationGraph />
    </div>
  );
};

export default ExoplanetTransitGraph;
