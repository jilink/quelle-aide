import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import QuestionFrame from "~/components/ui/QuestionFrame";
import Button from "~/components/ui/Button";
import Icon from "~/components/ui/Icon";

const Question = ({
  question = "question ?",
  choices = [{ text: "Oui" }, { text: "Non" }],
}) => {
  return (
    <Flex m={5} w={{ base: "100%", md: "40%" }} direction="column">
      <QuestionFrame>
        <Text fontSize="2xl" fontWeight="bold" m={2} mb={4}>
          {question}
        </Text>
        <Flex placeContent="center" flexWrap="wrap" w="100%" my={3}>
          {choices.map((choice) => (
            <Button minW="40%" key={choice.text}>
              {choice.text}
            </Button>
          ))}
        </Flex>
      </QuestionFrame>
      <PreviousButton />
    </Flex>
  );
};

const PreviousButton = ({ onClick }) => {
  return (
    <Button
    disabled={!onClick}
      m={0}
      w="100%"
      bg="error"
      color="white"
      leftIcon={<Icon color="white" icon="ooui:arrow-previous-ltr" />}
      borderTopRadius="0"
      borderBottomRadius="15px"
      border="none"
      fontSize="xl"
      fontWeight="bold"
      onClick={onClick}
    >
      Précédent
    </Button>
  );
};

export default Question;
