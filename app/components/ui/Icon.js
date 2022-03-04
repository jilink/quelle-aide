import React from 'react'
import {Icon as ChakraIcon} from '@chakra-ui/react'
import {Icon as Iconify} from '@iconify/react'

const Icon = ({icon, ...props}) => {
  return (
    <ChakraIcon
      icon={icon}
      as={Iconify}
      {...props}/>
  )
}

export default Icon