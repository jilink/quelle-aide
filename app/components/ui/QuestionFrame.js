import React from 'react'
import {Flex} from '@chakra-ui/react'

const QuestionFrame = ({children}) => {
  return (
    <Flex
      mb={0}
      p={5}
      color="white"
      background="questionBg"
      direction="column"
      align="center"
      borderTopRadius="15px"
    >
      {children}
    </Flex>
  );
}

export default QuestionFrame