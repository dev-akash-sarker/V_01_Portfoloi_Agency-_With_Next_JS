import React from "react";
import { DM_Sans } from "next/font/google";
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
export default function Skillset() {
  return (
    <>
      <div className="skillset">
        <div className="container">
          <div className={dmsans.className + " " + "row"}>
            <div className="col-lg-5">
              <h3>2018-Graphic Design </h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the.
              </p>
            </div>
            <div className="col-lg-5">
              <h3>2015-UI/UX Design </h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the.
              </p>
            </div>
            <div className="col-lg-5">
              <h3>2015-Word Press </h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the.
              </p>
            </div>
            <div className="col-lg-5">
              <h3>2017-Web Development </h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
