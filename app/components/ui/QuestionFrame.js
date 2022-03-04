import React from 'react'
import {Flex} from '@chakra-ui/react'

const QuestionFrame = ({children}) => {
  return (
    <Flex w={{base:"100%", md:"40%"}} m={5} p={5} color="white" background="questionBg" direction="column" align="center">
      {children}
    </Flex>
  )
}

export default QuestionFrame