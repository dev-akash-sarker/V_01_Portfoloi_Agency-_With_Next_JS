"use client";
import React from "react";
import { DM_Sans, Open_Sans } from "next/font/google";
import { motion } from "framer-motion";
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const opensans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });
export default function ProdLeft() {
  return (
    <div className={dmsans.className + " " + "prodleft"}>
      <h4>
        I <span>Run</span> Agency <span>Smartly</span> With My <span>Team</span>{" "}
        Member.
      </h4>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which dont look.
      </p>
      <motion.button
        className={opensans.className + " " + "natto-primary-button"}
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
    </div>
  );
}
