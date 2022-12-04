import React from "react";

interface IProps {
  setIsLogin: (value: boolean) => void;
}

function Navigation(props: IProps) {
  const { setIsLogin } = props;
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
            <button className="nav-link" onClick={() => setIsLogin(false)}>
              LOGOUT
            </button>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-title">
          LẬP TRÌNH WEB VỚI REACT, NODEJS, MONGODB, EXPRESSJS
        </h5>
        <p className="card-text">ReactJS Batch 24</p>
      </div>
    </div>
  );
}

export default Navigation;
