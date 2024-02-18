import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import Services from "../layouts/Services";
import Contact from "../layouts/Contact";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <Box>
      <Box
        width={"100vw"}
        height={"100vh"}
        bgImage={"url('/bg.jpg')"}
        bgSize={"cover"}
      >
        <Header />
        <Hero />
      </Box>
      <Box py={50} px={50} color={"#000"}>
        <Services />
      </Box>
      <Contact />
      <Footer />
    </Box>
  );
};

export default Home;