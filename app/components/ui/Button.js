import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

const Button = ({ children, ...props }) => {
  return (
    <ChakraButton
      borderRadius="25px"
      border="1px solid black"
      boxShadow="dark-lg"
      bg="white"
      color="sunny"
      minH="50px"
      m={2}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
