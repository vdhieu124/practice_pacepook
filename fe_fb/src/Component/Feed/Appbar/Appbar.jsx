import React from "react";
import AppbarContent from "./AppbarContent";
import 'bootstrap/dist/css/bootstrap.min.css'


class Appbar extends React.Component {
  render() {
    return (
      <div
        className="bg-white d-flex align-items-center shadow"
        style={{
          minHeight: "56px",
          zIndex: 5
        }}
      >
        <AppbarContent/>
      </div>
    );
  }
}

export default Appbar;
