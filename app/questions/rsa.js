const questions = {
  question1: {
    question: "Avez-vous plus de 25 ans ?",
    choices: [
      { text: "Oui", nextQuestion: "question2" },
      { text: "Non", nextQuestion: "question3" },
    ],
  },

  question2: {
    question: "Êtes-vous en séjour régulier depuis plus de 5 ans ?",
    choices: [
      {
        text: "Oui (français ou carte de séjour 5 ans)",
        nextQuestion: "question4",
      },
      { text: "Non", nextQuestion: "", redirect: "/pas-eligible" },
    ],
  },
};

export default questions;
