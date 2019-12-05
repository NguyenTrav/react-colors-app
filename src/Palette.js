import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Slider, { Range } from "rc-slider";

import "./Palette.css";
import "rc-slider/assets/index.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }
  render() {
    const { color } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = this.props.palette.colors[
      this.state.level
    ].map(color => <ColorBox background={color.hex} name={color.name} />);
    return (
      <div className="Palette">
        <div className="slider">
          <Slider
            defaultValue={this.state.level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>

        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
