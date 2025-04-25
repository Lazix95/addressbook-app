import {createPortal} from 'react-dom';
import { AppDialog } from "../shared/AppDialog";
import { AddressBookForm } from "./AddressBookForm";
import { AddressBookList } from "./AddressBookList";

export function AddressbookView({entries, newEnrtyDialog, onNewEntryFormSubmit, onDeleteItem}) {

  return <div className={'AddressBook'}>
    <AddressBookList entries={entries} onDeleteItem={onDeleteItem} />
    {createPortal(
      <AppDialog dialog={newEnrtyDialog} title={'Add New Entry'}>
        <AddressBookForm onSubmit={onNewEntryFormSubmit}/>
      </AppDialog>, document.body
    )}
  </div>
}