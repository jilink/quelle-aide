import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import QuestionFrame from "~/components/ui/QuestionFrame";
import Button, { ButtonLink } from "~/components/ui/Button";
import Icon from "~/components/ui/Icon";

const Question = ({
  question = {
    question: "Désolé cette partie est manquante pour l'instant",
    choices: [],
  },
  questionHistory,
  setQuestionHistory,
  setCurrentQuestion,
  questions = {},
}) => {
  const handleClick = (choice) => {
    if (choice.nextQuestion) {
      const next = choice.nextQuestion;
      setQuestionHistory([...questionHistory, next]);
      setCurrentQuestion(questions[next]);
    }
  };
  return (
    <Flex m={5} w={{ base: "100%", md: "40%" }} direction="column">
      <QuestionFrame>
        <Text fontSize="2xl" fontWeight="bold" m={2} mb={4}>
          {question.question}
        </Text>
        <Flex placeContent="center" flexWrap="wrap" w="100%" my={3}>
          {question.choices.map((choice) => (
            <ButtonLink
              to={choice.redirect}
              onClick={choice.redirect ? null : () => handleClick(choice)}
              w="40%"
              key={choice.text}
            >
              {choice.text}
            </ButtonLink>
          ))}
        </Flex>
      </QuestionFrame>
      <PreviousButton
        questions={questions}
        setCurrentQuestion={setCurrentQuestion}
        questionHistory={questionHistory}
        setQuestionHistory={setQuestionHistory}
      />
    </Flex>
  );
};

const PreviousButton = ({
  questions,
  questionHistory = [],
  setQuestionHistory,
  setCurrentQuestion,
}) => {
  const handleClick = () => {
    if (questionHistory.length > 1) {
      setCurrentQuestion(
        questions[questionHistory[questionHistory.length - 2]]
      );
      setQuestionHistory(questionHistory.slice(0, -1));
    }
  };
  return (
    <Button
      disabled={questionHistory.length <= 1}
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
      onClick={handleClick}
    >
      Précédent
    </Button>
  );
};

export default Question;
