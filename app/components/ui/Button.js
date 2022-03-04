import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
import { Link } from "remix";

const ButtonLink = ({ children,w, to="#", ...props }) => {
  return (
    <Link style={{minWidth:w, margin:"5px"}} to={to}>
      <Button minW="100%" {...props}>{children}</Button>
    </Link>
  );
};

const Button = ({ children, ...props }) => {
  return (
    <ChakraButton
      borderRadius="25px"
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
