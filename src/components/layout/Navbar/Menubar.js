"use client";
import React from "react";
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

const Dm_sans = DM_Sans({ subsets: ["latin"], weight: ["500", "700"] });
export default function Menubar() {
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
      <Navbar expand="lg">
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
    </motion.div>
  );
}
