import React from "react";

class Timeline extends React.Component {
  render() {
    return (
      <div className="col-12 col-lg-6 pb-5">
        <div
          className="d-flex flex-column justify-content-center w-100 mx-auto"
          style={{
            paddingTop: "56px",
            maxWidth: "680px"
          }}
        >
          {}
          <div className="mt-5 d-flex justify-content-between position-relative">
            {}
            <div
              className="mx-1 bg-white rounded story"
              type="button"
              style={{
                width: "6em",
                height: "190px"
              }}
            >
              <img
                src="https://source.unsplash.com/collection/happy-people"
                className="card-img-top"
                alt="story posts"
                style={{
                  minHeight: "125px",
                  objectFit: "cover"
                }}
              />
              <div
                className="                  d-flex                  align-items-center                  justify-content-center                  position-relative                "
                style={{
                  minHeight: "65px"
                }}
              >
                <p className="mb-0 text-center fs-7 fw-bold">Create Story</p>
                <div className="position-absolute top-0 start-50 translate-middle">
                  <i className="                      fas                      fa-plus-circle                      fs-3                      text-primary                      bg-white                      p-1                      rounded-circle                    " />
                </div>
              </div>
            </div>
            {}
            <div
              className="rounded mx-1 story"
              type="button"
              style={{
                width: "6em",
                height: "190px"
              }}
            >
              <img
                src="https://source.unsplash.com/random/2"
                className="card-img-top rounded"
                alt="story posts"
                style={{
                  minHeight: "190px",
                  objectFit: "cover"
                }}
              />
            </div>
            {}
            <div
              className="rounded mx-1 story"
              type="button"
              style={{
                width: "6em",
                height: "190px"
              }}
            >
              <img
                src="https://source.unsplash.com/random/3"
                className="card-img-top rounded"
                alt="story posts"
                style={{
                  minHeight: "190px",
                  objectFit: "cover"
                }}
              />
            </div>
            {}
            <div
              className="rounded mx-1 story"
              type="button"
              style={{
                width: "6em",
                height: "190px"
              }}
            >
              <img
                src="https://source.unsplash.com/random/4"
                className="card-img-top rounded"
                alt="story posts"
                style={{
                  minHeight: "190px",
                  objectFit: "cover"
                }}
              />
            </div>
            {}
            <div
              className="d-none d-lg-block rounded mx-1 story"
              type="button"
              style={{
                width: "6em",
                height: "190px"
              }}
            >
              <img
                src="https://source.unsplash.com/random/5"
                className="card-img-top rounded"
                alt="story posts"
                style={{
                  minHeight: "190px",
                  objectFit: "cover"
                }}
              />
            </div>
            {}
            <div
              className="d-none d-lg-block rounded mx-1 story"
              type="button"
              style={{
                width: "6em",
                height: "190px"
              }}
            >
              <img
                src="https://source.unsplash.com/random/6"
                className="card-img-top rounded"
                alt="story posts"
                style={{
                  minHeight: "190px",
                  objectFit: "cover"
                }}
              />
            </div>
            {}
            <div className="                position-absolute                top-50                start-100                translate-middle                pointer                d-none d-lg-block              ">
              <i className="                  fas                  fa-arrow-right                  p-3                  border                  text-muted                  bg-white                  rounded-circle                " />
            </div>
          </div>
          {}
          <div className="bg-white p-3 mt-3 rounded border shadow">
            {}
            <div className="d-flex" type="button">
              <div className="p-1">
                <img
                  src="https://source.unsplash.com/collection/happy-people"
                  alt="avatar"
                  className="rounded-circle me-2"
                  style={{
                    width: "38px",
                    height: "38px",
                    objectFit: "cover"
                  }}
                />
              </div>
              <input
                type="text"
                className="form-control rounded-pill border-0 bg-gray pointer"
                disabled
                placeholder="What's on your mind, John?"
                data-bs-toggle="modal"
                data-bs-target="#createModal"
              />
            </div>
            {}
            <div
              className="modal fade"
              id="createModal"
              tabIndex={-1}
              aria-labelledby="createModalLabel"
              aria-hidden="true"
              data-bs-backdrop="false"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  {}
                  <div className="modal-header align-items-center">
                    <h5
                      className="text-dark text-center w-100 m-0"
                      id="exampleModalLabel"
                    >
                      Create Post
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  {}
                  <div className="modal-body">
                    <div className="my-1 p-1">
                      <div className="d-flex flex-column">
                        {}
                        <div className="d-flex align-items-center">
                          <div className="p-2">
                            <img
                              src="https://source.unsplash.com/collection/happy-people"
                              alt="from fb"
                              className="rounded-circle"
                              style={{
                                width: "38px",
                                height: "38px",
                                objectFit: "cover"
                              }}
                            />
                          </div>
                          <div>
                            <p className="m-0 fw-bold">John</p>
                            <select
                              className="form-select border-0 bg-gray w-75 fs-7"
                              aria-label="Default select example"
                            >
                              <option selected value={1}>
                                Public
                              </option>
                              <option value={2}>Pin To Top</option>
                              <option value={3}>Hide</option>
                            </select>
                          </div>
                        </div>
                        {}
                        <div>
                          <textarea
                            cols={30}
                            rows={5}
                            className="form-control border-0"
                            defaultValue={""}
                          />
                        </div>
                        {}
                        <div className="                            d-flex                            justify-content-between                            align-items-center                          ">
                          <img
                            src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
                            className="pointer"
                            alt="fb text"
                            style={{
                              width: "30px",
                              height: "30px",
                              objectFit: "cover"
                            }}
                          />
                          <i className="far fa-laugh-wink fs-5 text-muted pointer" />
                        </div>
                        {}
                        <div className="                            d-flex                            justify-content-between                            border border-1 border-light                            rounded                            p-3                            mt-3                          ">
                          <p className="m-0">Add to your post</p>
                          <div>
                            <i className="                                fas                                fa-images                                fs-5                                text-success                                pointer                                mx-1                              " />
                            <i className="                                fas                                fa-user-check                                fs-5                                text-primary                                pointer                                mx-1                              " />
                            <i className="                                far                                fa-smile                                fs-5                                text-warning                                pointer                                mx-1                              " />
                            <i className="                                fas                                fa-map-marker-alt                                fs-5                                text-info                                pointer                                mx-1                              " />
                            <i className="                                fas                                fa-microphone                                fs-5                                text-danger                                pointer                                mx-1                              " />
                            <i className="                                fas                                fa-ellipsis-h                                fs-5                                text-muted                                pointer                                mx-1                              " />
                          </div>
                        </div>
                      </div>
                    </div>
                    {}
                  </div>
                  {}
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary w-100">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            {}
            <div className="d-flex flex-column flex-lg-row mt-3">
              {}
              <div
                className="                  dropdown-item                  rounded                  d-flex                  align-items-center                  justify-content-center                "
                type="button"
              >
                <i className="fas fa-video me-2 text-danger" />
                <p className="m-0 text-muted">Live Video</p>
              </div>
              {}
              <div
                className="                  dropdown-item                  rounded                  d-flex                  align-items-center                  justify-content-center                "
                type="button"
              >
                <i className="fas fa-photo-video me-2 text-success" />
                <p className="m-0 text-muted">Photo/Video</p>
              </div>
              {}
              <div
                className="                  dropdown-item                  rounded                  d-flex                  align-items-center                  justify-content-center                "
                type="button"
              >
                <i className="fas fa-smile me-2 text-warning" />
                <p className="m-0 text-muted">Feeling/Activity</p>
              </div>
            </div>
          </div>
          {}
          <div className="              bg-white              p-3              mt-3              rounded              border              shadow              d-flex              justify-content-between              position-relative            ">
            {}
            <div>
              <button className="btn rounded-pill btn-info">
                <i className="fas fa-video me-3" />
                Create Room
              </button>
            </div>
            {}
            <div className="d-xxl-none">
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
            </div>
            {}
            <div
              className="d-none d-xxl-block"
              style={{
                maxWidth: "450px"
              }}
            >
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
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
                    <img
                      src="https://source.unsplash.com/random/6"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "cover"
                      }}
                    />
                    <img
                      src="https://source.unsplash.com/random/7"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "cover"
                      }}
                    />
                    <img
                      src="https://source.unsplash.com/random/8"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "cover"
                      }}
                    />
                    <img
                      src="https://source.unsplash.com/random/9"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "cover"
                      }}
                    />
                  </div>
                  <div className="carousel-item">
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
                    <img
                      src="https://source.unsplash.com/random/6"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "cover"
                      }}
                    />
                    <img
                      src="https://source.unsplash.com/random/7"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "cover"
                      }}
                    />
                    <img
                      src="https://source.unsplash.com/random/8"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "cover"
                      }}
                    />
                    <img
                      src="https://source.unsplash.com/random/9"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "cover"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {}
            <div
              className="                position-absolute                start-0                top-50                translate-middle                d-none d-xxl-block              "
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <div
                className="                  p-2                  bg-white                  border                  rounded-circle                  d-flex                  justify-content-center                  align-items-center                  pointer                  story                "
                style={{
                  width: "30px",
                  height: "30px"
                }}
              >
                <i className="fas fa-chevron-left text-muted" />
              </div>
            </div>
            <div
              className="                position-absolute                start-100                top-50                translate-middle                d-none d-xxl-block              "
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <div
                className="                  p-2                  bg-white                  border                  rounded-circle                  d-flex                  justify-content-center                  align-items-center                  pointer                  story                "
                style={{
                  width: "30px",
                  height: "30px"
                }}
              >
                <i className="fas fa-chevron-right text-muted" />
              </div>
            </div>
          </div>
          {}
          {}
          <div className="bg-white p-4 rounded shadow mt-3">
            {}
            <div className="d-flex justify-content-between">
              {}
              <div className="d-flex">
                <img
                  src="https://source.unsplash.com/collection/happy-people"
                  alt="avatar"
                  className="rounded-circle me-2"
                  style={{
                    width: "38px",
                    height: "38px",
                    objectFit: "cover"
                  }}
                />
                <div>
                  <p className="m-0 fw-bold">John</p>
                  <span className="text-muted fs-7">July 17 at 1:23 pm</span>
                </div>
              </div>
              {}
              <i
                className="fas fa-ellipsis-h"
                type="button"
                id="post1Menu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              {}
              <ul
                className="dropdown-menu border-0 shadow"
                aria-labelledby="post1Menu"
              >
                <li className="d-flex align-items-center">
                  <a
                    className="                      dropdown-item                      d-flex                      justify-content-around                      align-items-center                      fs-7                    "
                    href="#"
                  >
                    Edit Post
                  </a>
                </li>
                <li className="d-flex align-items-center">
                  <a
                    className="                      dropdown-item                      d-flex                      justify-content-around                      align-items-center                      fs-7                    "
                    href="#"
                  >
                    Delete Post
                  </a>
                </li>
              </ul>
            </div>
            {}
            <div className="mt-3">
              {}
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                  fuga incidunt consequatur tenetur doloremque officia corrupti
                  provident tempore vitae labore?
                </p>
                <img
                  src="https://source.unsplash.com/random/12"
                  alt="post image"
                  className="img-fluid rounded"
                />
              </div>
              {}
              <div className="post__comment mt-3 position-relative">
                {}
                <div
                  className="                    d-flex                    align-items-center                    top-0                    start-0                    position-absolute                  "
                  style={{
                    height: "50px",
                    zIndex: 5
                  }}
                >
                  <div className="me-2">
                    <i className="text-primary fas fa-thumbs-up" />
                    <i className="text-danger fab fa-gratipay" />
                    <i className="text-warning fas fa-grin-squint" />
                  </div>
                  <p className="m-0 text-muted fs-7">Phu, Tuan, and 3 others</p>
                </div>
                {}
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item border-0">
                    {}
                    <h2 className="accordion-header" id="headingTwo">
                      <div
                        className="                          accordion-button                          collapsed                          pointer                          d-flex                          justify-content-end                        "
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsePost1"
                        aria-expanded="false"
                        aria-controls="collapsePost1"
                      >
                        <p className="m-0">2 Comments</p>
                      </div>
                    </h2>
                    <hr />
                    {}
                    <div className="d-flex justify-content-around">
                      <div className="                          dropdown-item                          rounded                          d-flex                          justify-content-center                          align-items-center                          pointer                          text-muted                          p-1                        ">
                        <i className="fas fa-thumbs-up me-3" />
                        <p className="m-0">Like</p>
                      </div>
                      <div
                        className="                          dropdown-item                          rounded                          d-flex                          justify-content-center                          align-items-center                          pointer                          text-muted                          p-1                        "
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsePost1"
                        aria-expanded="false"
                        aria-controls="collapsePost1"
                      >
                        <i className="fas fa-comment-alt me-3" />
                        <p className="m-0">Comment</p>
                      </div>
                    </div>
                    {}
                    <div
                      id="collapsePost1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <hr />
                      <div className="accordion-body">
                        {}
                        <div className="d-flex align-items-center my-1">
                          {}
                          <img
                            src="https://source.unsplash.com/collection/happy-people"
                            alt="avatar"
                            className="rounded-circle me-2"
                            style={{
                              width: "38px",
                              height: "38px",
                              objectFit: "cover"
                            }}
                          />
                          {}
                          <div className="p-3 rounded comment__input w-100">
                            {}
                            <div className="d-flex justify-content-end">
                              {}
                              <i
                                className="fas fa-ellipsis-h text-blue pointer"
                                id="post1CommentMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              />
                              {}
                              <ul
                                className="dropdown-menu border-0 shadow"
                                aria-labelledby="post1CommentMenuButton"
                              >
                                <li className="d-flex align-items-center">
                                  <a
                                    className="                                      dropdown-item                                      d-flex                                      justify-content-around                                      align-items-center                                      fs-7                                    "
                                    href="#"
                                  >
                                    Edit Comment
                                  </a>
                                </li>
                                <li className="d-flex align-items-center">
                                  <a
                                    className="                                      dropdown-item                                      d-flex                                      justify-content-around                                      align-items-center                                      fs-7                                    "
                                    href="#"
                                  >
                                    Delete Comment
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fw-bold m-0">John</p>
                            <p className="m-0 fs-7 bg-gray p-2 rounded">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </div>
                        {}
                        <div className="d-flex align-items-center my-1">
                          {}
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
                          {}
                          <div className="p-3 rounded comment__input w-100">
                            <p className="fw-bold m-0">Jerry</p>
                            <p className="m-0 fs-7 bg-gray p-2 rounded">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </div>
                        {}
                        <form className="d-flex my-1">
                          {}
                          <div>
                            <img
                              src="https://source.unsplash.com/collection/happy-people"
                              alt="avatar"
                              className="rounded-circle me-2"
                              style={{
                                width: "38px",
                                height: "38px",
                                objectFit: "cover"
                              }}
                            />
                          </div>
                          {}
                          <input
                            type="text"
                            className="form-control border-0 rounded-pill bg-gray"
                            placeholder="Write a comment"
                          />
                        </form>
                        {}
                      </div>
                    </div>
                  </div>
                </div>
                {}
              </div>
            </div>
          </div>
          {}
          <div className="bg-white p-4 rounded shadow mt-3">
            {}
            <div className="d-flex justify-content-between">
              {}
              <div className="d-flex">
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
                <div>
                  <p className="m-0 fw-bold">Mike</p>
                  <span className="text-muted fs-7">May 24 at 1:23 pm</span>
                </div>
              </div>
            </div>
            {}
            <div className="mt-3">
              {}
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                  fuga incidunt consequatur tenetur doloremque officia corrupti
                  provident tempore vitae labore?
                </p>
                <img
                  src="https://source.unsplash.com/random/13"
                  alt="post image"
                  className="img-fluid rounded"
                />
              </div>
              {}
              <div className="post__comment mt-3 position-relative">
                {}
                <div
                  className="                    d-flex                    align-items-center                    top-0                    start-0                    position-absolute                  "
                  style={{
                    height: "50px",
                    zIndex: 5
                  }}
                >
                  <div className="me-2">
                    <i className="text-primary fas fa-thumbs-up" />
                    <i className="text-danger fab fa-gratipay" />
                    <i className="text-warning fas fa-grin-squint" />
                  </div>
                  <p className="m-0 text-muted fs-7">Phu, Tuan, and 3 others</p>
                </div>
                {}
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item border-0">
                    {}
                    <h2 className="accordion-header" id="headingTwo">
                      <div
                        className="                          accordion-button                          collapsed                          pointer                          d-flex                          justify-content-end                        "
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsePost1"
                        aria-expanded="false"
                        aria-controls="collapsePost1"
                      >
                        <p className="m-0">2 Comments</p>
                      </div>
                    </h2>
                    <hr />
                    {}
                    <div className="d-flex justify-content-around">
                      <div className="                          dropdown-item                          rounded                          d-flex                          justify-content-center                          align-items-center                          pointer                          text-muted                          p-1                        ">
                        <i className="fas fa-thumbs-up me-3" />
                        <p className="m-0">Like</p>
                      </div>
                      <div
                        className="                          dropdown-item                          rounded                          d-flex                          justify-content-center                          align-items-center                          pointer                          text-muted                          p-1                        "
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsePost1"
                        aria-expanded="false"
                        aria-controls="collapsePost1"
                      >
                        <i className="fas fa-comment-alt me-3" />
                        <p className="m-0">Comment</p>
                      </div>
                    </div>
                    {}
                    <div
                      id="collapsePost1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <hr />
                      <div className="accordion-body">
                        {}
                        <div className="d-flex align-items-center my-1">
                          {}
                          <img
                            src="https://source.unsplash.com/collection/happy-people"
                            alt="avatar"
                            className="rounded-circle me-2"
                            style={{
                              width: "38px",
                              height: "38px",
                              objectFit: "cover"
                            }}
                          />
                          {}
                          <div className="p-3 rounded comment__input w-100">
                            {}
                            <div className="d-flex justify-content-end">
                              {}
                              <i
                                className="fas fa-ellipsis-h text-blue pointer"
                                id="post1CommentMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              />
                              {}
                              <ul
                                className="dropdown-menu border-0 shadow"
                                aria-labelledby="post1CommentMenuButton"
                              >
                                <li className="d-flex align-items-center">
                                  <a
                                    className="                                      dropdown-item                                      d-flex                                      justify-content-around                                      align-items-center                                      fs-7                                    "
                                    href="#"
                                  >
                                    Edit Comment
                                  </a>
                                </li>
                                <li className="d-flex align-items-center">
                                  <a
                                    className="                                      dropdown-item                                      d-flex                                      justify-content-around                                      align-items-center                                      fs-7                                    "
                                    href="#"
                                  >
                                    Delete Comment
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fw-bold m-0">John</p>
                            <p className="m-0 fs-7 bg-gray p-2 rounded">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </div>
                        {}
                        <div className="d-flex align-items-center my-1">
                          {}
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
                          {}
                          <div className="p-3 rounded comment__input w-100">
                            <p className="fw-bold m-0">Jerry</p>
                            <p className="m-0 fs-7 bg-gray p-2 rounded">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </div>
                        {}
                        <form className="d-flex my-1">
                          {}
                          <div>
                            <img
                              src="https://source.unsplash.com/collection/happy-people"
                              alt="avatar"
                              className="rounded-circle me-2"
                              style={{
                                width: "38px",
                                height: "38px",
                                objectFit: "cover"
                              }}
                            />
                          </div>
                          {}
                          <input
                            type="text"
                            className="form-control border-0 rounded-pill bg-gray"
                            placeholder="Write a comment"
                          />
                        </form>
                        {}
                      </div>
                    </div>
                  </div>
                </div>
                {}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Timeline;
