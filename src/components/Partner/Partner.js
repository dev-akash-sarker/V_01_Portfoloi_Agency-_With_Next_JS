import React from "react";
import partnerone from "../../svg/partner1svg.svg";
import partnertwo from "../../svg/partner2.svg";
import partnerthree from "../../svg/partner3.svg";
import partnerfour from "../../svg/partner4.svg";
import { DM_Sans, Jost } from "next/font/google";
import Image from "next/image";
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const jostf = Jost({ subsets: ["latin"], weight: ["400", "700"] });
export default function Partner() {
  return (
    <>
      <div className="partner">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h4 className={dmsans.className}>Reputed Partners</h4>
            </div>
          </div>
          <div className={jostf.className + " " + "row"}>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="partner-wrapper">
                <div className="partner-image">
                  <Image src={partnerone} alt="partnerone" />
                </div>
                <h4>Happy Mart</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="partner-wrapper">
                <div className="partner-image">
                  <Image src={partnertwo} alt="partnerone" />
                </div>
                <h4>Lori Cracker</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="partner-wrapper">
                <div className="partner-image">
                  <Image src={partnerthree} alt="partnerone" />
                </div>
                <h4>Emad Fashion</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="partner-wrapper">
                <div className="partner-image">
                  <Image src={partnerfour} alt="partnerone" />
                </div>
                <h4>Docco Semims</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
