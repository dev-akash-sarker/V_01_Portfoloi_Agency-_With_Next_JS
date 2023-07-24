"use client";
import React from "react";
import { DM_Sans, Open_Sans } from "next/font/google";
import Arrow from "@/svg/Arrow";
import { motion } from "framer-motion";
import Link from "next/link";
import { FollowMeSocial } from "./FollowMeData";
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const opensans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });
export default function HeroLeft() {
  return (
    <>
      <div className="hero-text">
        <h1 className={dmsans.className}>
          <span>Creative </span> Design and Work
          <span> Solution</span>
        </h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered.
        </p>
        <div className="hero-btn">
          <motion.button
            className={opensans.className}
            initial={{ opacity: 1 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            Say Hello
          </motion.button>
          <motion.button
            className={opensans.className}
            initial={{ opacity: 1 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            My Work <Arrow />
          </motion.button>
        </div>
        <div className="followme">
          <div className="followme-text">
            <h4 className={dmsans.className}>Follow me on</h4>
          </div>
          <div className="followme-link">
            {FollowMeSocial.map((data, i) => (
              <Link href={data.link} key={i}>
                <motion.div
                  initial={{ opacity: 1 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{ opacity: 1 }}
                >
                  {data.title}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
