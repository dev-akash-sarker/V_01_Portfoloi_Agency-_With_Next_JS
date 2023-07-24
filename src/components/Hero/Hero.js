"use client";
import React from "react";
import HeroLeft from "./HeroLeft";
import Image from "next/image";
import HeroImage from "../../app/Images/hero.webp";
import { motion } from "framer-motion";
export default function Hero() {
  const Animation = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <motion.div
        className="hero"
        initial="hidden"
        whileInView="visible"
        variants={Animation}
        viewport={{ once: true }}
        transition={{
          staggerChildren: 0.2,
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="left-banner-text">
                <HeroLeft />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <Image
                  src={HeroImage}
                  width={600}
                  height={400}
                  loading="lazy"
                  alt="HeroImage"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
