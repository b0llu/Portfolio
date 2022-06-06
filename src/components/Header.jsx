import { Avatar, Box, Grid, GridItem, WrapItem } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <Box
      pl={14}
      pt={4}
      pr={14}
      pb={4}
      fontSize="1.2rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      position={"fixed"}
      width={"100%"}
      top={0}
      gridArea={"header"}
      bg={"white"}
      boxShadow={"0px 10px 65px -38px rgba(0,0,0,0.75)"}
      zIndex={"2"}
    >
      <Box display={"flex"} alignItems={"center"} gap="1rem">
        <WrapItem>
          <Avatar
            height={"3rem"}
            width={"3rem"}
            name="Ryan Florence"
            src="https://pbs.twimg.com/profile_images/1464407388228780036/NFY5UUPn_400x400.jpg"
          />{" "}
        </WrapItem>
        <Box
          cursor="pointer"
          fontWeight={"700"}
          _hover={{ color: "blue.500" }}
          transition={"0.2s ease-in-out"}
          fontSize={"1.3rem"}
        >
          Dhruv Samant
        </Box>
      </Box>
      <Box display={"flex"}>
        <Grid templateColumns="repeat(4, 1fr)" gap={8}>
          <Link to={"/"}>
            <GridItem
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              w="100%"
              p={2}
              cursor="pointer"
              fontWeight={"700"}
              color={location.pathname === "/" && "blue.500"}
              _hover={{ color: "blue.500" }}
              transition={"0.2s ease-in-out"}
              fontSize={"1.3rem"}
            >
              Home
            </GridItem>
          </Link>
          <Link to={"/about"}>
            <GridItem
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              w="100%"
              p={2}
              cursor="pointer"
              fontWeight={"700"}
              color={location.pathname === "/about" && "blue.500"}
              _hover={{ color: "blue.500" }}
              transition={"0.2s ease-in-out"}
              fontSize={"1.3rem"}
            >
              About
            </GridItem>
          </Link>
          <Link to={"/projects"}>
            <GridItem
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              w="100%"
              p={2}
              cursor="pointer"
              fontWeight={"700"}
              color={location.pathname === "/projects" && "blue.500"}
              _hover={{ color: "blue.500" }}
              transition={"0.2s ease-in-out"}
              fontSize={"1.3rem"}
            >
              Projects
            </GridItem>
          </Link>
          <GridItem
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            w="100%"
            p={2}
            cursor="pointer"
            fontWeight={"700"}
            _hover={{ color: "blue.500" }}
            transition={"0.2s ease-in-out"}
            fontSize={"1.3rem"}
          >
            Blogs
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
