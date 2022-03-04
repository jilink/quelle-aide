import { ChakraProvider } from '@chakra-ui/react'
import Document from '~/components/Document'
import {
  Outlet
} from "remix";


export function meta() {
  return { title: "New Remix App" };
}

export default function App() {
  return (
    <Document>
      <ChakraProvider>
        <Outlet />
      </ChakraProvider>
    </Document>
  )
}