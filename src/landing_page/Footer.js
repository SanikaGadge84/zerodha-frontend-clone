import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="/media/images/logo.svg" style={{ width: "50%" }} />
            <p>
              {" "}
              &copy; 2010 - 2024, Not Zerodha Broking Ltd.All rights reserved.
            </p>
          </div>
          <div className="col text-muted footer-links">
            <h4 className="fs-6">Company</h4>
            <a href="">About</a>
            <br></br>
            <a href="">Products</a>
            <br></br>
            <a href="">Pricing</a>
            <br></br>
            <a href="">Referral programme</a>
            <br></br>
            <a href="">Careers</a>
            <br></br>
            <a href="">Zerodha tech</a>
            <br></br>
            <a href="">Press & media </a>
            <br></br>
            <a href="">Zerodha cares</a>
            <br></br>
          </div>
          <div className="col text-muted mb-5 footer-links">
            <h4 className="fs-6">Support</h4>
            <a href="">Contact</a>
            <br></br>
            <a href="">Support portal</a>
            <br></br>
            <a href="">Z-Connect blog</a>
            <br></br>
            <a href="">List of charges</a>
            <br></br>
            <a href="">Downloads & resources</a>
            <br></br>
          </div>
          <div className="col text-muted footer-links">
            <h4 className="fs-6">Account</h4>
            <a href="">Open an account</a>
            <br></br>
            <a href="">Fund transfer</a>
            <br></br>
            <a href="">60 day challenge</a>
            <br></br>
          </div>
        </div>
        <div
          className="mt-5 text-small text-muted"
          style={{ fontSize: "14px" }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE SEBI Registration no.:
            SEBI INZ000031633 CDSL: Depository services through Zerodha
            Securities Pvt. Ltd. Registration no.: IN-DP-100-2015 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 SEBI
            Registration no.: INZ000038238 Registered Address: Zerodha Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru 560078, Karnataka, India. For
            any complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of you Exchange on your mobile/emall at the end of the
            day, Issued in the interest of investors. KYC is one time exercise
            while dealing in securities mark SEBI registered intermediary
            (brokar, DP, Mutual Fund etc., you need not undergo the same process
            again when you approach another interme subscribing to an IPC, there
            is no need to issue a cheque. Please write the Bank account number
            and sigis the IPO application form to authorize your of allotment,
            in case of non allotment the funds will remain in your bank account.
            As a business we don't give stock lips, and have not authorized
            anyon others if you find anyone clansing to be part of Zerodha and
            offering such services, please create a ticket here
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
