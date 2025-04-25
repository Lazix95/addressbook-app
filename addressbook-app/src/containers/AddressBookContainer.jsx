import { useEffect } from "react";
import { AddressbookView } from "../components/Addressbook/AddressBookView";
import { useHeaderBtns } from "../hooks/useHeaderBtns";
import { useAddressbookApi } from "../hooks/api/useAddressbookApi";
import { useDialog } from "../hooks/useDialog";

export function AddressBookContainer() {
  const {getEntries, addNewEntry, entries} = useAddressbookApi();
  const newEntryDialog = useDialog();

  useHeaderBtns({
    leftBtn: {
      text: '➕New',
      handler: handleNew,
    },
    rightBtn: {
      text: '⚙️Settings',
      handler: hanldeSettings
    }
  });

  useEffect(() => {
    getEntries();
  }, []);

  function handleNew() {
    newEntryDialog.show();
    console.log('New')
  }

  function hanldeSettings() {
    console.log('Settings')
  }

  function handleNewEntrySubmit(payload) {
    newEntryDialog.close();
    addNewEntry(payload);
  }

  function handleDeleteItem(item) {
    console.log(item);
  }


  return <AddressbookView 
    newEnrtyDialog={newEntryDialog} 
    entries={entries} 
    onNewEntryFormSubmit={handleNewEntrySubmit}
    onDeleteItem={handleDeleteItem}
  />
}