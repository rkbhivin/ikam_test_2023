import React from "react";

function navBar() {
  return (
    <div>
      <nav>
        <div className="header-container">
          <a href="#" className="logo">
            Logo
          </a>

          <ul>
            <li>
              <a href="">Link 1</a>
            </li>

            <li>
              <a href="">Link 2</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="breadcrum">
        <div className="row breadcrum-wrapper">
          <div className="col-8">
            <p>
              <a href="">/ Tax /</a>

              <a href=""> Property Tax / </a>

              <a href="">New Tax Assesment other than Br / </a>

              <span>Form-2</span>
            </p>
          </div>

          <div className="col-4 text-right">
            <p>
              <span className="created-date">Created on: 15-02-2023</span>

              <a href="">Cancel / </a>

              <a href="">Delete</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default navBar;
