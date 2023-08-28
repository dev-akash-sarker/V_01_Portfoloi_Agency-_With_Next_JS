"use client";
import Image from "next/image";
import React from "react";
import { DM_Sans, Open_Sans } from "next/font/google";
import { motion } from "framer-motion";
import Gd from "@/svg/production-icons/Gd";
import Pd from "@/svg/production-icons/Pd";
import Wd from "@/svg/production-icons/Wd";
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const opensans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });
export default function ProdRight() {
  return (
    <>
      <div className="prodWrapper">
        <div className="prodflex">
          <div className="icon">
            <Wd />
          </div>
          <div className={dmsans.className + " " + "text-prod"}>
            <h4>Web Development</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
          </div>
        </div>
        <div className="prodflex">
          <div className="icon">
            <Pd />
          </div>
          <div className={dmsans.className + " " + "text-prod"}>
            <h4>Product Design & Development</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
          </div>
        </div>
        <div whileHover={{ x: 48 }} className="prodflex">
          <div className="icon">
            <Gd />
          </div>
          <div className={dmsans.className + " " + "text-prod"}>
            <h4>Graphic Design</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
