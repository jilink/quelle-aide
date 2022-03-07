import {useState} from 'react';
import {Text, Divider, Image} from "@chakra-ui/react";
import Page from "~/components/ui/Page";
import QuestionFrame from "~/components/ui/QuestionFrame";
import Link from "~/components/ui/Link";

export default function RSA() {
  return (
    <Page title="RSA" subtitle="Aide financière" bg="lightGreen" color="error">
      <QuestionFrame>
        <Text fontSize="2xl" fontWeight="bold" m={2} mb={4}>
          Vous devez d'abord faire une demande de carte d'identité
        </Text>
        <Text textAlign="left">
          Pour faire une demande <Link href="https://www.service-public.fr/particuliers/vosdroits/N358">cliquez ici</Link>
        </Text>
      </QuestionFrame>
    </Page>
  );
}