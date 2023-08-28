"use client";
import Logo from "@/svg/Logo";
import React from "react";
import { Open_Sans } from "next/font/google";
import { DM_Sans } from "next/font/google";
import {
  Copyrights,
  ResourcesData,
  ServiceData,
  SocialLink,
} from "./FooterData";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import Sent from "@/svg/Sent";
import { motion } from "framer-motion";

const opensans = Open_Sans({ subsets: ["latin"], weight: ["400", "500"] });
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-content">
              <Logo />
              <p className={opensans.className}>
                There are many variations of passages of available, but the
                majority have suffered.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-content-firstlist">
              <h4 className={dmsans.className}>Services</h4>
              <div className="link-content">
                {ServiceData.map((data, i) => (
                  <Link className={dmsans.className} key={i} href={data.link}>
                    {data.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-content-firstlist">
              <h4 className={dmsans.className}>Resources</h4>
              <div className="link-content">
                {ResourcesData.map((data, i) => (
                  <Link className={dmsans.className} key={i} href={data.link}>
                    {data.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-content">
              <h4 className={dmsans.className}>Newsletter</h4>
              <p>Subscribe for our upcoming latest address and resources</p>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="email"
                  className={dmsans.className + " " + "me-2" + " "}
                  aria-label="Search"
                />
                <Button variant="outline-success">
                  <Sent />
                </Button>
              </Form>
              <div className="social-link">
                {SocialLink.map((data, i) => (
                  <Link key={i} href={data.link}>
                    <motion.div
                      initial={{ opacity: 1 }}
                      whileHover={{
                        scale: 1.1,
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
        </div>
      </div>
      <div className="copyright">
        {Copyrights.map((data, i) => (
          <Link key={i} className={opensans.className} href={data.link}>
            {data.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
