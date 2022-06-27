import { Image, Flex, Text } from "@chakra-ui/react";
import {ButtonLink} from "~/components/ui/Button";
import Icon from "~/components/ui/Icon";

export default function Index() {
  return (
    <Flex
      h="95vh"
      w="100%"
      backgroundImage="url('/images/background.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      justify="center"
    >
      <Flex
        bg="questionBg"
        direction="column"
        w={{ base: "80%", md: "40%" }}
        placeSelf="center"
        textAlign="center"
        alignItems="center"
      >
        <Flex
          color="white"
          textAlign="center"
          direction="column"
          w="100%"
          h="100%"
          justify="center"
          placeSelf="center"
        >
          <Text fontWeight="bold" fontSize="5xl">
            Quelle Aide
          </Text>
          <Text as="h1">Découvrez les aides auxquelles vous avez droit et la prochaine étape pour y accéder</Text>
        </Flex>
        <ButtonLink
          to="/rsa"
          w="80%"
          leftIcon={<Icon color="sunny" icon="ant-design:euro-circle-filled" />}
        >
          Aide financière (RSA)
        </ButtonLink>
        <ButtonLink
          w="80%"
          disabled
          bg="sunny"
          color="white"
          rightIcon={<Icon color="white" icon="clarity:house-solid" />}
        >
          Aide au logement
        </ButtonLink>
        <Text mb="2" color="white" fontSize="sm">(En construction)</Text>
      </Flex>
    </Flex>
  );
}
