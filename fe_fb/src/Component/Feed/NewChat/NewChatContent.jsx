import React from "react";

class NewChatContent extends React.Component {
  render() {
    return (
      <div
        className="    modal-dialog modal-sm    position-absolute    bottom-0    end-0    w-75    shadow  "
        style={{
          transform: "translateX(-80px)"
        }}
      >
        <div className="modal-content border-0">
          {}
          <div className="modal-header align-items-start">
            <div>
              <h6 className="modal-title text-dark mb-2" id="newChat1Label">
                New Message
              </h6>
              <label className="text-dark">To:</label>
              <input type="text" className="border-0" />
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          {}
          <div className="modal-body shadow m-0 chat-border">
            <p className="m-0 text-primary ms-4">Suggested</p>
          </div>
          {}
          <div
            className="modal-footer border-0"
            style={{
              minHeight: "300px"
            }}
          />
        </div>
      </div>
    );
  }
}

export default NewChatContent;
