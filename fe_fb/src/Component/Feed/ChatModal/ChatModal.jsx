import React from "react";

class ChatModal extends React.Component {
  render() {
    return (
      <div
        className="modal fade"
        id="singleChat1"
        tabIndex={-1}
        aria-labelledby="singleChat1Label"
        aria-hidden="true"
        data-bs-backdrop="false"
      >
        <div
          className="modal-dialog modal-sm position-absolute bottom-0 end-0 w-17"
          style={{
            transform: "translateX(-80px)"
          }}
        >
          <div className="modal-content border-0 shadow">
            {}
            <div className="modal-header">
              <div
                className="dropdown-item d-flex rounded"
                type="button"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-html="true"
              >
                {}
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/1"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "38px",
                      height: "38px",
                      objectFit: "cover"
                    }}
                  />
                  <span
                    className="          position-absolute          bottom-0          translate-middle          p-1          bg-success          border border-light          rounded-circle        "
                    style={{
                      left: "75%"
                    }}
                  >
                    <span className="visually-hidden">New alerts</span>
                  </span>
                </div>
                {}
                <div>
                  <p className="m-0">
                    Mike <i className="fas fa-angle-down" />
                  </p>
                  <span className="text-muted fs-7">Active Now</span>
                </div>
              </div>
              {}
              <i className="fas fa-video mx-2 text-muted pointer" />
              <i className="fas fa-phone-alt mx-2 text-muted pointer" />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            {}
            <div
              className="modal-body p-0 overflow-auto"
              style={{
                maxHeight: "300px"
              }}
            >
              {}
              <li className="list-group-item border-0 d-flex">
                {}
                <div>
                  <img
                    src="https://source.unsplash.com/random/1"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                {}
                <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
              </li>
              {}
              <li className="list-group-item border-0 d-flex justify-content-end">
                {}
                <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                {}
                <div>
                  <img
                    src="https://source.unsplash.com/collection/happy-people"
                    alt="avatar"
                    className="rounded-circle ms-2"
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover"
                    }}
                  />
                </div>
              </li>
              {}
              <li className="list-group-item border-0 d-flex">
                {}
                <div>
                  <img
                    src="https://source.unsplash.com/random/1"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                {}
                <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
              </li>
              {}
              <li className="list-group-item border-0 d-flex justify-content-end">
                {}
                <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                {}
                <div>
                  <img
                    src="https://source.unsplash.com/collection/happy-people"
                    alt="avatar"
                    className="rounded-circle ms-2"
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover"
                    }}
                  />
                </div>
              </li>
              {}
              <li className="list-group-item border-0 d-flex">
                {}
                <div>
                  <img
                    src="https://source.unsplash.com/random/1"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                {}
                <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
              </li>
              {}
              <li className="list-group-item border-0 d-flex justify-content-end">
                {}
                <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                {}
                <div>
                  <img
                    src="https://source.unsplash.com/collection/happy-people"
                    alt="avatar"
                    className="rounded-circle ms-2"
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover"
                    }}
                  />
                </div>
              </li>
            </div>
            {}
            <div className="modal-footer p-0 m-0 border-0">
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <i className="fas fa-plus-circle mx-1 fs-5 text-muted pointer" />
                  <i className="far fa-file-image mx-1 fs-5 text-muted pointer" />
                  <i className="fas fa-portrait mx-1 fs-5 text-muted pointer" />
                  <i className="fas fa-adjust mx-1 fs-5 text-muted pointer" />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control rounded-pill border-0 bg-gray"
                    placeholder="Aa"
                  />
                </div>
                <div className="d-flex align-items-center mx-2">
                  <i className="fas fa-thumbs-up fs-5 text-muted pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatModal;
