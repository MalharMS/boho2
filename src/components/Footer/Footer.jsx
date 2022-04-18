import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>BoHo</h4>
            <h1 className="list-unstyled">
              <li>845-451-3215</li>
              <li>bohocompany@gmail.com</li>
              <li>Location</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Categories</h4>
            <ui className="list-unstyled">
              <li>Luxury</li>
              <li>Design</li>
              <li>Color</li>
              <li>Trending</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Brands</h4>
            <ui className="list-unstyled">
              <li>ABC</li>
              <li>ABC</li>
              <li>ABC</li>
              
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} BOHO | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;