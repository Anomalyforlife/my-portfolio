import {
  Box,
  Center,
  HStack,
  Text,
  VStack,
  Image,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import "../css/Landing.css";  

export default function Landing() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isLargerThan450] = useMediaQuery("(min-width: 450px)");
  return (
    <Box w={"100vw"} h={"100vh"} position={"fixed"}>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz@1,6..96&display=swap" rel="stylesheet"/>

      <Box className="verticalCenter">
        <Stack direction={isLargerThan800 ? "row" : "column"}>
          <Box left={isLargerThan800?"-20%":"0"} position={"relative"}>
            <HStack h="100%">
              <Box className="verticalLine" visibility={isLargerThan800?"visible":"hidden"} left={"-10%"} position={"relative"}/>
              <Box>
                <Text className="reverseShadowText textFont" fontSize={"lg"}>Hi, my name is</Text>
                <Stack direction={isLargerThan800 ? "row" : "column"} p={0} m={0}>
                <Text className="shadowText textFont" fontWeight={"bold"} fontSize={"5xl"} m={0}>Simone</Text>
                <Text className="shadowText textFont" fontWeight={"bold"} fontSize={"5xl"} mt={isLargerThan800?0:-6}>Italiano</Text>
                </Stack>
              </Box>
            </HStack>
          </Box>
          <Center>
            <Box
              className="blob"
              w={isLargerThan800 ? "20vw" : "40vw"}
              h={isLargerThan800 ? "20vw" : "40vw"}
              left={isLargerThan800? "10vw" : "0vw"}
              top={isLargerThan800? "0" : "3vh"}
            />
          </Center>
        </Stack>
      </Box>
    </Box>
  );
}
