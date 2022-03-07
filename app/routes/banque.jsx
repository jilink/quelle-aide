import {useState} from 'react';
import {Text, Image} from "@chakra-ui/react";
import Page from "~/components/ui/Page";
import QuestionFrame from "~/components/ui/QuestionFrame";
import Link from "~/components/ui/Link";

export default function RSA() {
  return (
    <Page title="RSA" subtitle="Aide financière" bg="lightGreen" color="error">
      <QuestionFrame>
        <Text fontSize="2xl" fontWeight="bold" m={2} mb={4}>
          Vous devez d'abord avoir un compte banquaire
        </Text>
        <Text textAlign="left" mb="2">
          <Link href="https://ouvrir-un-compte.boursorama-banque.com/compte-bancaire/">
            Boursorama Banque
          </Link>{" "}
          ou{" "}
          <Link href="https://www.orangebank.fr/souscription-compte/offer/choose-offer">
            Orange Bank
          </Link>{" "}
          permettent de faire un compte bancaire gratuitement à condition
          d'utiliser sa carte au moins une fois par mois
        </Text>{" "}
        <Text textAlign="left">
          Il y aussi{" "}
          <Link href="https://www.hellobank.fr/fr/avantages/devenir-client-hello">
            Hello Bank
          </Link>{" "}
          qui vous permet de faire un compte bancaire gratuitement et sans
          conditions d'utilisation.
        </Text>
      </QuestionFrame>
    </Page>
  );
}