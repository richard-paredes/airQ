import React from "react";
import { Flex } from "@chakra-ui/react";

import { Layout } from "../components/Layout";

const App = () => {

  return (
    <Layout minH="100vh">
      <Flex justify="center" align="center" minH="40vh" minW="40vw">
        Hello world
      </Flex>
    </Layout>
  );
};

export default App;
