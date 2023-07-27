import React from "react";
import Sidebar from "./Sidebar";
import Timeline from "./Timeline";
import Chatbar from "./Chatbar";

class Content extends React.Component {
  render() {
    return (
      <div className="row justify-content-evenly">
        {}
        <Sidebar></Sidebar>
        {}
        <Timeline></Timeline>
        {}
        <Chatbar></Chatbar>
      </div>
    );
  }
}

export default Content;
