import {createContext, useContext, useMemo} from  'react';
import { useAddressbookApi } from '../hooks/api/useAddressbookApi';

const AddressBookContext = createContext({});

export function AddressBookContextProvider({children}) {
  const {entries, getEntries} = useAddressbookApi();

  const value = useMemo(() => ({
   entries, getEntries,
  }), [entries]);

  return <AddressBookContext.Provider value={value}>
      {children}
  </AddressBookContext.Provider>
}

export function useAddressBookContext() {
return useContext(AddressBookContext);  
}