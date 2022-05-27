import React, { Component } from "react";
import Draggable from "react-draggable";

export default class App extends Component {
  state = {
    disabled: false
  };

  toggleDraggable = () =>
    this.setState(prevState => ({ disabled: !this.state.disabled }));

  render = () => {
    const { disabled } = this.state;
    return (
      <div className="container">
        <Draggable disabled={disabled} bounds="parent">
          <div
            style={{ width: 200 }}
            className={!disabled ? "draggable" : null}
          >
            <h4 style={{ height: 20, userSelect: "none" }}>
              {!disabled && "Drag Me"}
            </h4>
            <textarea disabled={!disabled} className="uk-textarea" />
            <input disabled={!disabled} className="uk-input" />
            <input
              className="uk-checkbox	"
              type="checkbox"
              disabled={!disabled}
            />
            <br />
            <button
              className="uk-button uk-button-primary"
              onClick={this.toggleDraggable}
            >
              {disabled ? "Enable" : "Disable"} Drag
            </button>
          </div>
        </Draggable>
      </div>
    );
  };
}
