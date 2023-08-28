import About from "@/components/About";
import Hero from "@/components/Hero/Hero";
import Production from "@/components/Production/Production";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Team from "@/components/Team/Team";
import Blog from "@/components/Blog/Blog";
import Partner from "@/components/Partner/Partner";
import Newsletter from "@/components/Newsletter/Newsletter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <>
      <Layout>
        {/* hero */}
        <Hero />
        {/* about */}
        <About />
        {/* production */}
        <Production />
        {/* team */}
        <Team />
        {/* blog */}
        <Blog />
        {/* partner */}
        <Partner />
        {/* newsletter */}
        <Newsletter />
        {/* footer */}
      </Layout>
    </>
  );
}
