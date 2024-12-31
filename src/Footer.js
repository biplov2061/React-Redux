import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="card text-center mx-20 my-20">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Thankyou for visiting us</h5>
          <p className="card-text">
           @copyrights claimed 9001-2015.
          </p>
          <a href="#" className="btn btn-danger">
            Subscribe
          </a>
        </div>
        <div className="card-footer text-body-secondary">2 days ago</div>
      </div>
    </div>
  );
}
