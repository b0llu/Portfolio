import { Box, Button, WrapItem } from "@chakra-ui/react";
import { Connect } from "components";
import { MdiGithub } from "icons/icon";

export const Home = () => {
  return (
    <Box
      gridArea={"main"}
      minHeight={"calc(100vh - 80px)"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      background={
        "linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg)"
      }
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        ml={"5%"}
        mr={"5%"}
      >
        <Box
          fontSize={"4rem"}
          letterSpacing={"3px"}
          textTransform={"uppercase"}
          fontWeight={"700"}
          mb={8}
          textAlign={"center"}
        >
          Hey, I'm Dhruv Samant
        </Box>
        <Box
          maxWidth={"50rem"}
          textAlign={"center"}
          fontWeight={"400"}
          fontSize={"1.3rem"}
        >
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </Box>
        <WrapItem mt={14}>
          <Button
            p={5}
            colorScheme={"blue"}
            fontWeight={"500"}
            fontSize={"1.2rem"}
          >
            Projects
          </Button>
        </WrapItem>
      </Box>
      <Connect />
    </Box>
  );
};
