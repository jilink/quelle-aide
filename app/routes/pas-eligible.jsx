import {useState} from 'react';
import {Text} from "@chakra-ui/react";
import Page from "~/components/ui/Page";
import QuestionFrame from "~/components/ui/QuestionFrame";
import Link from "~/components/ui/Link";

export default function RSA() {
  return (
    <Page title="RSA" subtitle="Aide financière" bg="lightGreen" color="error">
      <QuestionFrame>
        <Text fontSize="2xl" fontWeight="bold" m={2} mb={4}>
          Vous n'êtes pas éligible à une aide financière (RSA)
        </Text>
        <Text mb="3" textAlign="left">
          Nous sommes désolé, votre cas n'est pas encore traité par nos services. Mais il existe peut être des aides pour vous, vous pouvez essayer d'en savoir plus sur le site blog.entourage.social
        </Text>
        <Link
          mb="2"
          href="https://blog.entourage.social/2020/11/06/les-aides-sociales-en-france-comment-y-avoir-acces-quand-on-est-sdf/#:~:text=La%20Garantie%20jeunes%20est%20un,maximum%20497%E2%82%AC%20par%20mois"
        >
        Cliquez ici pour plus d'informations
        </Link>
      </QuestionFrame>
    </Page>
  );
}