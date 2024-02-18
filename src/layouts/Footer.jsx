import { Box, Flex, Text } from "@chakra-ui/react";
import Logo from "../components/Logo";
import React from "react";

const Footer = () => {
  return (
    <Box
      mt={20}
      bg={"#2E282A"}
      textAlign={"center"}
      color={"#fff"}
      boxShadow={"0px 0px 100px #eee"}
      p={20}
      borderTopRadius={20}
    >
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Box>
          <Flex justifyContent={"center"} mb={10}>
            <Logo width={40} />
          </Flex>
          <Box fontSize={{lg : 20, md : 20, sm : "15px", base : 15}} width={{lg : 500, md : 400, sm : "100%", base : "100%"}}>
            <Text>
              <b>Address : </b>
              Best hairdresser in Brisbane. Located in the heart of Paddington,
              70 Charlotte St, Paddington, 4064
            </Text>
            <Text py={3}>
              <b>Call</b> : 07 3061 5723
            </Text>
            <Text>
              <b>Email</b> : hello@littlehairnest.com.au
            </Text>
            <Text py={5}>
              <b>Open Hours</b> <br /> Mon 09:00 AM - 05:00 PM Tue - Wed - Thur
              09:00 AM - 08:00 <br />
              PM Fri 09:00 AM - 05:00 PM
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
