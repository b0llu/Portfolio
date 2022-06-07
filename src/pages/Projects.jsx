import { Box, Image, Link, useMediaQuery } from "@chakra-ui/react";
import { Divider } from "components";
import { projects } from "data/data";
import { useDocTitle } from "hook/useTitle";
import { MdiGithub, MdiLinkedin, MdiTwitter } from "icons/icon";

export const Projects = () => {
  useDocTitle("Dhruv Samant | Projects");
  const [isLessThan1000] = useMediaQuery("(max-width: 1000px)");

  return (
    <Box
      gridArea={"main"}
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
        mb={isLessThan1000 ? "0" : "5rem"}
        mt={isLessThan1000 ? 6 : 3}
      >
        <Box
          textAlign={"center"}
          fontSize={isLessThan1000 ? "1.8rem" : "2.6rem"}
          mb={2}
          fontWeight={"800"}
        >
          Projects
        </Box>
        <Divider />
        <Box
          textAlign={"center"}
          fontSize={isLessThan1000 ? '1rem' : "1.3rem"}
          color={"#555"}
          maxWidth={"60rem"}
          fontWeight={"500"}
        >
          Here you will find some of the personal projects that I created
        </Box>
      </Box>
      <Box m={"1rem"}>
        {projects.map((project) => {
          return (
            <Box
              key={project.id}
              display={"flex"}
              flexDirection={isLessThan1000 && "column"}
              alignItems={isLessThan1000 ? "center" : "flex-start"}
              justifyContent={"center"}
              gap={isLessThan1000 ? "0" : "5rem"}
              h={isLessThan1000 ? "max-content" : "25rem"}
              mb={isLessThan1000 && "3rem"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                h={isLessThan1000 ? "10rem" : "20rem"}
                w={isLessThan1000 ? "20rem" : "35rem"}
                p={"2rem 0 0 0"}
              >
                <Image
                  borderRadius={"5px"}
                  src={project.image}
                  alt="Project Image"
                />
              </Box>
              <Box
                p={isLessThan1000 ? "1rem 0" : "2rem 0"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"flex-start"}
                maxWidth={"30rem"}
                gap={isLessThan1000 ? "8px" : "1rem"}
                h={isLessThan1000 ? "15rem" : "20rem"}
                mt={isLessThan1000 && "1rem"}
              >
                <Box
                  w={"100%"}
                  fontSize={isLessThan1000 ? "1.6rem" : "2rem"}
                  textAlign={isLessThan1000 && "center"}
                >
                  {project.name}
                </Box>
                <Box
                  fontWeight={"500"}
                  color={"#555"}
                  textAlign={isLessThan1000 && "center"}
                  m={isLessThan1000 && "0 1rem"}
                  fontSize={isLessThan1000 ? "1rem" : ""}
                >
                  {project.description}
                </Box>
                <Box
                  w={"100%"}
                  mt={"1rem"}
                  display={isLessThan1000 && "flex"}
                  alignItems={isLessThan1000 && "center"}
                  justifyContent={isLessThan1000 && "center"}
                >
                  <Link
                    target={"_blank"}
                    href={project.live}
                    _hover={{
                      textDecoration: "none",
                      backgroundColor: "blue.500",
                      color: "#fff",
                      transition: "0.2s ease-in-out",
                    }}
                    border={"1px solid"}
                    borderColor={"blue.500"}
                    p={isLessThan1000 ? "4px 8px" : "8px 2rem"}
                    borderRadius={"5px"}
                    fontWeight={"500"}
                  >
                    Live Demo
                  </Link>
                  <Link
                    target={"_blank"}
                    href={project.github}
                    _hover={{
                      textDecoration: "none",
                      backgroundColor: "blue.500",
                      color: "#fff",
                      transition: "0.2s ease-in-out",
                    }}
                    border={"1px solid"}
                    borderColor={"blue.500"}
                    p={isLessThan1000 ? "4px 8px" : "8px 2rem"}
                    borderRadius={"5px"}
                    fontWeight={"500"}
                    ml={"2rem"}
                  >
                    Github
                  </Link>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box display={"flex"} mb={"1rem"} gap={4}>
        <a href="https://github.com/B0llu" target={"_blank"}>
          <MdiGithub />
        </a>
        <a href="https://twitter.com/TheBestDhruv" target={"_blank"}>
          <MdiTwitter />
        </a>
        <a href="https://www.linkedin.com/in/the-best-dhruv/" target={"_blank"}>
          <MdiLinkedin />
        </a>
      </Box>
    </Box>
  );
};
