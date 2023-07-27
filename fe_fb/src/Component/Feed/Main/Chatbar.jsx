import React from "react";

class Chatbar extends React.Component {
  render() {
    return (
      <div className="col-12 col-lg-3">
        <div
          className="            d-none d-xxl-block            h-100             end-0            overflow-hidden            scrollbar          "
          style={{
            maxWidth: "360px",
            width: "100%",
            zIndex: 4,
            paddingTop: "56px",
            left: "initial !important"
          }}
        >
          <div className="p-3 mt-4">
            {}
            <h5 className="text-muted">Sponsored</h5>
            {}
            <li className="dropdown-item my-2 d-flex justify-content-between">
              {}
              <a
                href="#"
                className="                  d-flex                  align-items-center                  text-decoration-none                  link-dark                "
              >
                <img
                  src="https://source.unsplash.com/random/1"
                  alt="ads"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover"
                  }}
                  className="rounded me-3"
                />
                <div>
                  <p className="m-0">Lorem ipsum</p>
                  <span className="text-muted fs-7">loremipsum.com</span>
                </div>
              </a>
              {}
              <div
                className="                  rounded-circle                  p-1                  bg-white                  d-flex                  align-items-center                  justify-content-center                  mx-2                  sponsor-icon                  nav-item                "
                type="button"
                style={{
                  width: "38px",
                  height: "38px"
                }}
              >
                <i
                  className="fas fa-ellipsis-h text-muted p-2"
                  data-bs-toggle="dropdown"
                />
                {}
                <ul className="dropdown-menu">
                  {}
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="                        d-flex                        align-items-center                        text-decoration-none text-dark                      "
                    >
                      <i className="far fa-window-close" />
                      <div className="ms-3">
                        <p className="m-0">Hide Ad</p>
                        <span className="text-muted fs-7">
                          Never see this add again.
                        </span>
                      </div>
                    </a>
                  </li>
                  {}
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="                        d-flex                        align-items-center                        text-decoration-none text-dark                      "
                    >
                      <i className="fas fa-exclamation-triangle" />
                      <div className="ms-3">
                        <p className="m-0">Report Ad</p>
                        <span className="text-muted fs-7">
                          Tell us a problem with this add.
                        </span>
                      </div>
                    </a>
                  </li>
                  {}
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="                        d-flex                        align-items-center                        text-decoration-none text-dark                      "
                    >
                      <i className="fas fa-info-circle" />
                      <div className="ms-3">
                        <p className="m-0">Why am I seeing this ad?</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {}
            <li className="dropdown-item my-2 d-flex justify-content-between">
              {}
              <a
                href="#"
                className="                  d-flex                  align-items-center                  text-decoration-none                  link-dark                "
              >
                <img
                  src="https://source.unsplash.com/random/2"
                  alt="ads"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover"
                  }}
                  className="rounded me-3"
                />
                <div>
                  <p className="m-0">Lorem ipsum</p>
                  <span className="text-muted fs-7">loremipsum.com</span>
                </div>
              </a>
              {}
              <div
                className="                  rounded-circle                  p-1                  bg-white                  d-flex                  align-items-center                  justify-content-center                  mx-2                  sponsor-icon                  nav-item                "
                type="button"
                style={{
                  width: "38px",
                  height: "38px"
                }}
              >
                <i
                  className="fas fa-ellipsis-h text-muted p-2"
                  data-bs-toggle="dropdown"
                />
                {}
                <ul className="dropdown-menu">
                  {}
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="                        d-flex                        align-items-center                        text-decoration-none text-dark                      "
                    >
                      <i className="far fa-window-close" />
                      <div className="ms-3">
                        <p className="m-0">Hide Ad</p>
                        <span className="text-muted fs-7">
                          Never see this add again.
                        </span>
                      </div>
                    </a>
                  </li>
                  {}
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="                        d-flex                        align-items-center                        text-decoration-none text-dark                      "
                    >
                      <i className="fas fa-exclamation-triangle" />
                      <div className="ms-3">
                        <p className="m-0">Report Ad</p>
                        <span className="text-muted fs-7">
                          Tell us a problem with this add.
                        </span>
                      </div>
                    </a>
                  </li>
                  {}
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="                        d-flex                        align-items-center                        text-decoration-none text-dark                      "
                    >
                      <i className="fas fa-info-circle" />
                      <div className="ms-3">
                        <p className="m-0">Why am I seeing this ad?</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {}
            <hr className="m-0" />
            <div className="my-3 d-flex justify-content-between align-items-center">
              <p className="text-muted fs-5 m-0">Contacts</p>
              {}
              <div className="text-muted">
                {}
                <i
                  className="fas fa-video mx-2 pointer"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#videoRoomD"
                />
                {}
                <div
                  className="modal fade"
                  id="videoRoomD"
                  tabIndex={-1}
                  aria-labelledby="videoRoomDLabel"
                  aria-hidden="true"
                  data-bs-backdrop="false"
                >
                  <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content bg-dark">
                      {}
                      <div className="modal-header border-0">
                        <button
                          type="button"
                          className="btn-close btn-close-white"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      {}
                      <div
                        className="                          modal-body                          d-flex                          flex-column                          align-items-center                          justify-content-center                        "
                        style={{
                          minHeight: "400px"
                        }}
                      >
                        <i className="fas fa-video fs-0" />
                        <h3 className="text-white">
                          Schedule A Room For Later
                        </h3>
                        <p className="text-white text-center w-50 mx-auto">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ut deserunt alias laudantium itaque eius enim
                          natus culpa eligendi consectetur maiores!
                        </p>
                        <button className="btn btn-lg btn-primary rounded-pill">
                          Schedule Room
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {}
                <i
                  className="fas fa-search mx-2 pointer"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#newChat"
                />
                {}
                <i
                  className="fas fa-ellipsis-h pointer text-muted mx-2"
                  type="button"
                  data-bs-toggle="dropdown"
                />
                {}
                <ul
                  className="dropdown-menu shadow"
                  style={{
                    width: "18em"
                  }}
                >
                  {}
                  <div className="p-2">
                    <h5>Chat Settings</h5>
                    <span className="text-muted fs-7">
                      Customize your Messenger experience.
                    </span>
                  </div>
                  <hr />
                  {}
                  <li>
                    <div className="                        dropdown-item                        d-flex                        align-items-center                        justify-content-between                      ">
                      {}
                      <div className="d-flex align-items-center">
                        <i className="fas fa-phone-alt me-3" />
                        <p className="m-0">Incoming call sounds</p>
                      </div>
                      {}
                      <div className="form-check form-switch m-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
                  </li>
                  {}
                  <li>
                    <div className="                        dropdown-item                        d-flex                        align-items-center                        justify-content-between                      ">
                      {}
                      <div className="d-flex align-items-center">
                        <i className="fas fa-volume-off me-4 fs-4" />
                        <p className="m-0">Message sounds</p>
                      </div>
                      {}
                      <div className="form-check form-switch m-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
                  </li>
                  {}
                  <li>
                    <div className="                        dropdown-item                        d-flex                        align-items-center                        justify-content-between                      ">
                      {}
                      <div className="d-flex align-items-center">
                        <i className="fas fa-spinner me-3" />
                        <p className="m-0">Pop-up new messages</p>
                      </div>
                      {}
                      <div className="form-check form-switch m-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
                    <span className="ms-5 text-muted fs-7">
                      Automatically open new messages.
                    </span>
                  </li>
                  <hr className="m-0" />
                  {}
                  <li>
                    <div className="                        dropdown-item                        d-flex                        align-items-center                        justify-content-between                      ">
                      {}
                      <div className="d-flex align-items-center">
                        <i className="fas fa-toggle-off me-3" />
                        <p className="m-0">Turn Off Active Status</p>
                      </div>
                    </div>
                  </li>
                  {}
                  <li>
                    <div className="                        dropdown-item                        d-flex                        align-items-center                        justify-content-between                      ">
                      {}
                      <div className="d-flex align-items-center">
                        <i className="far fa-comment-alt me-3" />
                        <p className="m-0">Message Request</p>
                      </div>
                    </div>
                  </li>
                  {}
                  <li>
                    <div className="                        dropdown-item                        d-flex                        align-items-center                        justify-content-between                      ">
                      {}
                      <div className="d-flex align-items-center">
                        <i className="fas fa-share-square me-3" />
                        <p className="m-0">Message delivery settings</p>
                      </div>
                    </div>
                  </li>
                  {}
                  <li>
                    <div className="                        dropdown-item                        d-flex                        align-items-center                        justify-content-between                      ">
                      {}
                      <div className="d-flex align-items-center">
                        <i className="fas fa-shield-alt me-3" />
                        <p className="m-0">Block settings</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat1"
            >
              {}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/4"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "38px",
                      height: "38px",
                      objectFit: "cover"
                    }}
                  />
                  <span
                    className="                      position-absolute                      bottom-0                      translate-middle                      border border-light                      rounded-circle                      bg-success                      p-1                    "
                    style={{
                      left: "75%"
                    }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Mike</p>
              </div>
            </li>
            {}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat2"
            >
              {}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/2"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "38px",
                      height: "38px",
                      objectFit: "cover"
                    }}
                  />
                  <span
                    className="                      position-absolute                      bottom-0                      translate-middle                      border border-light                      rounded-circle                      bg-success                      p-1                    "
                    style={{
                      left: "75%"
                    }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Tuan</p>
              </div>
            </li>
            {}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat3"
            >
              {}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/3"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "38px",
                      height: "38px",
                      objectFit: "cover"
                    }}
                  />
                  <span
                    className="                      position-absolute                      bottom-0                      translate-middle                      border border-light                      rounded-circle                      bg-success                      p-1                    "
                    style={{
                      left: "75%"
                    }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Jerry</p>
              </div>
            </li>
            {}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat4"
            >
              {}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/4"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "38px",
                      height: "38px",
                      objectFit: "cover"
                    }}
                  />
                  <span
                    className="                      position-absolute                      bottom-0                      translate-middle                      border border-light                      rounded-circle                      bg-success                      p-1                    "
                    style={{
                      left: "75%"
                    }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Tony</p>
              </div>
            </li>
            {}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat5"
            >
              {}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/5"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "38px",
                      height: "38px",
                      objectFit: "cover"
                    }}
                  />
                  <span
                    className="                      position-absolute                      bottom-0                      translate-middle                      border border-light                      rounded-circle                      bg-success                      p-1                    "
                    style={{
                      left: "75%"
                    }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Phu</p>
              </div>
            </li>
            {}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat1"
            >
              {}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/4"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "38px",
                      height: "38px",
                      objectFit: "cover"
                    }}
                  />
                  <span
                    className="                      position-absolute                      bottom-0                      translate-middle                      border border-light                      rounded-circle                      bg-success                      p-1                    "
                    style={{
                      left: "75%"
                    }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Mike</p>
              </div>
            </li>
            {}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat2"
            >
              {}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/2"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "38px",
                      height: "38px",
                      objectFit: "cover"
                    }}
                  />
                  <span
                    className="                      position-absolute                      bottom-0                      translate-middle                      border border-light                      rounded-circle                      bg-success                      p-1                    "
                    style={{
                      left: "75%"
                    }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Tuan</p>
              </div>
            </li>
            {}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat3"
            >
              {}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/3"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "38px",
                      height: "38px",
                      objectFit: "cover"
                    }}
                  />
                  <span
                    className="                      position-absolute                      bottom-0                      translate-middle                      border border-light                      rounded-circle                      bg-success                      p-1                    "
                    style={{
                      left: "75%"
                    }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Jerry</p>
              </div>
            </li>
            {}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat4"
            >
              {}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/4"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "38px",
                      height: "38px",
                      objectFit: "cover"
                    }}
                  />
                  <span
                    className="                      position-absolute                      bottom-0                      translate-middle                      border border-light                      rounded-circle                      bg-success                      p-1                    "
                    style={{
                      left: "75%"
                    }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Tony</p>
              </div>
            </li>
            {}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat5"
            >
              {}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/5"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "38px",
                      height: "38px",
                      objectFit: "cover"
                    }}
                  />
                  <span
                    className="                      position-absolute                      bottom-0                      translate-middle                      border border-light                      rounded-circle                      bg-success                      p-1                    "
                    style={{
                      left: "75%"
                    }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Phu</p>
              </div>
            </li>
            {}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat1"
            >
              {}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/4"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "38px",
                      height: "38px",
                      objectFit: "cover"
                    }}
                  />
                  <span
                    className="                      position-absolute                      bottom-0                      translate-middle                      border border-light                      rounded-circle                      bg-success                      p-1                    "
                    style={{
                      left: "75%"
                    }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Mike</p>
              </div>
            </li>
            {}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat2"
            >
              {}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/2"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "38px",
                      height: "38px",
                      objectFit: "cover"
                    }}
                  />
                  <span
                    className="                      position-absolute                      bottom-0                      translate-middle                      border border-light                      rounded-circle                      bg-success                      p-1                    "
                    style={{
                      left: "75%"
                    }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Tuan</p>
              </div>
            </li>
            {}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat3"
            >
              {}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/3"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "38px",
                      height: "38px",
                      objectFit: "cover"
                    }}
                  />
                  <span
                    className="                      position-absolute                      bottom-0                      translate-middle                      border border-light                      rounded-circle                      bg-success                      p-1                    "
                    style={{
                      left: "75%"
                    }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Jerry</p>
              </div>
            </li>
            {}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat4"
            >
              {}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/4"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "38px",
                      height: "38px",
                      objectFit: "cover"
                    }}
                  />
                  <span
                    className="                      position-absolute                      bottom-0                      translate-middle                      border border-light                      rounded-circle                      bg-success                      p-1                    "
                    style={{
                      left: "75%"
                    }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Tony</p>
              </div>
            </li>
            {}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat5"
            >
              {}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/5"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "38px",
                      height: "38px",
                      objectFit: "cover"
                    }}
                  />
                  <span
                    className="                      position-absolute                      bottom-0                      translate-middle                      border border-light                      rounded-circle                      bg-success                      p-1                    "
                    style={{
                      left: "75%"
                    }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Phu</p>
              </div>
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default Chatbar;
