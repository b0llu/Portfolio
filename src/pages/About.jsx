import { Box } from "@chakra-ui/react";
import { skills } from "data/data";

export const About = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gridArea={"main"}
      minHeight={"calc(100vh - 80px)"}
      background={
        "linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg)"
      }
    >
      <Box>
        <Box textAlign={"center"} fontSize={"2.6rem"} mb={5} fontWeight={"800"}>
          About Me
        </Box>
        <Box
          textAlign={"center"}
          fontSize={"1.1rem"}
          color={"#555"}
          w={"55rem"}
          fontWeight={"500"}
        >
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </Box>
      </Box>
      <Box
        display={"flex"}
        gap={"10rem"}
        w={"75%"}
        alignItems={"flexStart"}
        justifyContent={"center"}
        mt={"5rem"}
      >
        <Box w={"30rem"} mb={'13rem'}>
          <Box fontSize={"1.6rem"} mb={"1rem"}>
            Get to know me!
          </Box>
          <Box
            fontSize={"1.2rem"}
            color={"#555"}
            mb={"1rem"}
            fontWeight={"500"}
          >
            I'm a{" "}
            <Box display={"inline-block"} fontWeight={600}>
              Frontend Web Developer
            </Box>{" "}
            building the Front-end of Websites and Web Applications that leads
            to the success of the overall product. Check out some of my work in
            the Projects section.
          </Box>
          <Box fontSize={"1.2rem"} color={"#555"} fontWeight={"500"}>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </Box>
        </Box>
        <Box w={"30rem"}>
          <Box fontSize={"1.6rem"} mb={"1rem"}>
            My Skills
          </Box>
          <Box display={"flex"} gap={3} flexWrap={"wrap"}>
            {skills.map((skill) => {
              return (
                <Box
                  bgColor={"#99999933"}
                  pt={2.5}
                  pb={2.5}
                  pl={4}
                  pr={4}
                  fontWeight={600}
                  borderRadius={"5px"}
                  color={"#666"}
                  letterSpacing={"1px"}
                >
                  {skill}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
