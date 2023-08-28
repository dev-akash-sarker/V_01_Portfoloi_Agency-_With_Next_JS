"use client";
import React, { useState } from "react";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { AboutData } from "./Skillset/AboutData";
import { AboutBottom } from "./Skillset/AboutBottom";
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
export default function About() {
  const [active, setActive] = useState(0);
  const handleClick = (item) => {
    setActive(item);
  };
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
  const Animation2 = {
    hidden: {
      x: 20,
      opacity: 0,
    },
    visible: {
      x: 0,
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
          </div>
          <div className="col-lg-6">
            <div className="power-right">
              <p className={dmsans.className}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised.
              </p>
              <div className="btn-wrapper">
                <button className={dmsans.className}>Download Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="skillexperience">
              <div className="skillset">
                <div className="container">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                    }}
                    className={dmsans.className + " " + "row"}
                  >
                    {AboutData.map((item, i) => (
                      <div
                        className={
                          active === i ? "col-lg-5 clicked" : "col-lg-5"
                        }
                        key={i}
                        onClick={() => handleClick(i)}
                      >
                        <h3>{item.heading} </h3>
                        <p>{item.paragraph}</p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            className="col-lg-6"
            initial="hidden"
            // whileInView="visible"
            // variants={Animation2}
          >
            {AboutBottom.map((item, i) => (
              <div key={i}>
                {active === i ? (
                  <motion.div
                    className={dmsans.className + " " + "rewards"}
                    initial={{
                      x: 100,
                    }}
                    animate={{
                      x: 0,
                    }}
                  >
                    <h3>{item.heading}</h3>
                    <p>{item.paragraph}</p>
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
                  </motion.div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
