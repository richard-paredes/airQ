import React, { useReducer, useState } from "react";

import { Layout } from "../components/Layout";
import { MapOfUsa } from "../components/MapOfUsa";
import { MapForm } from "../components/MapForm";
import { Navbar } from "../components/Navbar";

const App = () => {
  const [openAQState, dispatch] = useReducer();
  
  return (
    <Layout minH="100vh" maxH="100vh">
      <Navbar />
      <MapForm />
      <MapOfUsa />
    </Layout>
  );
};

export default App;
