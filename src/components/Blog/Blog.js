"use client";
import React from "react";
import { DM_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import one from "../../app/Images/Blog/1.webp";
import two from "../../app/Images/Blog/2.webp";
import three from "../../app/Images/Blog/3.webp";
import calender from "../../svg/calender.svg";
import Link from "next/link";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
export default function Blog() {
  const setting = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <AiOutlineArrowRight fill="#000" />,
    prevArrow: <AiOutlineArrowLeft fill="#000" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="blog">
        <div className={dmsans.className + " " + "container"}>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h4>Latest Blog</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised.
              </p>
            </div>
          </div>
          <div className="row">
            <Slider {...setting}>
              <div>
                <div className="blog-post-design">
                  <div className="blog-image">
                    <Image src={one} alt="bitcoin" />
                  </div>
                  <div className="blog-text">
                    <div className="blog-time">
                      <Image src={calender} alt="calender" />
                      <p> 10 January 2023</p>
                    </div>

                    <h4>Bitcoin and Economic Freedom</h4>
                    <Link href="#">Read More</Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="blog-post-design">
                  <div className="blog-image">
                    <Image src={two} alt="bitcoin" />
                  </div>
                  <div className="blog-text">
                    <div className="blog-time">
                      <Image src={calender} alt="calender" />
                      <p> 10 January 2023</p>
                    </div>

                    <h4>Bitcoin and Economic Freedom</h4>
                    <Link href="#">Read More</Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="blog-post-design">
                  <div className="blog-image">
                    <Image src={three} alt="bitcoin" />
                  </div>
                  <div className="blog-text">
                    <div className="blog-time">
                      <Image src={calender} alt="calender" />
                      <p> 10 January 2023</p>
                    </div>

                    <h4>Bitcoin and Economic Freedom</h4>
                    <Link href="#">Read More</Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="blog-post-design">
                  <div className="blog-image">
                    <Image src={one} alt="bitcoin" />
                  </div>
                  <div className="blog-text">
                    <div className="blog-time">
                      <Image src={calender} alt="calender" />
                      <p> 10 January 2023</p>
                    </div>

                    <h4>Bitcoin and Economic Freedom</h4>
                    <Link href="#">Read More</Link>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
