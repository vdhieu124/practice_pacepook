import React from "react";

class ChatIcon extends React.Component {
  render() {
    return (
      <div
        className="fixed-bottom right-100 p-3"
        style={{
          zIndex: 6,
          left: "initial"
        }}
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#newChat"
      >
        <i className="fas fa-edit bg-white rounded-circle p-3 shadow" />
      </div>
    );
  }
}

export default ChatIcon;
