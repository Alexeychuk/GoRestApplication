import React from "react";
import _ from "lodash";
import "./Graph.css";

class CustomLegend extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const itemComps = _.map(this.props.items, (item, i) => {
      return (
        <span key={i} className="legend-item" style={{ color: item.color }}>
          {item.dataKey}
        </span>
      );
    });
    return (
      <div className="legend-container well well-lg">
        {this.props.legendVisible && (
          <div className="legend-list">{itemComps}</div>
        )}
        <button
          className="glyphicon glyphicon-menu-left"
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}

export default CustomLegend;
