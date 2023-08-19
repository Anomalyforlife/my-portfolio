import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./components/Navbar.tsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
  </ChakraProvider>,
)
