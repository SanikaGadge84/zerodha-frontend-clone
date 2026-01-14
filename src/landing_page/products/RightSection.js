import React from "react";

export default function RightSection({
  imageURL,
  productName,
  productDescription,
  learMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-5 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learMore} style={{ textDecoration: "none" }}>
              learnMore
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} style={{ textDecoration: "none" }} />
        </div>
      </div>
    </div>
  );
}
