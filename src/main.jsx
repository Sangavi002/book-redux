import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from './store/store.js'
import { ChakraProvider } from '@chakra-ui/react'


createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
)
