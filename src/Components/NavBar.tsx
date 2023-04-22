import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/lsso.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>LSSO</Text>
    </HStack>
  );
};

export default NavBar;
