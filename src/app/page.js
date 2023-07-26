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
export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Production />
        <Team />
        <Blog />
        <Partner />
        <Newsletter />
      </Layout>
    </>
  );
}
