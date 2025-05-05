import { useState } from "react"
import { deleteAddressbookEntriesApi, getAddressbookEntriesApi, postAddressbookEntriesApi, putAddressbookEntriesApi } from "../../api/addressbookApi";

export function useAddressbookApi() {
  const [entries, setEntires] = useState(null);
  const [loadingFlags, setLoadingFlags] = useState({
    fetching: false,
    deleting: false,
    updating: false,
  });

  async function getEntries({search} = {}) {
    try {
      setLoadingFlags((oldFlags) => {
        return {...oldFlags, fetching: true}
      })
      const data = await getAddressbookEntriesApi({search});
      setEntires(data);
    } finally {
      setLoadingFlags((oldFlags) => {
        return {...oldFlags, fetching: false}
      })
    }
  }

  async function addNewEntry(payload) {
    const data = await postAddressbookEntriesApi(payload);
    setEntires((oldEntries) => [...oldEntries, data]);
  }

  async function editEntry(entry, payload) {
    const data = await putAddressbookEntriesApi(entry.uuid, payload);
    setEntires((oldEntries) => {
      return oldEntries.map((oldEntry) => {
        if (entry.uuid === oldEntry.uuid) return data;
        return oldEntry;
      })
    });
  }

  async function deleteEntry(entry) {
    await deleteAddressbookEntriesApi(entry.uuid);
    setEntires((oldEntries) => {
      return oldEntries.filter((oldEntry) => oldEntry.uuid !== entry.uuid);
    });
  }

  return {
    entries,
    getEntries,
    addNewEntry,
    editEntry,
    deleteEntry,
    loadingFlags
    }
}