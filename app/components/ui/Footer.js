import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Link from "~/components/ui/Link";

const Footer = () => {
  return (
    <Flex
      justify="space-around"
      bg="black"
      color="white"
      align="center"
      minH="5vh"
    >
      <Text>
        <Link href="https://github.com/jilink/quelle-aide">
          Contribuer sur GitHub
        </Link>
      </Text>
      <Text>
        <Link href="https://www.cozy-codeur.fr/#contact">Me contacter</Link>
      </Text>
    </Flex>
  );
};

export default Footer;
