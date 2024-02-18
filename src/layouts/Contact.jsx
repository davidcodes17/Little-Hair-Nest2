import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Image,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Send } from "iconsax-react";
import React from "react";

const Contact = () => {
  return (
    <Box bg={"brown"} p={{ lg: 20, md: "15px", sm: 10, base: 5 }}>
      <Heading textAlign={"center"} py={9} color={"#fff"}>
        Contact Us
      </Heading>
      <Grid
        gridTemplateColumns={{
          lg: "1fr 1fr ",
          md: "1fr 1fr",
          sm: "1fr",
          base: "1fr",
        }}
      justifyContent={"center"}
        color={"#fff"}
      >
        <Flex justifyContent={"center"}>
          <Image
            src="/map.png"
            width={{ lg: 400, md: 400, sm: 400, base: 300 }}
            height={{ lg: 450, md: 400, sm: 400, base: 300 }}
            borderRadius={20}
          />
        </Flex>
        <Flex justifyContent={"center"} pt={{lg : 0, md : 0, sm : 10, base : 10}}>
          <Box p={{ lg: 10, md: 10, sm: 5, base: 5 }} fontSize={12}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                bg={"#fff"}
                color={"#000"}
                width={{ lg: 400, md: 400, sm: 400, base: 300 }}
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
                width={{ lg: 400, md: 400, sm: 400, base: 300 }}
                placeholder="+234"
              />
            </FormControl>
            <FormControl>
              <FormLabel mt={2}>Email Address</FormLabel>
              <Input
                bg={"#fff"}
                color={"#000"}
                width={{ lg: 400, md: 400, sm: 400, base: 300 }}
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
                width={{ lg: 400, md: 400, sm: 400, base: 300 }}
                placeholder="Type Message Here..."
              />
            </FormControl>
            <Button
              rightIcon={<Send />}
              width={{ lg: 400, md: 400, sm: 400, base: "100%" }}
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
      </Grid>
    </Box>
  );
};

export default Contact;
