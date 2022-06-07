import { Box, Button, useMediaQuery, WrapItem } from "@chakra-ui/react";
import { Connect } from "components";
import { useDocTitle } from "hook/useTitle";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  useDocTitle("Dhruv Samant | Home");
  const [isLessThan600] = useMediaQuery("(max-width: 600px)");

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
      mt={"80px"}
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
          fontSize={isLessThan600 ? "2rem" : "4rem"}
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
          fontWeight={"500"}
          fontSize={isLessThan600 ? "1rem" : "1.3rem"}
          color={"#555"}
        >
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </Box>
        <WrapItem mt={isLessThan600 ? 10 : 14}>
          <Button
            pt={isLessThan600 ? "8px" : 5}
            pb={isLessThan600 ? "8px" : 5}
            pl={isLessThan600 ? "1rem" : 5}
            pr={isLessThan600 ? "1rem" : 5}
            colorScheme={"blue"}
            fontWeight={"500"}
            fontSize={isLessThan600 ? "1rem" : "1.2rem"}
            onClick={() => navigate("/projects")}
          >
            Projects
          </Button>
        </WrapItem>
      </Box>
      <Connect />
    </Box>
  );
};
