import { Route, Routes } from 'react-router'
import './App.css'
import { AddressBookContainer } from './containers/AddressBookContainer'
import { DefaultLayout } from './layouts/DefaultLayout'

function App() {

  return (
    <DefaultLayout>
      <Routes>
       <Route path="/" element={<AddressBookContainer/>} />
      </Routes>
    </DefaultLayout>
  )
}

export default App
