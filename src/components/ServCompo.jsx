import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const ServCompo = ({ text, number }) => {
  return (
    <Box my={4}>
      <Flex justifyContent={"space-between"} fontWeight={400}>
        <Text>{text}</Text>
        <Text>{number}</Text>
      </Flex>
    </Box>
  );
};

export default ServCompo;
