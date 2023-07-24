import About from "@/components/About";
import Hero from "@/components/Hero/Hero";
import Layout from "@/components/layout/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
      </Layout>
    </>
  );
}
