import React from "react";
import CustomLegend from "./CustomLegend";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Day 1",
    "Long Legend Key Number One": 4000,
    "Long Legend Key Number Two": 2400,
    amt: 2400
  },
  {
    name: "Day 2",
    "Long Legend Key Number One": 3000,
    "Long Legend Key Number Two": 1398,
    amt: 2210
  },
  {
    name: "Day 3",
    "Long Legend Key Number One": 2000,
    "Long Legend Key Number Two": 9800,
    amt: 2290
  },
  {
    name: "Day 4",
    "Long Legend Key Number One": 2780,
    "Long Legend Key Number Two": 3908,
    amt: 2000
  },
  {
    name: "Day 5",
    "Long Legend Key Number One": 1890,
    "Long Legend Key Number Two": 4800,
    amt: 2181
  },
  {
    name: "Day 6",
    "Long Legend Key Number One": 2390,
    "Long Legend Key Number Two": 3800,
    amt: 2500
  },
  {
    name: "Day 7",
    "Long Legend Key Number One": 3490,
    "Long Legend Key Number Two": 4300,
    amt: 2100
  }
];

const legendData = [
  { dataKey: "Long Legend Key Number One", color: "#8884d8" },
  { dataKey: "Long Legend Key Number Two", color: "#82ca9d" }
];

const SampleChart = props => {
  return (
    <ResponsiveContainer width="100%" height="100%" className={props.className}>
      <LineChart
        data={props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="Long Legend Key Number One"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="Long Legend Key Number Two"
          stroke="#82ca9d"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

const initialState = { legendVisible: true };

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick() {
    this.setState({ legendVisible: !this.state.legendVisible });
  }
  render() {
    return (
      <div
        className="chart-container"
        style={{
          gridTemplateColumns: this.state.legendVisible
            ? "80% 1fr"
            : "1fr min-content",
        gridTemplateRows: '400px'
        }}
      >
        <SampleChart className="chart-area" data={data} />
        <CustomLegend
          items={legendData}
          onClick={this.handleButtonClick}
          legendVisible={this.state.legendVisible}
        />
      </div>
    );
  }
}

export default Graph;
