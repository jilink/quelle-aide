import {useState} from 'react';
import Page from "~/components/ui/Page";
import Question from "~/components/features/Question";
import questions from "~/questions/rsa";

export default function RSA() {
  const [currentQuestion, setCurrentQuestion] = useState(questions.question1);
  return (
    <Page title="RSA" subtitle="Aide financière">
    <Question setCurrentQuestion={setCurrentQuestion} question={currentQuestion} questions={questions} />
    </Page>
  )
}