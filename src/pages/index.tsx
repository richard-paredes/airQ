import React, { useMemo } from "react";

import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import dynamic from "next/dynamic";
import { About } from "@/components/About";

const App = () => {
  const WorldMap = useMemo(() => dynamic(
    () => import('@/components/WorldMap'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])
  return (
    <Layout minH="100vh" maxH="100vh">
      <Navbar />
      <WorldMap />
      <About />
      <Footer />
    </Layout>
  );
};

export default App;
