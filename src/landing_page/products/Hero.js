import React from "react";

export default function Hero() {
  return (
    <div className="container border-bottom mt-5">
      <div className="row text-center mt-5 p-4">
        {" "}
        <h1>Technology</h1>
        <h3 className="text-muted mt-3 fs-4">
          Sleek, modern and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-1">
          Check out{" "}
          <a href="" style={{ textDecoration: "none" }}>
            {" "}
            Investment offerings <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
    </div>
  );
}
