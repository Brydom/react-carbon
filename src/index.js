import _ from "lodash";
import React, { Component } from "react";

class Carbon extends Component {
  constructor(props) {
    super(props);

    this.name = this.props.name || "pixelmobco";
    this.serve = this.props.serve || "CK7I42Q7";
    this.script = this.props.script || null;
    this.placement = this.props.placement || "";
  }

  adShowing = () => document.getElementById(`${this.name} #carbonads`) !== null;

  componentDidMount = () => {
    let script = document.createElement("script");
    script.defer = this.script ? true : false;
    script.async = true;
    script.id = this.script ? "" : "_carbonads_js";
    script.type = "text/javascript";
    script.src =
      this.script ||
      `//cdn.carbonads.com/carbon.js?serve=${this.serve}&placement=${
        this.placement
      }`;
    script.addEventListener("load", () => {
      if (!this.adShowing) _.invoke(window._carbonads, "refresh");
    });

    document.querySelector(`#${this.name}`).appendChild(script);
  };

  render() {
    return <div id={this.name} />;
  }
}

export default Carbon;
