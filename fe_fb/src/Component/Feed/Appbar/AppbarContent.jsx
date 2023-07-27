import React from "react";
import ContentSearch from "./ContentSearch";
import ContentNav from "./ContentNav";
import ContentMenu from "./ContentMenu";

class AppbarContent extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row align-items-center">
          
          <ContentSearch/>
          
          <ContentNav/>
          
          <ContentMenu/>
        </div>
      </div>
    );
  }
}

export default AppbarContent;
