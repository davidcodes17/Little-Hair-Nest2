import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Send } from "iconsax-react";
import React from "react";

const Contact = () => {
  return (
    <Box bg={"brown"} p={20}>
        <Heading textAlign={"center"} color={"#fff"}>Contact Us</Heading>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        gap={10}
        color={"#fff"}
      >
        <Image src="/map.png" width={400} height={450} borderRadius={20} />
        <Box p={10} fontSize={12}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              bg={"#fff"}
              color={"#000"}
              width={400}
              fontSize={12}
              placeholder="John Doe"
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Phone Number</FormLabel>
            <Input
              bg={"#fff"}
              fontSize={12}
              color={"#000"}
              width={400}
              placeholder="+234"
            />
          </FormControl>
          <FormControl>
            <FormLabel mt={2}>Email Address</FormLabel>
            <Input
              bg={"#fff"}
              color={"#000"}
              width={400}
              fontSize={12}
              placeholder="johndoe@gmail.com"
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Message</FormLabel>
            <Textarea
              bg={"#fff"}
              color={"#000"}
              fontSize={12}
              width={400}
              placeholder="Type Message Here..."
            />
          </FormControl>
          <Button
            rightIcon={<Send />}
            width={"100%"}
            my={3}
            height={12}
            bg={"#fff"}
            color={"brown"}
            _hover={"none"}
          >
            Send
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
