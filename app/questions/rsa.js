const questions = {
  question1: {
    question: "Avez-vous plus de 25 ans ?",
    choices: [
      { text: "Oui", nextQuestion: "sejour" },
      { text: "Non", nextQuestion: "enfant" },
    ],
  },

  sejour: {
    question: "Êtes-vous en séjour régulier depuis plus de 5 ans ?",
    choices: [
      {
        text: "Oui (français ou carte de séjour 5 ans)",
        nextQuestion: "adresse",
      },
      { text: "Non", nextQuestion: "", redirect: "/pas-eligible" },
    ],
  },
  enfant: {
    question: "Avez-vous / attendez-vous un enfant ?",
    choices: [
      { text: "Oui", nextQuestion: "sejour" },
      { text: "Non", nextQuestion: "travail" },
    ],
  },
  travail: {
    question: "Avez-vous déjà travaillé ?",
    choices: [
      { text: "Oui", nextQuestion: "sejour" },
      { text: "Non", nextQuestion: "/pas-eligible" },
    ],
  },
  adresse: {
    question: "Avez-vous une adresse postale ?",
    choices: [
      { text: "Oui", nextQuestion: "carte" },
      { text: "Non", nextQuestion: "/ccas" },
    ],
  },
  carte: {
    question: "Avez-vous une carte d'identité ?",
    choices: [
      { text: "Oui", nextQuestion: "banque" },
      { text: "Non", nextQuestion: "/cni" },
    ],
  },
  banque: {
    question: "Avez-vous un compte bancaire ?",
    choices: [
      { text: "Oui", nextQuestion: "caisse" },
      { text: "Non", nextQuestion: "/banque" },
    ],
  },
  caisse: {
    question: "Avez-vous une caisse d'affiliation ? (CAF, MSA, etc.)",
    choices: [
      { text: "Oui", nextQuestion: "/demande-rsa" },
      { text: "Non", nextQuestion: "/caisse" },
    ],
  },
};

export default questions;
