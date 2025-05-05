import {useEffect, useState} from "react";
import { useSystemContext } from "../context/SystemContext";

export function useHeaderSearch() {
  const {searchTerm, setSearchTerm} = useSystemContext();
  const [search, setSearch] = useState();
  const [debounce, setDebounce] = useState(null);

  useEffect(() => {
    return () => {
     setSearchTerm('');
    }
  }, []);

  useEffect(() => {
    if (debounce) {
      clearTimeout(debounce);
      setDebounce(null);
    }

    setDebounce(setTimeout(() => setSearch(searchTerm), 300));

  }, [searchTerm]);

  return {search};
}