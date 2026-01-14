import React from "react";

export default function Hero() {
  return (
    <div className="container mt-5">
      {/* Heading */}
      <div className="text-center border-bottom pb-4">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>

      {/* Pricing cards */}
      <div className="row text-center mt-5">
        <div className="col-md-4 p-5">
          <img
            src="/media/images/pricingEquity.svg"
            alt="Equity delivery"
            className="mb-3"
          />
          <h4 className="fs-3">Free equity delivery</h4>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        <div className="col-md-4 p-5">
          <img
            src="/media/images/intradayTrades.svg"
            alt="Intraday trading"
            className="mb-3"
          />
          <h4 className="fs-3">Intraday & F&O trades</h4>
          <p className="text-muted">
            Flat Rs. 20 or 0.003 (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>

        <div className="col-md-4 p-5">
          <img
            src="/media/images/pricingEquity.svg"
            alt="Pricing transparency"
            className="mb-3"
          />
          <h4 className="fs-3">Fress direct MF</h4>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free - ₹ 0
            commisions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}
