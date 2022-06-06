import { Box, Image, Link } from "@chakra-ui/react";
import { Divider } from "components";
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
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.hashnode.com", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: query }),
      });
      const data = await response.json();
      if (data) {
        setBlogs(data.data?.user?.publication?.posts);
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
          Blogs
        </Box>
        <Divider />
        <Box
          textAlign={"center"}
          fontSize={"1.3rem"}
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
              alignItems={"flex-start"}
              justifyContent={"center"}
              gap={"5rem"}
              h={"25rem"}
            >
              <Box h={"25rem"} w={"25rem"} p={"2rem 0 0 0"}>
                <Image
                  borderRadius={"5px"}
                  src={blog.coverImage}
                  alt={blog.slug}
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
                <Box fontSize={"2rem"}>{blog.title}</Box>
                <Box fontWeight={"500"} color={"#555"}>
                  {blog.brief}
                </Box>
                <Box w={"100%"} mt={"1rem"}>
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
                    p={"8px 2rem"}
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
