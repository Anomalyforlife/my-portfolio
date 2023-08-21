import {
  Box,
  Flex,
  Button,
  Image,
  Center,
  VStack,
  Text,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import "../css/Navbar.css";
import { ImGithub } from "react-icons/im";

export default function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);

  function PopMenu() {
    return (
      <>
        <Box
          w={"100vw"}
          h={"100vh"}
          zIndex={9999}
          position={"fixed"}
          bg={"rgba(20,20,20,0.6)"}
          className={isOpen ? "onAnimate" : "offAnimate"}
          top={0}
        > 
          <Box position={"absolute"} w={"100%"} h={"100%"}>
          <Center h={"100%"} w={"100%"}>
          <VStack>

            <Box className="spinner-container">
              <Box className="spinner">
              <Box className="spinner">
                <Box className="spinner">
                  <Box className="spinner">
                    <Box className="spinner">
                        <Box className="spinner"></Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
              <Box
                onClick={() => (window.location.href = "/contact")}
                className="button"
              >
                Contact-Me
                <Text className="hover-text">Contact-Me</Text>
              </Box>
              <Button className="githubButton" onClick={() =>
                  (window.location.href = "https://github.com/Anomalyforlife")
                }>
                <ImGithub className="githubIcon"/>
                </Button>
            </VStack>
            
          </Center>
          </Box>
        </Box>
      </>
    );
  }

  return (
    <>
      <PopMenu />
      <Box px={4} className="navbar">
        <Flex h={24} alignItems={"center"}>
          <Image
            src={"../src/assets/whiteLogo.png"}
            alt="Logo"
            width={70}
            className="logoNavbar"
            onClick={() => {
              window.location.href = "/";
            }}
          />
          <Box className="rightZone">
            <Button
              zIndex={10000}
              right={4}
              variant="ghost"
              width={70}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {isOpen ? <CloseIcon /> : <HamburgerIcon />}
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
