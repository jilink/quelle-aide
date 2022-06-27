import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";

const Link = ({ children, ...props }) => {
  return (
    <ChakraLink
      textDecoration="underline"
      fontWeight="bold"
      color="pageBg"
      {...props}
    >
      {children}
    </ChakraLink>
  );
};

export default Link;
