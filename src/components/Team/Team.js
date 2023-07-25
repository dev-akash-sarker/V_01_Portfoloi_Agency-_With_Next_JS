"use client";
import Image from "next/image";
import React from "react";
import glassman from "../../app/Images/glassman.webp";
import { DM_Sans, Grechen_Fuemen } from "next/font/google";
import { motion } from "framer-motion";
import Counter from "react-number-increment";
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const grechen = Grechen_Fuemen({ subsets: ["latin"], weight: ["400"] });
export default function Team() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="glassmen-team">
              <Image src={glassman} width={496} height={569} alt="teamwork" />
              <div className="teamwork-text">
                <div className="center-teamwork">
                  <h4 className={dmsans.className}>5+ Year</h4>
                  <h5 className={dmsans.className}>Experience</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={dmsans.className + " " + "team-right"}>
              <h3>
                We <span>Run</span> Agency <span>Smartly</span> With Our{" "}
                <span>Team</span>
                Member.
              </h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which dont look.
              </p>
              <ul>
                <li>There are many variations of passages of.</li>
                <li>There are many variations of passages of.</li>
                <li>There are many variations of passages of.</li>
                <li>There are many variations of passages of.</li>
              </ul>
              <motion.button
                className="natto-secondary-button"
                initial={{ opacity: 0.6 }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
              >
                Explore More
              </motion.button>

              <div className="number-team">
                <div className={grechen.className + " " + "team-section"}>
                  <Counter start={0} end={30} speed={1} />
                  <p className={dmsans.className}>Team Members</p>
                </div>
                <div className={grechen.className + " " + "team-section"}>
                  <Counter start={0} end={150} speed={1} />
                  <p className={dmsans.className}>Completed Projects</p>
                </div>
                <div className={grechen.className + " " + "team-section"}>
                  <Counter start={0} end={50} speed={1} />
                  <p className={dmsans.className}>Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
