import React from 'react'
import {Flex, Text} from "@chakra-ui/react"
import {ButtonLink} from "~/components/ui/Button";

const Page = ({children, title, subtitle, ...props}) => {
  return (
    <Flex p={5} color="white" background="pageBg" minH="100vh" direction="column" align="center" {...props}>
      <Text fontSize="5xl" fontWeight="bold">
        {title}
      </Text>
      <Text fontSize="sm">{subtitle}</Text>
      {children}
      <ButtonLink minW="80%" to="/">Tout recommencer</ButtonLink>

    </Flex>
  );
}

export default Page