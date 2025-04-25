import { useState } from "react"
import { getAddressbookEntriesApi, postAddressbookEntriesApi } from "../../api/addressbookApi";

export function useAddressbookApi() {
  const [entries, setEntires] = useState(null);

  async function getEntries( ) {
    const data = await getAddressbookEntriesApi();
    setEntires(data);
  }

  async function addNewEntry(payload) {
    const data = await postAddressbookEntriesApi(payload)
    setEntires((oldEntries) => [...oldEntries, data]);
  }

  return {
    entries,
    getEntries,
    addNewEntry
  }
}