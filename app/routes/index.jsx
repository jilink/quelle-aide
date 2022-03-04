import {Box, Image} from '@chakra-ui/react'
import Button from "~/components/ui/Button";
import Icon from "~/components/ui/Icon";

export default function Index() {
  return (
      <Box
        h="100vh"
        w="100%"
        backgroundImage="url('/images/background.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Button leftIcon={<Icon icon="ant-design:euro-circle-filled" />}>
          RSA
        </Button>
      </Box>
  );
}
