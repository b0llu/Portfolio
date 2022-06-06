import { Box, Image, Link } from "@chakra-ui/react";
import { Connect, Divider } from "components";
import { projects } from "data/data";
import { useDocTitle } from "hook/useTitle";
import { MdiGithub, MdiLinkedin, MdiTwitter } from "icons/icon";

export const Projects = () => {
  useDocTitle("Dhruv Samant | Projects");

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
        mb={"5rem"}
        mt={"3rem"}
      >
        <Box textAlign={"center"} fontSize={"2.6rem"} mb={2} fontWeight={"800"}>
          Projects
        </Box>
        <Divider />
        <Box
          textAlign={"center"}
          fontSize={"1.3rem"}
          color={"#555"}
          maxWidth={"60rem"}
          fontWeight={"500"}
        >
          Here you will find some of the personal projects that I created
        </Box>
      </Box>
      <Box m={'1rem'}>
        {projects.map((project) => {
          return (
            <Box
              key={project.id}
              display={"flex"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              gap={"5rem"}
              h={"25rem"}
            >
              <Box h={"20rem"} w={"35rem"} p={"2rem 0 0 0"}>
                <Image
                  borderRadius={"5px"}
                  src={project.image}
                  alt="Project Image"
                />
              </Box>
              <Box
                p={"2rem 0"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"flex-start"}
                maxWidth={"30rem"}
                gap={"1rem"}
                h={"20rem"}
              >
                <Box fontSize={"2rem"}>{project.name}</Box>
                <Box fontWeight={"500"} color={"#555"}>
                  {project.description}
                </Box>
                <Box w={"100%"} mt={"1rem"}>
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
                    p={"8px 2rem"}
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
                    p={"8px 2rem"}
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
      <Box display={"flex"} mb={'1rem'} gap={4}>
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
