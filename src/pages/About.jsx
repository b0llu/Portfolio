import { Box, useMediaQuery } from "@chakra-ui/react";
import { Connect, Divider } from "components";
import { skills } from "data/data";
import { useDocTitle } from "hook/useTitle";
import { MdiGithub, MdiLinkedin, MdiTwitter } from "icons/icon";

export const About = () => {
  useDocTitle("Dhruv Samant | About");
  const [isLessThan1200] = useMediaQuery("(max-width: 1200px)");
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  const [isLessThan750] = useMediaQuery("(max-height: 750px)");

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gridArea={"main"}
      minHeight={isLessThan1200 || isLessThan750 ? "" : "calc(100vh - 80px)"}
      background={
        "linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg)"
      }
      mt={"80px"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={isLessThan1200 || isLessThan750 ? 6 : 3}
      >
        <Box
          textAlign={"center"}
          fontSize={isLessThan800 ? "1.8rem" : "2.6rem"}
          mb={2}
          fontWeight={"800"}
        >
          About Me
        </Box>
        <Divider />
        <Box
          textAlign={"center"}
          fontSize={isLessThan800 ? "1rem" : "1.3rem"}
          color={"#555"}
          maxWidth={"60rem"}
          fontWeight={"500"}
          ml={4}
          mr={4}
        >
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </Box>
      </Box>
      <Box
        display={"flex"}
        gap={isLessThan800 ? "1rem" : "10rem"}
        w={"75%"}
        flexDirection={isLessThan800 ? "column" : "row"}
        alignItems={isLessThan800 ? "center" : "flexStart"}
        justifyContent={"center"}
        mt={isLessThan800 ? "3rem" : "5rem"}
      >
        <Box
          w={isLessThan800 ? "20rem" : "30rem"}
          mb={isLessThan800 ? "2rem" : "5rem"}
          display={isLessThan800 && "flex"}
          flexDirection={isLessThan800 && "column"}
          alignItems={isLessThan800 && "center"}
          justifyContent={isLessThan800 && "center"}
        >
          <Box fontSize={"1.6rem"} mb={"1rem"}>
            Get to know me!
          </Box>
          <Box
            fontSize={isLessThan800 ? "1rem" : "1.3rem"}
            color={"#555"}
            mb={"1rem"}
            fontWeight={"500"}
            textAlign={isLessThan800 && "center"}
          >
            I'm a{" "}
            <Box display={"inline-block"} fontWeight={600} color={"blue.500"}>
              Frontend Web Developer
            </Box>{" "}
            building the Front-end of Websites and Web Applications that leads
            to the success of the overall product. Check out some of my work in
            the Projects section.
          </Box>
          <Box
            fontSize={isLessThan800 ? "1rem" : "1.3rem"}
            color={"#555"}
            fontWeight={"500"}
            textAlign={isLessThan800 && "center"}
          >
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </Box>
        </Box>
        <Box
          w={isLessThan800 ? "20rem" : "30rem"}
          display={isLessThan800 && "flex"}
          flexDirection={isLessThan800 && "column"}
          alignItems={isLessThan800 && "center"}
          justifyContent={isLessThan800 && "center"}
          mb={"3rem"}
        >
          <Box fontSize={"1.6rem"} mb={"1rem"}>
            My Skills
          </Box>
          <Box
            display={"flex"}
            alignItems={isLessThan800 && "center"}
            justifyContent={isLessThan800 && "center"}
            gap={3}
            flexWrap={"wrap"}
          >
            {skills.map((skill) => {
              return (
                <Box
                  key={skill}
                  bgColor={"#99999933"}
                  pt={2.5}
                  pb={2.5}
                  pl={4}
                  pr={4}
                  fontWeight={600}
                  borderRadius={"5px"}
                  color={"#666"}
                  letterSpacing={"1px"}
                  _hover={{ color: "blue.500" }}
                  transition={"0.2s ease-in-out"}
                  fontSize={isLessThan800 && "8px"}
                >
                  {skill}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
      {isLessThan800 ? (
        <Box display={"flex"} mb={"1rem"} gap={4}>
          <a href="https://github.com/B0llu" target={"_blank"}>
            <MdiGithub />
          </a>
          <a href="https://twitter.com/TheBestDhruv" target={"_blank"}>
            <MdiTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/the-best-dhruv/"
            target={"_blank"}
          >
            <MdiLinkedin />
          </a>
        </Box>
      ) : (
        <Connect />
      )}
    </Box>
  );
};
