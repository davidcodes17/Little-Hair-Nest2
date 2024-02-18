import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ServiceCard = ({ image, text }) => {
  return (
    <Box
      my={5}
      width={{lg : 200, md : 200, sm : "100%", base : "100%"}}
      height={200}
      bgImage={`url(${image})`}
      bgSize={"cover"}
      p={5}
      borderRadius={20}
      boxShadow={"0px 0px 5px #ddd"}
    >
      <Text
        px={4}
        py={1.5}
        boxShadow={"0px 0px 5px #eee"}
        fontSize={12}
        bg={"#fff"}
        color={"#000"}
        width={"fit-content"}
        borderRadius={100}
      >
        {text}
      </Text>
    </Box>
  );
};

export default ServiceCard;
