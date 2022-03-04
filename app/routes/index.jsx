import { Image, Flex, Text } from "@chakra-ui/react";
import {ButtonLink} from "~/components/ui/Button";
import Icon from "~/components/ui/Icon";

export default function Index() {
  return (
    <Flex
      h="100vh"
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
            ADF
          </Text>
          <Text>Les aides pour sans abris simplifiées</Text>
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
      </Flex>
    </Flex>
  );
}
