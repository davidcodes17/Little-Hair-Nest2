import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import ServCompo from "../components/ServCompo";

const Services = () => {
  return (
    <Box>
      <Flex>
        <Box>
          <Heading fontWeight={400} fontSize={60}>
            Our Services
          </Heading>
          <Text fontSize={12} width={400}>
            Beyond haircuts, discover a comprehensive range of services, from
            cloloring to extensions and many more...
          </Text>
          <Flex gap={10}>
            <ServiceCard
              image={
                "https://i0.wp.com/www.hadviser.com/wp-content/uploads/2020/04/3-hairstyle-with-caramel-highlights-B6vNM4Qg7oc.jpg?resize=1080%2C1350&ssl=1"
              }
              text={"Hair Cuts"}
            />
            <ServiceCard
              image={
                "https://i1.wp.com/www.hadviser.com/wp-content/uploads/2020/04/30-glossy-dark-hair-with-caramel-highlights-B7RIiodH8WG.jpg?w=878&ssl=1"
              }
              text={"Hair Styles"}
            />
            <ServiceCard
              image={
                "https://i1.wp.com/www.hadviser.com/wp-content/uploads/2020/04/39-dark-brown-hair-color-B8vBpgxJnbg.jpg?w=715&ssl=1"
              }
              text={"Coloring"}
            />
          </Flex>
          <Box>
            <Heading fontWeight={500} textTransform={"capitalize"}>
              Senior Stylist
            </Heading>
            {/* <Flex> */}
            <Box></Box>
            <Text pt={5}>Colour</Text>
            <Box py={2} width={500}>
              <ServCompo number={150} text={"Foils 1/4 head"} />
              <ServCompo number={200} text={"Foils 1/2 head"} />
              <ServCompo number={225} text={"Foils 3/4 head"} />
              <ServCompo number={240} text={"Foils Full head"} />
              <ServCompo number={120} text={"Colour Retouch"} />
              <ServCompo number={140} text={"Colour Short"} />
              <ServCompo number={155} text={"Colour Medium"} />
              <ServCompo number={180} text={"Colour Long from"} />
              <ServCompo number={160} text={"Bespoke short"} />
              <ServCompo number={185} text={"Bespoke medium"} />
              <ServCompo number={"215"} text={"Bespoke long"} />
              <ServCompo number={"160"} text={"Balayage partial from"} />
              <ServCompo number={"200"} text={"Balayage full head from"} />
            </Box>
            {/* </Flex> */}

            <Text>Cutting</Text>
            <Box py={2} width={500}>
              <ServCompo number={120} text={"Stylecut & blowdry"} />
              <ServCompo number={140} text={"Stylecut & blowdrylong from"} />
              <ServCompo number={99} text={"Curly Cut natural dry"} />
              <Box>
                <Text>Treatment Rituals</Text>
                <ServCompo
                  number={240}
                  text={
                    "Treat you hair with a moisturizing hair ritual and unwind with a scalp massage"
                  }
                />
                <ServCompo
                  number={120}
                  text={
                    "Scalp Spa Facial scalp exfoliation, head massage, hair treatment, hot towel service & blowdry style to finish"
                  }
                />
                <Box>
                  <Text mt={5}>Targeted result driven treatments </Text>
                  <ServCompo
                    number={15}
                    text={"On protect - colour additive bond protection"}
                  />
                  <ServCompo
                    number={35}
                    text={
                      "K18- pre and post colour service or stand alone treatment to protect and restore hair integrity"
                    }
                  />
                  <ServCompo number={"55"} text={"Blowdry Short"} />
                  <ServCompo number={"POA"} text={"Event styling"} />

                  <Box>
                    <Text>
                      <b style={{ fontSize: 20 }}>Smothing Service</b> : POA
                      please book in for an obligation free consultation and
                      quote
                    </Text>
                    <Text>
                      Express smoothing service (Softens hair, eliminates frizz,
                      controls volume) <br /> Excellence smoothing service
                      (straightens hair, giving it an extremely natural look and
                      soft texture)
                    </Text>
                    <Text py={5}>
                      <b style={{ fontSize: 20 }}>EMERGING STYLIST</b> - our
                      talented team is always growing. Our emerging stylists are
                      provided with leading industry and in salon training and
                      will always be fully qualified at all services they are
                      performing in salon. Please specify upon booking if you
                      would like to see one of our emerging stylists at your
                      next visit.
                    </Text>
                    <Box>
                      <Text pt={5}>Colour</Text>
                      <Box py={2} width={500}>
                        <ServCompo number={145} text={"Foils 1/4 head"} />
                        <ServCompo number={180} text={"Foils 1/2 head"} />
                        <ServCompo number={205} text={"Foils 3/4 head"} />
                        <ServCompo number={220} text={"Foils Full head"} />
                        <ServCompo number={120} text={"Colour Retouch"} />
                        <ServCompo number={140} text={"Colour Short"} />
                        <ServCompo number={155} text={"Colour Medium"} />
                        <ServCompo number={180} text={"Colour Long from"} />
                        <ServCompo number={160} text={"Bespoke short"} />
                        <ServCompo number={185} text={"Bespoke medium"} />
                        <ServCompo number={"215"} text={"Bespoke long"} />
                        <ServCompo
                          number={"140"}
                          text={"Balayage partial from"}
                        />
                        <ServCompo
                          number={"180"}
                          text={"Balayage maintain from"}
                        />
                        <ServCompo
                          number={"240"}
                          text={"Balayage full head from"}
                        />
                        <Text pt={5}>Colour</Text>
                        <ServCompo number={"105"} text={"Stylecut & blowdry"} />
                        <ServCompo
                          number={"115"}
                          text={"Stylecut & blowdry long from"}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Services;
