import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { DM_Sans, Open_Sans } from "next/font/google";
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const opensans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });
export default function Newsletter() {
  return (
    <>
      <div className="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <div className="newsletter-wrapper">
                <div className="newsletter-text">
                  <h4 className={dmsans.className}>
                    Subscirbe to Our Newsletter
                  </h4>
                  <p className={opensans.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority.
                  </p>
                </div>
                <div className="newsletter-email">
                  <div className="newsletter-email-wrapper">
                    <div className="inputwrapper">
                      <input
                        className={dmsans.className}
                        type="text"
                        placeholder="Email"
                      />
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
      </div>
    </>
  );
}
