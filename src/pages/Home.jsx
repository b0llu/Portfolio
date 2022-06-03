import { Box, Button, WrapItem } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Box
      gridArea={"main"}
      minHeight={"91.5vh"}
      bgColor={"rgb(238 238 238 / 92%)"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={"15%"}
      >
        <Box
          fontSize={"4rem"}
          letterSpacing={"3px"}
          textTransform={"uppercase"}
          fontWeight={"700"}
          mb={8}
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
            colorScheme="blue"
            fontWeight={"500"}
            fontSize={"1.2rem"}
          >
            Projects
          </Button>
        </WrapItem>
      </Box>
    </Box>
  );
};
