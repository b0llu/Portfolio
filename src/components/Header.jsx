import {
  Avatar,
  Box,
  Grid,
  GridItem,
  useMediaQuery,
  WrapItem,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { SideDrawer } from "./SideDrawer";

export const Header = () => {
  const location = useLocation();
  const [isLessThan850] = useMediaQuery("(max-width: 850px)");

  return (
    <Box
      pl={isLessThan850 ? 4 : 14}
      pt={isLessThan850 ? 3 : 4}
      pr={isLessThan850 ? 4 : 14}
      pb={isLessThan850 ? 3 : 4}
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
            src="https://res.cloudinary.com/dtzklid8v/image/upload/v1654504647/Screenshot_2022-05-31_082954_jpyd1u.jpg"
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
        {isLessThan850 ? (
          <SideDrawer />
        ) : (
          <Grid templateColumns="repeat(4, 1fr)" gap={isLessThan850 ? 1 : 8}>
            <Link to={"/"}>
              <GridItem
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                w="100%"
                p={isLessThan850 ? 0 : 2}
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
                p={isLessThan850 ? 0 : 2}
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
                p={isLessThan850 ? 0 : 2}
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
            <Link to={"/blogs"}>
              <GridItem
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                w="100%"
                p={isLessThan850 ? 0 : 2}
                cursor="pointer"
                fontWeight={"700"}
                color={location.pathname === "/blogs" && "blue.500"}
                _hover={{ color: "blue.500" }}
                transition={"0.2s ease-in-out"}
                fontSize={"1.3rem"}
              >
                Blogs
              </GridItem>
            </Link>
          </Grid>
        )}
      </Box>
    </Box>
  );
};
