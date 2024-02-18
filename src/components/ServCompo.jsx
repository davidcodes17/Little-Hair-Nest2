import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const ServCompo = ({ text, number }) => {
  return (
    <Box my={4} px={{lg : 0, md : 0, sm : 5}}>
      <Flex justifyContent={"space-between"} fontWeight={400} fontSize={{lg : 15, md : 15, sm : 12, base : 12}}>
        <Text>{text}</Text>
        <Text>{number}</Text>
      </Flex>
    </Box>
  );
};

export default ServCompo;