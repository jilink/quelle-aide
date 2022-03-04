import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
import { Link } from "remix";

const ButtonLink = ({ children, to="#", ...props }) => {
  return (
    <Link to={to}>
      <Button {...props}>{children}</Button>
    </Link>
  );
};

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

export { ButtonLink };
export default Button;
