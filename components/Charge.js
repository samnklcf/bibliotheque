import React from "react";
import Link from "next/link";

function Charge() {
  return (
    <div className="item-card-gradual" aria-hidden="true">
      {/* <div class="head-card"></div> */}
      <div className="body-card">
        <div className="title-card-nft">
          <div className="side-one">
            <h2 className="placeholder-glow">
              <span className="placeholder col-12" />
            </h2>
            <p className="placeholder-glow">
              <span className="placeholder col-4" />
            </p>
          </div>
          <div className="side-other placeholder-glow">
            <span className="placeholder col-4 w-50p" />
          </div>
        </div>
        <div className="creator-name">
          <div className="image-user placeholder-glow">
            <span className="placeholder w-15p" />
          </div>
          <h3 className="placeholder-glow">
            <span className="placeholder w-100p" />
          </h3>
        </div>
      </div>
      <div className="footer-card">
        <div className="starting-bad placeholder-glow">
          <h4 className="placeholder w-50p" />
          <span className="placeholder w-70p" />
        </div>
        <div className="btn-like-click placeholder-glow">
          <span className="placeholder w-25p" />
        </div>
      </div>
    </div>
  );
}

export default Charge;
