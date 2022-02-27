import React, { useReducer } from "react";

import { Layout } from "../components/Layout";
import { MapOfUsa } from "../components/MapOfUsa";
import { MapForm } from "../components/MapForm";
import { Navbar } from "../components/Navbar";
import { initialOpenAQParameters, openAQReducer } from "../reducers/OpenAQReducer";

const App = () => {
  const [openAQParameters, dispatchOpenAQ] = useReducer(openAQReducer, initialOpenAQParameters);

  return (
    <Layout minH="100vh" maxH="100vh">
      <Navbar />
      <MapForm openAQParameters={openAQParameters} dispatchOpenAQ={dispatchOpenAQ} />
      <MapOfUsa openAQParameters={openAQParameters} dispatchOpenAQ={dispatchOpenAQ} />
    </Layout>
  );
};

export default App;
