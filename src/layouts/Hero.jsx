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
      <Flex px={10} pt={20} justifyContent={'space-between'} alignItems={"center"}>
        <Box>
          <Heading fontSize={50} fontWeight={400}>
            Get Hair Style <br />
            You Deserve
          </Heading>
          <Button
            fontSize={10}
            my={2}
            height={9}
            color={"#fff"}
            bg={"brown"}
            _hover={"none"}
            fontWeight={400}
            borderRadius={100}
          >
            Book Appointement
          </Button>

          <Text fontSize={12} fontWeight={200} width={400} pt={5}>
            Discover a world of sophisticated and personalized beauty at LITTLE
            HAIR NEST. Our Salon is more than just a place for haircuts; it's a
            haven where your unique style takes center stage.
          </Text>
        </Box>
        <Box>
          <Grid gridTemplateColumns={"1fr 1fr"} gridGap={10}>
            <Image
              src="https://s.alicdn.com/@sc04/kf/Hea9385e940d84592b63a61197711bf74d.jpg"
              width={150}
              height={150}
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
              width={150}
              height={150}
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
              width={150}
              height={150}
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
              width={150}
              height={150}
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