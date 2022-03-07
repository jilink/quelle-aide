import {useState} from 'react';
import {Text, Divider, Image} from "@chakra-ui/react";
import Page from "~/components/ui/Page";
import QuestionFrame from "~/components/ui/QuestionFrame";
import Link from "~/components/ui/Link";
import {SubmitButton} from "~/components/ui/Button";

export default function RSA() {
  return (
    <Page title="RSA" subtitle="Aide financière" bg="lightGreen" color="error">
      <QuestionFrame>
        <Text fontSize="2xl" fontWeight="bold" m={2} mb={4}>
          Vous devez faire une demande à un CCAS ou à un CIAS
        </Text>
        <Text textAlign="left">
          Pour faire une demande <Link href="https://www.service-public.fr/particuliers/vosdroits/N358">cliquez ici</Link> puis choisissez
          l'onglet "Quelle est la démarche pour en bénéficier ?
        </Text>
        <Image src="/images/ccas/img1.png" alt="CCAS"  m="2"/>
        <Divider my="3" />
        <Link
          mb="2"
          href="https://www.service-public.fr/particuliers/vosdroits/F17317"
        >
          Cliquez ici pour plus d'informations
        </Link>
        <Link
          mb="2"
          href="https://solidarites-sante.gouv.fr/IMG/pdf/faq_domiciliation.pdf"
          target="_blank"
        >
          Cliquez ici pour accéder à une FAQ
        </Link>
        <Link
          mb="2"
          href="https://www.formulaires.service-public.fr/gf/cerfa_16029.do"
          target="=_blank"
        >
          Cliquez ici pour accéder au formulaire à remplir
        </Link>
      </QuestionFrame>
    </Page>
  );
}