//1st level component
import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            //those props come from NewBoxForm
            height: `${this.props.height}em`,
            width: `${this.props.width}em`,
            backgroundColor: this.props.color,
          }}
        />
        <button onClick={this.props.removeBox}>X</button>
        {/* this props come from BoxList Component */}
      </div>
    );
  }
}
export default Box;
