import Document from '~/components/Document'
import {
  Outlet
} from "remix";

import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const colors = {
  sun: {
    500: '#F8A978',
    600: '#F8A958',
    700: '#F8A908',
  },
  sunny: "#F8A978",
  pageBg: "#51DACF",
  questionBg: "#48829E",
  success: "#9EF5CF",
  error: "#F68787",
  lightGreen: "#A4F6A5",
}

const theme = extendTheme({ colors })



export function meta() {
  return { title: "Quelle Aide" };
}

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Outlet />
      </ChakraProvider>
    </Document>
  )
}