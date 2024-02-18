import { Box, Button, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import NavLink from "../components/NavLink";
import Logo from "../components/Logo";
import { HambergerMenu } from "iconsax-react";

const Header = () => {
  return (
    <Box>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        bg={"transparent"}
        backdropFilter={"blur(20px)"}
        boxShadow={"0px 0px 40px #000"}
        px={5}
        py={3}
      >
        <Flex gap={5} alignItems={"center"} display={{lg : "flex", md : "flex", sm : "none", base : "none"}}>
          <NavLink text={"Home"} />
          <NavLink text={"About Us"} />
          <NavLink text={"Our Team"} />
          <NavLink text={"Blog"} />
        </Flex>
        <Logo width={50} height={50} />
        <Flex gap={10} alignItems={"center"}>
          <Button
            bg={"#fff"}
            color={"#000"}
            fontWeight={400}
            _hover={"none"}
            fontSize={12}
            height={10}
            display={{lg : "block", md : "block", sm : "none", base : "none"}}
            borderRadius={40}
          >
            Contact Us
          </Button>
          <IconButton
            icon={<HambergerMenu color="#fff" />}
            borderRadius={400}
            _hover={"none"}
            bg={"#000"}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
