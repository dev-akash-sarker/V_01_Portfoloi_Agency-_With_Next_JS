"use client";
import Image from "next/image";
import React from "react";
import wd from "../../svg/production-icons/wd.svg";
import pd from "../../svg/production-icons/pd.svg";
import gd from "../../svg/production-icons/gd.svg";
import { DM_Sans, Open_Sans } from "next/font/google";
import { motion } from "framer-motion";
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const opensans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });
export default function ProdRight() {
  return (
    <>
      <div className="prodWrapper">
        <motion.div whileHover={{ x: 48 }} className="prodflex">
          <div className="icon">
            <Image src={wd} width={64} height={64} alt="wd" />
          </div>
          <div className={dmsans.className + " " + "text-prod"}>
            <h4>Web Development</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
          </div>
        </motion.div>
        <motion.div whileHover={{ x: 48 }} className="prodflex">
          <div className="icon">
            <Image src={pd} width={64} height={64} alt="wd" />
          </div>
          <div className={dmsans.className + " " + "text-prod"}>
            <h4>Product Design & Development</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
          </div>
        </motion.div>
        <motion.div whileHover={{ x: 48 }} className="prodflex">
          <div className="icon">
            <Image src={gd} width={64} height={64} alt="wd" />
          </div>
          <div className={dmsans.className + " " + "text-prod"}>
            <h4>Graphic Design</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
