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

const SubmitButton = ({ children, ...props }) => {
  return (
    <ChakraButton
      borderRadius="25px"
      boxShadow="dark-lg"
      bg="success"
      color="black"
      minH="50px"
      m={2}
      type="submit"
      w="100%"
      fontWeight="bold"
      fontSize="xl"
      textTransform="uppercase"
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export { ButtonLink, SubmitButton };
export default Button;
