import { useState } from "react";
import { Text } from "@chakra-ui/react";
import Page from "~/components/ui/Page";
import QuestionFrame from "~/components/ui/QuestionFrame";
import Link from "~/components/ui/Link";

export default function RSA() {
  return (
    <Page title="RSA" subtitle="Aide financière" bg="lightGreen" color="error">
      <QuestionFrame>
        <Text fontSize="2xl" fontWeight="bold" m={2} mb={4}>
          Vous êtes éligible à une aide financière (RSA)
        </Text>
        <Text mb="3">
          Vous allez être redirigé vers service-public.fr après votre choix :
        </Text>
        <Link
          mb="2"
          href="https://www.service-public.fr/particuliers/vosdroits/F19778"
        >
          J'ai 25 ans ou plus
        </Link>
        <Link href="https://www.service-public.fr/particuliers/vosdroits/F286">
          J'ai moins de 25 ans
        </Link>
      </QuestionFrame>
    </Page>
  );
}
