import React from "react";

class ContentMenu extends React.Component {
  render() {
    return (
      <div className="col d-flex align-items-center justify-content-end">
        {}
        <div className="align-items-center justify-content-center d-none d-xl-flex">
          <img
            src="https://source.unsplash.com/collection/happy-people"
            className="rounded-circle me-2"
            alt="avatar"
            style={{
              width: "38px",
              height: "38px",
              objectFit: "cover"
            }}
          />
          <p className="m-0">John</p>
        </div>
        {}
        <div
          className="          rounded-circle          p-1          bg-gray          d-flex          align-items-center          justify-content-center          mx-2        "
          style={{
            width: "38px",
            height: "38px"
          }}
          type="button"
          id="mainMenu"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-auto-close="outside"
        >
          <i className="fas fa-ellipsis-h" />
        </div>
        {}
        <ul
          className="dropdown-menu border-0 shadow p-3 overflow-auto"
          aria-labelledby="mainMenu"
          style={{
            width: "23em",
            maxHeight: "600px"
          }}
        >
          {}
          <div>
            {}
            <li className="p-1 mx-2">
              <h2>Menu</h2>
            </li>
            {}
            <li className="p-1">
              <div
                className="input-group-text bg-gray border-0 rounded-pill"
                style={{
                  minHeight: "40px",
                  minWidth: "230px"
                }}
              >
                <i className="fas fa-search me-2 text-muted" />
                <input
                  type="text"
                  className="form-control rounded-pill border-0 bg-gray"
                  placeholder="Search Menu"
                />
              </div>
            </li>
            {}
            <h4 className="m-2">Social</h4>
            {}
            <li className="my-2 p-1">
              <a
                href="#"
                className="                text-decoration-none text-dark                d-flex                align-items-center                justify-content-between              "
              >
                <div className="p-2">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Y7r38CcFEw5.png"
                    alt="icon from fb"
                    className="rounded-circle"
                    style={{
                      width: "48px",
                      height: "48px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div>
                  <p className="m-0">Campus</p>
                  <span className="fs-7 text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, commodi.
                  </span>
                </div>
              </a>
            </li>
            {}
            <li className="my-2 p-1">
              <a
                href="#"
                className="                text-decoration-none text-dark                d-flex                align-items-center                justify-content-between              "
              >
                <div className="p-2">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/N7UOh8REweU.png"
                    alt="icon from fb"
                    className="rounded-circle"
                    style={{
                      width: "48px",
                      height: "48px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div>
                  <p className="m-0">Events</p>
                  <span className="fs-7 text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, commodi.
                  </span>
                </div>
              </a>
            </li>
            {}
            <li className="my-2 p-1">
              <a
                href="#"
                className="                text-decoration-none text-dark                d-flex                align-items-center                justify-content-between              "
              >
                <div className="p-2">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png"
                    alt="icon from fb"
                    className="rounded-circle"
                    style={{
                      width: "48px",
                      height: "48px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div>
                  <p className="m-0">Friends</p>
                  <span className="fs-7 text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, commodi.
                  </span>
                </div>
              </a>
            </li>
            {}
            <li className="my-2 p-1">
              <a
                href="#"
                className="                text-decoration-none text-dark                d-flex                align-items-center                justify-content-between              "
              >
                <div className="p-2">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png"
                    alt="icon from fb"
                    className="rounded-circle"
                    style={{
                      width: "48px",
                      height: "48px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div>
                  <p className="m-0">Groups</p>
                  <span className="fs-7 text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, commodi.
                  </span>
                </div>
              </a>
            </li>
            {}
            <li className="my-2 p-1">
              <a
                href="#"
                className="                text-decoration-none text-dark                d-flex                align-items-center                justify-content-between              "
              >
                <div className="p-2">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/hLkEFzsCyXC.png"
                    alt="icon from fb"
                    className="rounded-circle"
                    style={{
                      width: "48px",
                      height: "48px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div>
                  <p className="m-0">News Feed</p>
                  <span className="fs-7 text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, commodi.
                  </span>
                </div>
              </a>
            </li>
            {}
            <li className="my-2 p-1">
              <a
                href="#"
                className="                text-decoration-none text-dark                d-flex                align-items-center                justify-content-between              "
              >
                <div className="p-2">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/0gH3vbvr8Ee.png"
                    alt="icon from fb"
                    className="rounded-circle"
                    style={{
                      width: "48px",
                      height: "48px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div>
                  <p className="m-0">Pages</p>
                  <span className="fs-7 text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, commodi.
                  </span>
                </div>
              </a>
            </li>
            <hr />
            {}
            <h4 className="m-2">Entertainment</h4>
            {}
            <li className="my-2 p-1">
              <a
                href="#"
                className="                text-decoration-none text-dark                d-flex                align-items-center                justify-content-between              "
              >
                <div className="p-2">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Y7r38CcFEw5.png"
                    alt="icon from fb"
                    className="rounded-circle"
                    style={{
                      width: "48px",
                      height: "48px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div>
                  <p className="m-0">Campus</p>
                  <span className="fs-7 text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, commodi.
                  </span>
                </div>
              </a>
            </li>
            {}
            <li className="my-2 p-1">
              <a
                href="#"
                className="                text-decoration-none text-dark                d-flex                align-items-center                justify-content-between              "
              >
                <div className="p-2">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/N7UOh8REweU.png"
                    alt="icon from fb"
                    className="rounded-circle"
                    style={{
                      width: "48px",
                      height: "48px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div>
                  <p className="m-0">Events</p>
                  <span className="fs-7 text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, commodi.
                  </span>
                </div>
              </a>
            </li>
            {}
            <li className="my-2 p-1">
              <a
                href="#"
                className="                text-decoration-none text-dark                d-flex                align-items-center                justify-content-between              "
              >
                <div className="p-2">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png"
                    alt="icon from fb"
                    className="rounded-circle"
                    style={{
                      width: "48px",
                      height: "48px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div>
                  <p className="m-0">Friends</p>
                  <span className="fs-7 text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, commodi.
                  </span>
                </div>
              </a>
            </li>
          </div>
          <hr />
          {}
          <div>
            {}
            <li className="p-1 mx-2">
              <h2>Create</h2>
            </li>
            {}
            <li className="my-2 p-1">
              <a
                href="#"
                className="                text-decoration-none text-dark                d-flex                align-items-center              "
              >
                <div
                  className="                  rounded-circle                  bg-gray                  p-1                  d-flex                  align-items-center                  justify-content-center                  me-3                "
                  style={{
                    width: "38px",
                    height: "38px"
                  }}
                >
                  <i className="fas fa-edit" />
                </div>
                <div>
                  <p className="m-0">Post</p>
                </div>
              </a>
            </li>
            {}
            <li className="my-2 p-1">
              <a
                href="#"
                className="                text-decoration-none text-dark                d-flex                align-items-center              "
              >
                <div
                  className="                  rounded-circle                  bg-gray                  p-1                  d-flex                  align-items-center                  justify-content-center                  me-3                "
                  style={{
                    width: "38px",
                    height: "38px"
                  }}
                >
                  <i className="fas fa-book-open" />
                </div>
                <div>
                  <p className="m-0">Story</p>
                </div>
              </a>
            </li>
            {}
            <li className="my-2 p-1">
              <a
                href="#"
                className="                text-decoration-none text-dark                d-flex                align-items-center              "
              >
                <div
                  className="                  rounded-circle                  bg-gray                  p-1                  d-flex                  align-items-center                  justify-content-center                  me-3                "
                  style={{
                    width: "38px",
                    height: "38px"
                  }}
                >
                  <i className="fas fa-video" />
                </div>
                <div>
                  <p className="m-0">Video</p>
                </div>
              </a>
            </li>
            <hr />
            {}
            <li className="my-2 p-1">
              <a
                href="#"
                className="                text-decoration-none text-dark                d-flex                align-items-center              "
              >
                <div
                  className="                  rounded-circle                  bg-gray                  p-1                  d-flex                  align-items-center                  justify-content-center                  me-3                "
                  style={{
                    width: "38px",
                    height: "38px"
                  }}
                >
                  <i className="fas fa-flag" />
                </div>
                <div>
                  <p className="m-0">Page</p>
                </div>
              </a>
            </li>
            {}
            <li className="my-2 p-1">
              <a
                href="#"
                className="                text-decoration-none text-dark                d-flex                align-items-center              "
              >
                <div
                  className="                  rounded-circle                  bg-gray                  p-1                  d-flex                  align-items-center                  justify-content-center                  me-3                "
                  style={{
                    width: "38px",
                    height: "38px"
                  }}
                >
                  <i className="fas fa-bullhorn" />
                </div>
                <div>
                  <p className="m-0">Add</p>
                </div>
              </a>
            </li>
            {}
            <li className="my-2 p-1">
              <a
                href="#"
                className="                text-decoration-none text-dark                d-flex                align-items-center              "
              >
                <div
                  className="                  rounded-circle                  bg-gray                  p-1                  d-flex                  align-items-center                  justify-content-center                  me-3                "
                  style={{
                    width: "38px",
                    height: "38px"
                  }}
                >
                  <i className="fas fa-users" />
                </div>
                <div>
                  <p className="m-0">Group</p>
                </div>
              </a>
            </li>
            {}
            <li className="my-2 p-1">
              <a
                href="#"
                className="                text-decoration-none text-dark                d-flex                align-items-center              "
              >
                <div
                  className="                  rounded-circle                  bg-gray                  p-1                  d-flex                  align-items-center                  justify-content-center                  me-3                "
                  style={{
                    width: "38px",
                    height: "38px"
                  }}
                >
                  <i className="fas fa-book" />
                </div>
                <div>
                  <p className="m-0">Event</p>
                </div>
              </a>
            </li>
            {}
            <li className="my-2 p-1">
              <a
                href="#"
                className="                text-decoration-none text-dark                d-flex                align-items-center              "
              >
                <div
                  className="                  rounded-circle                  bg-gray                  p-1                  d-flex                  align-items-center                  justify-content-center                  me-3                "
                  style={{
                    width: "38px",
                    height: "38px"
                  }}
                >
                  <i className="fas fa-shopping-basket" />
                </div>
                <div>
                  <p className="m-0">Marketplace Listing</p>
                </div>
              </a>
            </li>
            {}
            <li className="my-2 p-1">
              <a
                href="#"
                className="                text-decoration-none text-dark                d-flex                align-items-center              "
              >
                <div
                  className="                  rounded-circle                  bg-gray                  p-1                  d-flex                  align-items-center                  justify-content-center                  me-3                "
                  style={{
                    width: "38px",
                    height: "38px"
                  }}
                >
                  <i className="fas fa-suitcase" />
                </div>
                <div>
                  <p className="m-0">Job</p>
                </div>
              </a>
            </li>
          </div>
        </ul>
        {}
        <div
          className="          rounded-circle          p-1          bg-gray          d-flex          align-items-center          justify-content-center          mx-2        "
          style={{
            width: "38px",
            height: "38px"
          }}
          type="button"
          id="chatMenu"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-auto-close="outside"
        >
          <i className="fas fa-comment" />
        </div>
        {}
        <ul
          className="dropdown-menu border-0 shadow p-3 overflow-auto"
          aria-labelledby="chatMenu"
          style={{
            width: "23em",
            maxHeight: "600px"
          }}
        >
          {}
          <li className="p-1">
            <div className="d-flex justify-content-between">
              <h2>Message</h2>
              <div>
                {}
                <i
                  className="fas fa-ellipsis-h text-muted mx-2"
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
                    <div className="                      dropdown-item                      d-flex                      align-items-center                      justify-content-between                    ">
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
                    <div className="                      dropdown-item                      d-flex                      align-items-center                      justify-content-between                    ">
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
                    <div className="                      dropdown-item                      d-flex                      align-items-center                      justify-content-between                    ">
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
                    <div className="                      dropdown-item                      d-flex                      align-items-center                      justify-content-between                    ">
                      {}
                      <div className="d-flex align-items-center">
                        <i className="fas fa-toggle-off me-3" />
                        <p className="m-0">Turn Off Active Status</p>
                      </div>
                    </div>
                  </li>
                  {}
                  <li>
                    <div className="                      dropdown-item                      d-flex                      align-items-center                      justify-content-between                    ">
                      {}
                      <div className="d-flex align-items-center">
                        <i className="far fa-comment-alt me-3" />
                        <p className="m-0">Message Request</p>
                      </div>
                    </div>
                  </li>
                  {}
                  <li>
                    <div className="                      dropdown-item                      d-flex                      align-items-center                      justify-content-between                    ">
                      {}
                      <div className="d-flex align-items-center">
                        <i className="fas fa-share-square me-3" />
                        <p className="m-0">Message delivery settings</p>
                      </div>
                    </div>
                  </li>
                  {}
                  <li>
                    <div className="                      dropdown-item                      d-flex                      align-items-center                      justify-content-between                    ">
                      {}
                      <div className="d-flex align-items-center">
                        <i className="fas fa-shield-alt me-3" />
                        <p className="m-0">Block settings</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <i
                  className="fas fa-expand-arrows-alt text-muted mx-2"
                  type="button"
                />
                {}
                <i
                  className="fas fa-edit text-muted mx-2"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#newChat"
                />
              </div>
            </div>
          </li>
          {}
          <li className="p-1">
            <div
              className="input-group-text bg-gray border-0 rounded-pill"
              style={{
                minHeight: "40px",
                minWidth: "230px"
              }}
            >
              <i className="fas fa-search me-2 text-muted" />
              <input
                type="text"
                className="form-control rounded-pill border-0 bg-gray"
                placeholder="Search Messenger"
              />
            </div>
          </li>
          {}
          <li
            className="my-2 p-1"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#singleChat1"
          >
            <div className="d-flex align-items-center justify-content-between">
              {}
              <div className="d-flex align-items-center justify-content-evenly">
                <div className="p-2">
                  <img
                    src="https://source.unsplash.com/random/1"
                    alt="avatar"
                    className="rounded-circle"
                    style={{
                      width: "58px",
                      height: "58px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div>
                  <p className="fs-7 m-0">Mike</p>
                  <span className="fs-7 text-muted">Lorem ipsum • 7d</span>
                </div>
              </div>
              {}
              <div className="p-2">
                <img
                  src="https://source.unsplash.com/random/1"
                  alt="avatar"
                  className="rounded-circle"
                  style={{
                    width: "15px",
                    height: "15px",
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>
          </li>
          {}
          <li
            className="my-2 p-1"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#singleChat2"
          >
            <div className="d-flex align-items-center justify-content-between">
              {}
              <div className="d-flex align-items-center justify-content-evenly">
                <div className="p-2">
                  <img
                    src="https://source.unsplash.com/random/2"
                    alt="avatar"
                    className="rounded-circle"
                    style={{
                      width: "58px",
                      height: "58px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div>
                  <p className="fs-7 m-0">
                    Tuan
                    <span className="fs-7 text-muted">Lorem ipsum • 7d</span>
                  </p>
                </div>
              </div>
              {}
              <div className="p-2">
                <img
                  src="https://source.unsplash.com/random/2"
                  alt="avatar"
                  className="rounded-circle"
                  style={{
                    width: "15px",
                    height: "15px",
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>
          </li>
          {}
          <li
            className="my-2 p-1"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#singleChat3"
          >
            <div className="d-flex align-items-center justify-content-between">
              {}
              <div className="d-flex align-items-center justify-content-evenly">
                <div className="p-2">
                  <img
                    src="https://source.unsplash.com/random/3"
                    alt="avatar"
                    className="rounded-circle"
                    style={{
                      width: "58px",
                      height: "58px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div>
                  <p className="fs-7 m-0">Jerry</p>
                  <span className="fs-7 text-muted">Lorem ipsum • 7d</span>
                </div>
              </div>
              {}
              <div className="p-2">
                <img
                  src="https://source.unsplash.com/random/3"
                  alt="avatar"
                  className="rounded-circle"
                  style={{
                    width: "15px",
                    height: "15px",
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>
          </li>
          {}
          <li
            className="my-2 p-1"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#singleChat4"
          >
            <div className="d-flex align-items-center justify-content-between">
              {}
              <div className="d-flex align-items-center justify-content-evenly">
                <div className="p-2">
                  <img
                    src="https://source.unsplash.com/random/4"
                    alt="avatar"
                    className="rounded-circle"
                    style={{
                      width: "58px",
                      height: "58px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div>
                  <p className="fs-7 m-0">Tony</p>
                  <span className="fs-7 text-muted">Lorem ipsum • 7d</span>
                </div>
              </div>
              {}
              <div className="p-2">
                <img
                  src="https://source.unsplash.com/random/4"
                  alt="avatar"
                  className="rounded-circle"
                  style={{
                    width: "15px",
                    height: "15px",
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>
          </li>
          {}
          <li
            className="my-2 p-1"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#singleChat5"
          >
            <div className="d-flex align-items-center justify-content-between">
              {}
              <div className="d-flex align-items-center justify-content-evenly">
                <div className="p-2">
                  <img
                    src="https://source.unsplash.com/random/5"
                    alt="avatar"
                    className="rounded-circle"
                    style={{
                      width: "58px",
                      height: "58px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div>
                  <p className="fs-7 m-0">Phu</p>
                  <span className="fs-7 text-muted">Lorem ipsum • 7d</span>
                </div>
              </div>
              {}
              <div className="p-2">
                <img
                  src="https://source.unsplash.com/random/5"
                  alt="avatar"
                  className="rounded-circle"
                  style={{
                    width: "15px",
                    height: "15px",
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>
          </li>
          <hr className="m-0" />
          <a href="#" className="text-decoration-none">
            <p className="fw-bold text-center pt-3 m-0">See All in Messenger</p>
          </a>
        </ul>
        {}
        <div
          className="          rounded-circle          p-1          bg-gray          d-flex          align-items-center          justify-content-center          mx-2        "
          style={{
            width: "38px",
            height: "38px"
          }}
          type="button"
          id="notMenu"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-auto-close="outside"
        >
          <i className="fas fa-bell" />
        </div>
        {}
        <ul
          className="dropdown-menu border-0 shadow p-3"
          aria-labelledby="notMenu"
          style={{
            width: "23em",
            maxHeight: "600px",
            overflowY: "auto"
          }}
        >
          {}
          <li className="p-1">
            <div className="d-flex justify-content-between">
              <h2>Notifications</h2>
              <div>
                <i
                  className="                  fas                  fa-ellipsis-h                  pointer                  p-2                  rounded-circle                  bg-gray                "
                  type="button"
                  data-bs-toggle="dropdown"
                />
                <ul className="dropdown-menu">
                  <li
                    className="dropdown-item d-flex align-items-center"
                    type="button"
                  >
                    <i className="fas fa-check me-3 text-muted" />
                    <p className="m-0">Mark all as read</p>
                  </li>
                  <li
                    className="dropdown-item d-flex align-items-center"
                    type="button"
                  >
                    <i className="fas fa-cog me-3 text-muted" />
                    <p className="m-0">Privacy Checkup</p>
                  </li>
                  <li
                    className="dropdown-item d-flex align-items-center"
                    type="button"
                  >
                    <i className="fas fa-desktop me-3 text-muted" />
                    <p className="m-0">Privacy Shortcuts</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex" type="button">
              <p className="rounded-pill bg-gray p-2">All</p>
              <p className="ms-3 rounded-pill bg-primary p-2 text-white">
                Unread
              </p>
            </div>
          </li>
          {}
          <div className="d-flex justify-content-between mx-2">
            <h5>New</h5>
            <a href="#" className="text-decoration-none">
              See All
            </a>
          </div>
          {}
          <li className="my-2 p-1">
            <a
              href="#"
              className="              d-flex              align-items-center              justify-content-evenly              text-decoration-none text-dark            "
            >
              <div className="d-flex align-items-center justify-content-evenly">
                <div className="p-2">
                  <img
                    src="https://source.unsplash.com/random/1"
                    alt="avatar"
                    className="rounded-circle"
                    style={{
                      width: "58px",
                      height: "58px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div>
                  <p className="fs-7 m-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum unde amet at nulla quae porro.
                  </p>
                  <span className="fs-7 text-primary">about an hour ago</span>
                </div>
              </div>
              <i className="fas fa-circle fs-7 text-primary" />
            </a>
          </li>
          {}
          <li className="my-2 p-1">
            <a
              href="#"
              className="              d-flex              align-items-center              justify-content-evenly              text-decoration-none text-dark            "
            >
              <div className="d-flex align-items-center justify-content-evenly">
                <div className="p-2">
                  <img
                    src="https://source.unsplash.com/random/2"
                    alt="avatar"
                    className="rounded-circle"
                    style={{
                      width: "58px",
                      height: "58px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div>
                  <p className="fs-7 m-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum unde amet at nulla quae porro.
                  </p>
                  <span className="fs-7 text-primary">about an hour ago</span>
                </div>
              </div>
              <i className="fas fa-circle fs-7 text-primary" />
            </a>
          </li>
          {}
          <li className="my-2 p-1">
            <a
              href="#"
              className="              d-flex              align-items-center              justify-content-evenly              text-decoration-none text-dark            "
            >
              <div className="d-flex align-items-center justify-content-evenly">
                <div className="p-2">
                  <img
                    src="https://source.unsplash.com/random/3"
                    alt="avatar"
                    className="rounded-circle"
                    style={{
                      width: "58px",
                      height: "58px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div>
                  <p className="fs-7 m-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum unde amet at nulla quae porro.
                  </p>
                  <span className="fs-7 text-primary">about an hour ago</span>
                </div>
              </div>
              <i className="fas fa-circle fs-7 text-primary" />
            </a>
          </li>
          {}
          <li className="my-2 p-1">
            <a
              href="#"
              className="              d-flex              align-items-center              justify-content-evenly              text-decoration-none text-dark            "
            >
              <div className="d-flex align-items-center justify-content-evenly">
                <div className="p-2">
                  <img
                    src="https://source.unsplash.com/random/4"
                    alt="avatar"
                    className="rounded-circle"
                    style={{
                      width: "58px",
                      height: "58px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div>
                  <p className="fs-7 m-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum unde amet at nulla quae porro.
                  </p>
                  <span className="fs-7 text-primary">about an hour ago</span>
                </div>
              </div>
              <i className="fas fa-circle fs-7 text-primary" />
            </a>
          </li>
          {}
          <li className="my-2 p-1">
            <a
              href="#"
              className="              d-flex              align-items-center              justify-content-evenly              text-decoration-none text-dark            "
            >
              <div className="d-flex align-items-center justify-content-evenly">
                <div className="p-2">
                  <img
                    src="https://source.unsplash.com/random/5"
                    alt="avatar"
                    className="rounded-circle"
                    style={{
                      width: "58px",
                      height: "58px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div>
                  <p className="fs-7 m-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum unde amet at nulla quae porro.
                  </p>
                  <span className="fs-7 text-primary">about an hour ago</span>
                </div>
              </div>
              <i className="fas fa-circle fs-7 text-primary" />
            </a>
          </li>
        </ul>
        {}
        <div
          className="          rounded-circle          p-1          bg-gray          d-flex          align-items-center          justify-content-center          mx-2        "
          style={{
            width: "38px",
            height: "38px"
          }}
          type="button"
          id="secondMenu"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-auto-close="outside"
        >
          <i className="fas fa-caret-down" />
        </div>
        {}
        <ul
          className="dropdown-menu border-0 shadow p-3"
          aria-labelledby="secondMenu"
          style={{
            width: "23em"
          }}
        >
          {}
          <li className="dropdown-item p-1 rounded d-flex" type="button">
            <img
              src="https://source.unsplash.com/collection/happy-people"
              alt="avatar"
              className="rounded-circle me-2"
              style={{
                width: "45px",
                height: "45px",
                objectFit: "cover"
              }}
            />
            <div>
              <p className="m-0">John</p>
              <p className="m-0 text-muted">See your profile</p>
            </div>
          </li>
          <hr />
          {}
          <li
            className="dropdown-item p-1 rounded d-flex align-items-center"
            type="button"
          >
            <i className="fas fa-exclamation-circle bg-gray p-2 rounded-circle" />
            <div className="ms-3">
              <p className="m-0">Give Feedback</p>
              <p className="m-0 text-muted fs-7">
                Help us improve the new Flexbook.
              </p>
            </div>
          </li>
          <hr />
          {}
          {}
          <li className="dropdown-item p-1 my-3 rounded" type="button">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="d-flex" data-bs-toggle="dropdown">
                  <i className="fas fa-cog bg-gray p-2 rounded-circle" />
                  <div className="                    ms-3                    d-flex                    justify-content-between                    align-items-center                    w-100                  ">
                    <p className="m-0">Settings & Privacy</p>
                    <i className="fas fa-chevron-right" />
                  </div>
                </div>
                {}
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div
                        className="                        rounded-circle                        p-1                        bg-gray                        d-flex                        align-items-center                        justify-content-center                        me-2                      "
                        style={{
                          width: "38px",
                          height: "38px"
                        }}
                      >
                        <i className="fas fa-cog" />
                      </div>
                      <p className="m-0">Settings</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div
                        className="                        rounded-circle                        p-1                        bg-gray                        d-flex                        align-items-center                        justify-content-center                        me-2                      "
                        style={{
                          width: "38px",
                          height: "38px"
                        }}
                      >
                        <i className="fas fa-lock" />
                      </div>
                      <p className="m-0">Privacy Checkup</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div
                        className="                        rounded-circle                        p-1                        bg-gray                        d-flex                        align-items-center                        justify-content-center                        me-2                      "
                        style={{
                          width: "38px",
                          height: "38px"
                        }}
                      >
                        <i className="fas fa-unlock-alt" />
                      </div>
                      <p className="m-0">Privacy Shortcuts</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div
                        className="                        rounded-circle                        p-1                        bg-gray                        d-flex                        align-items-center                        justify-content-center                        me-2                      "
                        style={{
                          width: "38px",
                          height: "38px"
                        }}
                      >
                        <i className="fas fa-list" />
                      </div>
                      <p className="m-0">Activity Log</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div
                        className="                        rounded-circle                        p-1                        bg-gray                        d-flex                        align-items-center                        justify-content-center                        me-2                      "
                        style={{
                          width: "38px",
                          height: "38px"
                        }}
                      >
                        <i className="fas fa-newspaper" />
                      </div>
                      <p className="m-0">News Feed Preferences</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div
                        className="                        rounded-circle                        p-1                        bg-gray                        d-flex                        align-items-center                        justify-content-center                        me-2                      "
                        style={{
                          width: "38px",
                          height: "38px"
                        }}
                      >
                        <i className="fas fa-globe" />
                      </div>
                      <p className="m-0">Language</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          {}
          <li className="dropdown-item p-1 my-3 rounded" type="button">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="d-flex" data-bs-toggle="dropdown">
                  <i className="                    fas                    fa-question-circle                    bg-gray                    p-2                    rounded-circle                  " />
                  <div className="                    ms-3                    d-flex                    justify-content-between                    align-items-center                    w-100                  ">
                    <p className="m-0">Help & Support</p>
                    <i className="fas fa-chevron-right" />
                  </div>
                </div>
                {}
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div
                        className="                        rounded-circle                        p-1                        bg-gray                        d-flex                        align-items-center                        justify-content-center                        me-2                      "
                        style={{
                          width: "38px",
                          height: "38px"
                        }}
                      >
                        <i className="fas fa-cog" />
                      </div>
                      <p className="m-0">Settings</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div
                        className="                        rounded-circle                        p-1                        bg-gray                        d-flex                        align-items-center                        justify-content-center                        me-2                      "
                        style={{
                          width: "38px",
                          height: "38px"
                        }}
                      >
                        <i className="fas fa-lock" />
                      </div>
                      <p className="m-0">Privacy Checkup</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div
                        className="                        rounded-circle                        p-1                        bg-gray                        d-flex                        align-items-center                        justify-content-center                        me-2                      "
                        style={{
                          width: "38px",
                          height: "38px"
                        }}
                      >
                        <i className="fas fa-unlock-alt" />
                      </div>
                      <p className="m-0">Privacy Shortcuts</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div
                        className="                        rounded-circle                        p-1                        bg-gray                        d-flex                        align-items-center                        justify-content-center                        me-2                      "
                        style={{
                          width: "38px",
                          height: "38px"
                        }}
                      >
                        <i className="fas fa-list" />
                      </div>
                      <p className="m-0">Activity Log</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div
                        className="                        rounded-circle                        p-1                        bg-gray                        d-flex                        align-items-center                        justify-content-center                        me-2                      "
                        style={{
                          width: "38px",
                          height: "38px"
                        }}
                      >
                        <i className="fas fa-newspaper" />
                      </div>
                      <p className="m-0">News Feed Preferences</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div
                        className="                        rounded-circle                        p-1                        bg-gray                        d-flex                        align-items-center                        justify-content-center                        me-2                      "
                        style={{
                          width: "38px",
                          height: "38px"
                        }}
                      >
                        <i className="fas fa-globe" />
                      </div>
                      <p className="m-0">Language</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          {}
          <li className="dropdown-item p-1 my-3 rounded" type="button">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="d-flex" data-bs-toggle="dropdown">
                  <i className="fas fa-moon bg-gray p-2 rounded-circle" />
                  <div className="                    ms-3                    d-flex                    justify-content-between                    align-items-center                    w-100                  ">
                    <p className="m-0">Display & Accessibility</p>
                    <i className="fas fa-chevron-right" />
                  </div>
                </div>
                {}
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div
                        className="                        rounded-circle                        p-1                        bg-gray                        d-flex                        align-items-center                        justify-content-center                        me-2                      "
                        style={{
                          width: "38px",
                          height: "38px"
                        }}
                      >
                        <i className="fas fa-cog" />
                      </div>
                      <p className="m-0">Settings</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div
                        className="                        rounded-circle                        p-1                        bg-gray                        d-flex                        align-items-center                        justify-content-center                        me-2                      "
                        style={{
                          width: "38px",
                          height: "38px"
                        }}
                      >
                        <i className="fas fa-lock" />
                      </div>
                      <p className="m-0">Privacy Checkup</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div
                        className="                        rounded-circle                        p-1                        bg-gray                        d-flex                        align-items-center                        justify-content-center                        me-2                      "
                        style={{
                          width: "38px",
                          height: "38px"
                        }}
                      >
                        <i className="fas fa-unlock-alt" />
                      </div>
                      <p className="m-0">Privacy Shortcuts</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div
                        className="                        rounded-circle                        p-1                        bg-gray                        d-flex                        align-items-center                        justify-content-center                        me-2                      "
                        style={{
                          width: "38px",
                          height: "38px"
                        }}
                      >
                        <i className="fas fa-list" />
                      </div>
                      <p className="m-0">Activity Log</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div
                        className="                        rounded-circle                        p-1                        bg-gray                        d-flex                        align-items-center                        justify-content-center                        me-2                      "
                        style={{
                          width: "38px",
                          height: "38px"
                        }}
                      >
                        <i className="fas fa-newspaper" />
                      </div>
                      <p className="m-0">News Feed Preferences</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div
                        className="                        rounded-circle                        p-1                        bg-gray                        d-flex                        align-items-center                        justify-content-center                        me-2                      "
                        style={{
                          width: "38px",
                          height: "38px"
                        }}
                      >
                        <i className="fas fa-globe" />
                      </div>
                      <p className="m-0">Language</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          {}
          <li className="dropdown-item p-1 my-3 rounded" type="button">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="./index.html"
                  className="d-flex text-decoration-none text-dark"
                >
                  <i className="fas fa-cog bg-gray p-2 rounded-circle" />
                  <div className="                    ms-3                    d-flex                    justify-content-between                    align-items-center                    w-100                  ">
                    <p className="m-0">Log Out</p>
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        {}
      </div>
    );
  }
}

export default ContentMenu;
