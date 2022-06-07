import { Box, Image, Link, useMediaQuery } from "@chakra-ui/react";
import { Divider } from "components";
import { useDocTitle } from "hook/useTitle";
import { MdiGithub, MdiLinkedin, MdiTwitter } from "icons/icon";
import { useEffect, useState } from "react";

const query = `
{
  user(username:"b0llu") {
    publication {
      posts {
        title
        brief
        slug
        cuid
        coverImage
      }
    }
  }
}`;

export const Blogs = () => {
  const [isLessThan1000] = useMediaQuery("(max-width: 1000px)");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false)

  useDocTitle("Dhruv Samant | Blogs");

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.hashnode.com", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: query }),
      });
      setLoading(true)
      const data = await response.json();
      if (data) {
        setBlogs(data.data?.user?.publication?.posts);
        setLoading(false)
      }
    })();
  }, []);

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
      mt={loading ? "0" : "80px"}
      h={loading ?? "100vh"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mb={isLessThan1000 ? "2rem" : "3rem"}
        mt={isLessThan1000 ? 6 : 3}
      >
        <Box
          textAlign={"center"}
          fontSize={isLessThan1000 ? "1.8rem" : "2.6rem"}
          mb={2}
          fontWeight={"800"}
        >
          Blogs
        </Box>
        <Divider />
        <Box
          textAlign={"center"}
          fontSize={isLessThan1000 ? "1rem" : "1.3rem"}
          color={"#555"}
          maxWidth={"60rem"}
          fontWeight={"500"}
        >
          Here you will find some of the Blogs that I have written
        </Box>
      </Box>
      <Box m={"1rem"}>
        {blogs.map((blog) => {
          return (
            <Box
              key={blog.cuid}
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
                h={isLessThan1000 ? "10rem" : "25rem"}
                w={isLessThan1000 ? "20rem" : "25rem"}
              >
                <Image
                  borderRadius={"5px"}
                  src={blog.coverImage}
                  alt={blog.slug}
                />
              </Box>
              <Box
                p={isLessThan1000 ? "1rem 0" : "2rem 0"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                maxWidth={"30rem"}
                gap={isLessThan1000 ? "8px" : "1rem"}
                h={"100%"}
                mt={isLessThan1000 && "1rem"}
              >
                <Box
                  w={"100%"}
                  fontSize={isLessThan1000 ? "1.6rem" : "2rem"}
                  textAlign={isLessThan1000 && "center"}
                >
                  {blog.title}
                </Box>
                <Box
                  fontWeight={"500"}
                  color={"#555"}
                  textAlign={isLessThan1000 && "center"}
                  m={isLessThan1000 && "0 1rem"}
                  fontSize={isLessThan1000 ? "1rem" : ""}
                >
                  {blog.brief}
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
                    href={`https://dhruvsamant.hashnode.dev/${blog.slug}`}
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
                    Check it out
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
