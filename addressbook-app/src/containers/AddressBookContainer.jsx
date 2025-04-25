import { useEffect } from "react";
import { AddressbookView } from "../components/Addressbook/AddressBookView";
import { useHeaderBtns } from "../hooks/useHeaderBtns";
import { useAddressbookApi } from "../hooks/api/useAddressbookApi";
import { useDialog } from "../hooks/useDialog";

// Napraviti View Entity Modal;
// U njemu prikazati sve informacije koje entry sadrzi;
// Ispod infoirmacija napraviti 2 dugmeta: "Delete" i "Edit"
// Na klik bilo kojeg dugmeta modal se zatvara i pokrece se "handleDeleteItem" ili "handleEditItem"
// Stilizovati modal najbvolje sto mozete.
 
export function AddressBookContainer() {
  const {getEntries, addNewEntry, entries} = useAddressbookApi();
  const newEntryDialog = useDialog();
  const deleteDialog = useDialog({onSubmit: handleDeleteSubmit});

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

  function handleEditItem(item) {
    // Ovo treba da se loguje kad se klikne ne edit dugme ( bilo iz tabele ili iz "informatikon modala");
    console.log('editItem: ', item);
  }


  function handleDeleteItem(item) {
    deleteDialog.show(item);
  }

  function handleDeleteSubmit(item) {
    console.log('submitted Item', item)
  }

  function handleItemClick(item) {
    console.log('clicked Item', item);
  }


  return <AddressbookView 
    newEnrtyDialog={newEntryDialog} 
    entries={entries} 
    onNewEntryFormSubmit={handleNewEntrySubmit}
    deleteEntryDialog={deleteDialog}
    onItemClick={handleItemClick}
    onDeleteItem={handleDeleteItem}
  />
}