import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/styles.scss';
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { AddressBookContextProvider } from './context/AddressbookContext.jsx'
import { SystemContextProvider } from './context/SystemContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <SystemContextProvider>
    <AddressBookContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AddressBookContextProvider>
   </SystemContextProvider>
  </StrictMode>,
)
