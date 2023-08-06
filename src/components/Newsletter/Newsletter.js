import React from "react";
import { BsArrowRight } from "react-icons/bs";
export default function Newsletter() {
  return (
    <>
      <div className="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="newsletter-wrapper">
                <div className="newsletter-text">
                  <h4>Subscirbe to Our Newsletter</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority.
                  </p>
                </div>
                <div className="newsletter-email">
                  <div className="newsletter-email-wrapper">
                    <input type="text" />
                    <button>
                      <BsArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
