"use client";
import React from "react";
import { DM_Sans } from "next/font/google";
import Skillset from "./Skillset/Skillset";
import { motion } from "framer-motion";
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
export default function About() {
  const Animation = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="about"
      initial="hidden"
      whileInView="visible"
      variants={Animation}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="power-left">
              <h2 className={dmsans.className}>
                Failure is The Power that Gives <span>Success</span>
              </h2>
            </div>
            <div className="skillexperience">
              <Skillset />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="power-right">
              <p className={dmsans.className}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised.
              </p>
              <button className={dmsans.className}>Download Now</button>
            </div>
            <div className={dmsans.className + " " + "rewards"}>
              <h3>Get So Many Awards In 5 years</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority.
              </p>
              <motion.button
                initial={{ opacity: 0.6 }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
                className="natto-secondary-button"
              >
                Visit Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
