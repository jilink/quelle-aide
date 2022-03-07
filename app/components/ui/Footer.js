import React from 'react'
import {Flex, Text} from "@chakra-ui/react"
import Link from "~/components/ui/Link"

const Footer = () => {
  return (
    <Flex justify="space-around" bg="black" color="white" align="center" h="5vh">
      <Text>Développé par <Link href="https://www.cozy-codeur.fr">Cozy Codeur</Link></Text>
      <Text>
        <Link href="https://www.cozy-codeur.fr/#contact">Contacter</Link>
      </Text>
      </Flex>
  )
}

export default Footer