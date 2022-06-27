# Quelle Aide

Quelle Aide est un projet en open source qui a pour vocation de simplifier le parcours pour comprendre à quelles aides on peut avoir accès en France et surtout quelle est la prochaine étape pour y accèder selon notre statut et les documents que l'ont possède déjà

## Contribuer

Pour contribuer au projet il vous suffit de m'envoyer vos pull requests

Si c'est la première fois que vous participez à un projet open source, voici un court tutoriel sur comment s'y prendre :

[Comment contribuer à un projet open source sur GitHub ?](https://www.blog.cozy-codeur.fr/comment-contribuer-%C3%A0-un-projet-open-source-sur-github)

### Features / Debug

Bien évidement toute contribution est acceptée, si vous avez une idée pour rendre le site plus agréable n'hésitez pas

### Ajouter un parcours

Voilà la marche à suivre pour ajouter un parcours :

#### Ajoutez le nom du parcours ainsi que sa route

```
// app/routes/index.jsx
...
   <ButtonLink
      to="/rsa"
      w="80%"
      leftIcon={<Icon color="sunny" icon="ant-design:euro-circle-filled" />}
      >
      Aide financière (RSA)
    </ButtonLink>
...
```

#### Créez la page correspondant à la route correspondante en suivant la logique suivante

```
// app/routes/rsa.jsx

import { useState } from "react";
import Page from "~/components/ui/Page";
import Question from "~/components/features/Question";
// normalement la seule ligne à changer est la suivante selon ou vous allez stocker vos questions
import questions from "~/questions/rsa";


export default function RSA() {
  const [currentQuestion, setCurrentQuestion] = useState(questions.question1);
  const [questionHistory, setQuestionHistory] = useState(["question1"]);
  return (
    <Page title="RSA" subtitle="Aide financière">
      <Question
        setQuestionHistory={setQuestionHistory}
        questionHistory={questionHistory}
        setCurrentQuestion={setCurrentQuestion}
        question={currentQuestion}
        questions={questions}
      />
    </Page>
  );
}
```

#### Maintenant vous pouvez créer votre parcours de questions

```
// app/questions/rsa.js
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
  ...
  ```
  
#### Et ... C'est tout ! Enfin il vous reste à me faire votre pull request pour que je valide vos changement 🙂

## Development

Lancez le projet en local avec cette commande

```sh
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

## Deployment

