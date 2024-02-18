import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <Box color={"#fff"}>
      <Flex
        px={{ lg: 10, md: 10, sm: 5, base: 5 }}
        pt={{ lg: 20, md: 20, sm: 10, base: 10 }}
        justifyContent={"space-between"}
        flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
        alignItems={"center"}
      >
        <Box>
          <Heading
            fontSize={{ lg: 50, md: 40, sm: "50px", base: "45px" }}
            fontWeight={400}
          >
            Get Hair Style <br />
            You Deserve
          </Heading>
          <Button
            fontSize={10}
            my={{ lg: 2, md: 2, sm: 1, base: 1 }}
            height={9}
            color={"#fff"}
            bg={"brown"}
            _hover={"none"}
            fontWeight={400}
            borderRadius={100}
          >
            Book Appointement
          </Button>

          <Text
            fontSize={12}
            fontWeight={200}
            width={{ lg: 400, md: 300, sm: "100%", base: "100%" }}
            pt={5}
          >
            Discover a world of sophisticated and personalized beauty at LITTLE
            HAIR NEST. Our Salon is more than just a place for haircuts; it's a
            haven where your unique style takes center stage.
          </Text>
        </Box>
        <Box>
          <Grid
            gridTemplateColumns={{
              lg: "1fr 1fr",
              md: "1fr 1fr",
              sm: "1fr 1fr 1fr 1fr",
              base: "1fr 1fr 1fr",
            }}
            mt={{lg : 0, md : 0, sm : 10, base : 5}}
            gridGap={{lg : 10, md : 10, sm : 5, base : 5}}
          >
            <Image
              src="https://s.alicdn.com/@sc04/kf/Hea9385e940d84592b63a61197711bf74d.jpg"
              width={{ lg: 150, md: 150, sm: 120, base: "80px" }}
              height={{ lg: 150, md: 150, sm: "100%", base: "80px" }}
              borderRadius={40}
              boxShadow={"0px 0px 50px #000"}
              objectFit={"cover"}
              as={motion.img}
              whileHover={{
                scale: 1.1,
                transition: {
                  type: "spring",
                  stiffness: 2000,
                  damping: 30,
                  duration: 5,
                },
              }}
            />
            <Image
              src="https://www.itakeyou.co.uk/idea/wp-content/uploads/2022/11/hair-trends-41.jpg"
              width={{ lg: 150, md: 150, sm: 120, base: "80px" }}
              height={{ lg: 150, md: 150, sm: "100%", base: "80px" }}
              borderRadius={40}
              objectFit={"cover"}
              boxShadow={"0px 0px 50px #000"}
              as={motion.img}
              whileHover={{
                scale: 1.1,
                transition: {
                  type: "spring",
                  stiffness: 2000,
                  damping: 30,
                  duration: 5,
                },
              }}
            />
            <Image
              src="https://hairstyleonpoint.com/wp-content/uploads/2021/02/Ombre-Waves.jpg"
              width={{ lg: 150, md: 150, sm: 120, base: "80px" }}
              height={{ lg: 150, md: 150, sm: "100%", base: "80px" }}
              borderRadius={40}
              boxShadow={"0px 0px 50px #000"}
              as={motion.img}
              objectFit={"cover"}
              whileHover={{
                scale: 1.1,
                transition: {
                  type: "spring",
                  stiffness: 2000,
                  damping: 30,
                  duration: 5,
                },
              }}
            />
            <Image
              src="https://www.southernliving.com/thmb/yG_93DJSzBJ2DsWOWOi3FIzH2CI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/layered-long-9d62ea3631c8448cbac54f1ca1d2377c.jpg"
              width={{ lg: 150, md: 150, sm: 120, base: "80px" }}
              height={{ lg: 150, md: 150, sm: "100%", base: "80px" }}
              borderRadius={40}
              boxShadow={"0px 0px 50px #000"}
              objectFit={"cover"}
              as={motion.img}
              whileHover={{
                scale: 1.1,
                transition: {
                  type: "spring",
                  stiffness: 2000,
                  damping: 30,
                  duration: 5,
                },
              }}
            />
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
