import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const NavLink = ({ text }) => {
  return (
    <Box>
      <Text
        fontSize={12}
        color={"#ddd"}
        as={motion.p}
        whileHover={{ color: "#fff", fontSize : "15px" }}
      >
        {text}
      </Text>
    </Box>
  );
};

export default NavLink;
