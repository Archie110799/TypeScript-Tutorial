import React from "react";

type Props = {};

function Navigation({}: Props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <a className="nav-link active" aria-current="true" href="/">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin">
              ADMIN
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-title">
          LẬP TRÌNH WEB VỚI REACT, NODEJS, MONGODB, EXPRESSJS
        </h5>
        <p className="card-text">
          ReactJS Batch 24
        </p>
      </div>
    </div>
  );
}

export default Navigation;
