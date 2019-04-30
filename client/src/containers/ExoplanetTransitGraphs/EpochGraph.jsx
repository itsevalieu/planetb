import React, { Component } from "react";
import "react-vis/dist/style.css";
import { XYPlot, XAxis, YAxis, MarkSeries } from "react-vis";

const EpochGraph = props => {
  return (
    <XYPlot width={900} height={300}>
      <XAxis />
      <YAxis />
      <MarkSeries data={[{ x: 1, y: 4 }, { x: 5, y: 2 }, { x: 15, y: 6 }]} />
    </XYPlot>
  );
};
export default EpochGraph;
