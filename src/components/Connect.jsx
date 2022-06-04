import { Box } from "@chakra-ui/react";
import { MdiGithub, MdiLinkedin, MdiTwitter } from "icons/icon";

export const Connect = () => {
  return (
    <Box display={"flex"} position={"fixed"} bottom={"1rem"} gap={4}>
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
  );
};
