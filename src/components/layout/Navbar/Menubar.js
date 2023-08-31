"use client";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../svg/Logo";
import MenuData from "@/data/MenuData";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
const Dm_sans = DM_Sans({ subsets: ["latin"], weight: ["500", "700"] });
export default function Menubar() {
  const [showNav, setShowNav] = useState(false);
  const [showsidebar, setShowsidebar] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY > 200) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    // if ($("body").hasClass("lock-scroll")) {
    //   $("body").removeClass("lock-scroll");
    // } else {
    //   $("body").addClass("lock-scroll");
    // }

    const mainbody = document.querySelector("body");
    if (showsidebar === true) {
      mainbody.style.overflowY = "hidden";
    } else {
      mainbody.style.overflowY = "auto";
    }
  }, [showsidebar]);

  // const outsidefunc = () => {
  //   setShowsidebar(false);
  //   if (showsidebar === false) {
  //     const mainbody = document.querySelector("body");
  //     mainbody.style.overflowY = "default";
  //   }
  // };

  return (
    <motion.div
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
      <Navbar
        expand="lg"
        className={
          showNav
            ? "d-none stickynav d-lg-block"
            : "d-none stickynav d-lg-block"
        }
      >
        <Container>
          <Navbar.Brand href="#">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", gap: "20px" }}
              navbarScroll
            >
              {MenuData?.map((menu, i) => (
                <Link
                  className={Dm_sans.className + " " + "mx-2"}
                  href={menu.url}
                  key={i}
                >
                  {menu.title}
                </Link>
              ))}
            </Nav>
            <Form className="d-flex">
              <motion.button
                initial={{ opacity: 1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
              >
                Contact Now
              </motion.button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="mobilemenu d-lg-none py-4">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="navlogo">
              <Logo />
            </div>
            <div
              className="responsive-bars"
              onClick={() => setShowsidebar(true)}
            >
              <HiBars3BottomRight fontSize={30} />
            </div>
            <motion.div
              animate={{
                left: showsidebar ? 0 : "-100%",
                opacity: showsidebar ? 0.5 : 0,
              }}
              className="outsidefun"
              onClick={() => setShowsidebar(false)}
            ></motion.div>
            <motion.div
              animate={{ right: showsidebar ? "0%" : "-100%" }}
              className="sidebar"
            >
              <div className="crossme" onClick={() => setShowsidebar(false)}>
                <RxCross1 fontSize={30} />
              </div>
              <ul>
                {MenuData?.map((menu, i) => (
                  <li key={i}>
                    <Link
                      className={Dm_sans.className + " " + "mx-2"}
                      href={menu.url}
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div>
                <motion.button
                  initial={{ opacity: 1 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{ opacity: 1 }}
                >
                  Contact Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
