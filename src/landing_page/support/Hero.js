import React from "react";

export default function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="container">
        {/* Top bar */}
        <div
          className="px-5 py-4 d-flex justify-content-between align-items-center"
          id="supportWrapper"
        >
          <h4 className="mb-0">Support Portal</h4>
          <a href="">Track Tickets</a>
        </div>

        {/* Main section */}
        <div className="row px-5 py-3">
          {/* Left column */}
          <div className="col-6 px-0">
            <h1 className="fs-4 mb-3">
              Search for an answer or browse help topics to create a ticket
            </h1>

            <input placeholder="Eg. how do i activate F&O, why is my order getting rejected.." />

            <div className="mt-3 d-flex gap-2 flex-wrap">
              <a href="">Track account Opening</a>
              <a href="">Track segment activation</a>
              <a href="">Intraday margins</a>
              <a href="">Kite user manual</a>
            </div>
          </div>

          {/* Right column */}
          <div className="col-6">
            <h1 className="fs-4 mb-3">Features</h1>
            <ol className="ps-3">
              <li className="mb-2">
                <a href="">Current Takeovers and Delisting - January 2024</a>
              </li>
              <li className="mb-2">
                <a href="">Latest Intraday leverages - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
