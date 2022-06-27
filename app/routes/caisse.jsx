import { useState } from "react";
import { Text, Image } from "@chakra-ui/react";
import Page from "~/components/ui/Page";
import QuestionFrame from "~/components/ui/QuestionFrame";
import Link from "~/components/ui/Link";

export default function RSA() {
  return (
    <Page title="RSA" subtitle="Aide financière" bg="lightGreen" color="error">
      <QuestionFrame>
        <Text fontSize="2xl" fontWeight="bold" m={2} mb={4}>
          Il vous faut une caisse d'affiliation
        </Text>
        <Text textAlign="left" mb="2">
          Sélectionnez{" "}
          <Link href="https://connect.caf.fr/connexionappli/dist/?forceReload=20211220&contexteAppel=caffr&urlredirect=%2Fwps%2Fmyportal%2Fcaffr%2Fmoncompte%2Ftableaudebord#/aideConnexion?isFromLoginPage=true&origine_demande=web">
            CAF
          </Link>{" "}
          pour des aides qui concernent la famille, pour toute autre siutation
          sélectionnez{" "}
          <Link href="https://monespaceprive.msa.fr/z84dmdinsc/ria/#/choix-profil">
            MSA
          </Link>{" "}
        </Text>{" "}
      </QuestionFrame>
    </Page>
  );
}
