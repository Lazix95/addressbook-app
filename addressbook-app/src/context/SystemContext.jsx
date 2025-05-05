import {createContext, useContext, useEffect, useMemo, useState} from  'react';

const SystemContext = createContext({});

export function SystemContextProvider({children}) {

  // {text: string, handler: () => void}
  const [leftBtn, setLeftBtn ] = useState(null);
  const [righBtn, setRightBtn ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrollHiden, setIsScrollHidden] = useState(false);

  useEffect(() => {
    if (isScrollHiden) {
      document.body.classList.add('hide-scroll');
    } else {
      document.body.classList.remove('hide-scroll');
    }
  }, [isScrollHiden])

  const value = useMemo(() => ({
    leftBtn,
    righBtn,
    searchTerm,

    setLeftBtn,
    setRightBtn,
    setIsScrollHidden,
    setSearchTerm
  }), [
    leftBtn,
    righBtn,
    searchTerm
  ]);

  return <SystemContext.Provider value={value}>
      {children}
  </SystemContext.Provider>
}

export function useSystemContext() {
return useContext(SystemContext);  
}