import React from "react";
import NewChatContent from "./NewChatContent";

class NewChat extends React.Component {
  render() {
    return (
      <div
        className="modal fade"
        id="newChat"
        tabIndex={-1}
        aria-labelledby="newChatLabel"
        aria-hidden="true"
        data-bs-backdrop="false"
      >
        <NewChatContent/>
      </div>
    );
  }
}

export default NewChat;
