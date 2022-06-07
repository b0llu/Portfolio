import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Radio,
  Stack,
  Button,
  RadioGroup,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import { CilHamburgerMenu, MaterialSymbolsClose } from "icons/icon";
import { Link, useLocation } from "react-router-dom";

export const SideDrawer = () => {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <CilHamburgerMenu onClick={onOpen} />
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
        <DrawerContent>
          <DrawerBody p={0}>
            <Link to={"/"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-end"}
                w="100%"
                p={3}
                cursor="pointer"
                fontWeight={"400"}
                color={location.pathname === "/" && "blue.500"}
                _hover={{ color: "blue.500" }}
                transition={"0.2s ease-in-out"}
                fontSize={"1.3rem"}
                borderBottom={"1px solid"}
                borderColor={"#cecece"}
                onClick={onClose}
              >
                Home
              </Box>
            </Link>
            <Link to={"/about"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-end"}
                w="100%"
                p={3}
                cursor="pointer"
                fontWeight={"400"}
                color={location.pathname === "/about" && "blue.500"}
                _hover={{ color: "blue.500" }}
                transition={"0.2s ease-in-out"}
                fontSize={"1.3rem"}
                borderBottom={"1px solid"}
                borderColor={"#cecece"}
                onClick={onClose}
              >
                About
              </Box>
            </Link>
            <Link to={"/projects"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-end"}
                w="100%"
                p={3}
                cursor="pointer"
                fontWeight={"400"}
                color={location.pathname === "/projects" && "blue.500"}
                _hover={{ color: "blue.500" }}
                transition={"0.2s ease-in-out"}
                fontSize={"1.3rem"}
                borderBottom={"1px solid"}
                borderColor={"#cecece"}
                onClick={onClose}
              >
                Projects
              </Box>
            </Link>
            <Link to={"/blogs"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-end"}
                w="100%"
                p={3}
                cursor="pointer"
                fontWeight={"400"}
                color={location.pathname === "/blogs" && "blue.500"}
                _hover={{ color: "blue.500" }}
                transition={"0.2s ease-in-out"}
                fontSize={"1.3rem"}
                borderBottom={"1px solid"}
                borderColor={"#cecece"}
                onClick={onClose}
              >
                Blogs
              </Box>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
