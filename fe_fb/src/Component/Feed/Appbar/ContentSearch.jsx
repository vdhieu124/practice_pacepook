import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


class ContentSearch extends React.Component {
  render() {
    return (
      <div className="col d-flex align-items-center">
        
        <i
          className="fab fa-facebook text-primary"
          style={{
            fontSize: "3rem"
          }}
        />
        
        <div className="input-group ms-2" type="button">
          
          <span
            className="input-group-prepend d-lg-none"
            id="searchMenu"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            <div
              className="input-group-text bg-gray border-0 rounded-circle"
              style={{
                minHeight: "40px"
              }}
            >
              <i className="fas fa-search text-muted" />
            </div>
          </span>
          
          <span
            className="input-group-prepend d-none d-lg-block"
            id="searchMenu"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            <div
              className="input-group-text bg-gray border-0 rounded-pill"
              style={{
                minHeight: "40px",
                minWidth: "230px"
              }}
            >
              <i className="fas fa-search me-2 text-muted" />
              <p className="m-0 fs-7 text-muted">Search Flexbook</p>
            </div>
          </span>
          
          <ul
            className="dropdown-menu overflow-auto border-0 shadow p-3"
            aria-labelledby="searchMenu"
            style={{
              width: "20em",
              maxHeight: "600px"
            }}
          >
            
            <li>
              <input
                type="text"
                className="rounded-pill border-0 bg-gray dropdown-item"
                placeholder="Search Flexbook..."
              />
            </li>
            
            <li className="my-4">
              <div
                className="                alert                fade                show                dropdown-item                p-1                m-0                d-flex                align-items-center                justify-content-between              "
                role="alert"
              >
                <div className="d-flex align-items-center">
                  <img
                    src="https://source.unsplash.com/random/1"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "35px",
                      height: "35px",
                      objectFit: "cover"
                    }}
                  />
                  <p className="m-0">Lorem ipsum</p>
                </div>
                <button
                  type="button"
                  className="btn-close p-0 m-0"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                />
              </div>
            </li>
            
            <li className="my-4">
              <div
                className="                alert                fade                show                dropdown-item                p-1                m-0                d-flex                align-items-center                justify-content-between              "
                role="alert"
              >
                <div className="d-flex align-items-center">
                  <img
                    src="https://source.unsplash.com/random/2"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "35px",
                      height: "35px",
                      objectFit: "cover"
                    }}
                  />
                  <p className="m-0">Lorem ipsum</p>
                </div>
                <button
                  type="button"
                  className="btn-close p-0 m-0"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                />
              </div>
            </li>
            
            <li className="my-4">
              <div
                className="                alert                fade                show                dropdown-item                p-1                m-0                d-flex                align-items-center                justify-content-between              "
                role="alert"
              >
                <div className="d-flex align-items-center">
                  <img
                    src="https://source.unsplash.com/random/3"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{
                      width: "35px",
                      height: "35px",
                      objectFit: "cover"
                    }}
                  />
                  <p className="m-0">Lorem ipsum</p>
                </div>
                <button
                  type="button"
                  className="btn-close p-0 m-0"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ContentSearch;
