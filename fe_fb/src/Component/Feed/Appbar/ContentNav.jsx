import React from "react";

class ContentNav extends React.Component {
  render() {
    return (
      <div className="col d-none d-xl-flex justify-content-center">
        {}
        <div className="mx-4 nav__btn nav__btn-active">
          <button type="button" className="btn px-4">
            <i className="fas fa-home text-muted fs-4" />
          </button>
        </div>
        {}
        <div className="mx-4 nav__btn">
          <button type="button" className="btn px-4">
            <i className="fas fa-store text-muted fs-4" />
          </button>
        </div>
        {}
        <div className="mx-4 nav__btn">
          <button type="button" className="btn px-4">
            <i
              type="button"
              className="position-relative fas fa-users text-muted fs-4"
            >
              <span
                className="                position-absolute                top-0                start-100                translate-middle                badge                rounded-pill                bg-danger              "
                style={{
                  fontSize: "0.5rem"
                }}
              >
                1
                <span className="visually-hidden" />
              </span>
            </i>
          </button>
        </div>
        {}
        <div className="mx-4 nav__btn">
          <button type="button" className="btn px-4">
            <i className="fas fa-gamepad text-muted fs-4" />
          </button>
        </div>
      </div>
    );
  }
}

export default ContentNav;
