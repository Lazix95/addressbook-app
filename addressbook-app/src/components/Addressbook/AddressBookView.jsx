import {createPortal} from 'react-dom';
import { AppDialog } from "../shared/AppDialog";
import { AddressBookForm } from "./AddressBookForm";
import { AddressBookList } from "./AddressBookList";
import { AddressBookDeleteModal } from './AddressBookDeleteModal';

export function AddressbookView({entries, newEnrtyDialog, deleteEntryDialog, onNewEntryFormSubmit, onDeleteItem, onItemClick}) {

  return <div className={'AddressBook'}>
    <AddressBookList entries={entries} onDeleteItem={onDeleteItem} onItemClick={onItemClick}/>

    {createPortal(
      <AppDialog dialog={newEnrtyDialog} title={'Add New Entry'}>
        <AddressBookForm onSubmit={onNewEntryFormSubmit}/>
      </AppDialog>, document.body
    )}

    {createPortal(
      <AppDialog dialog={deleteEntryDialog} title={'Delete Entry'}>
        <AddressBookDeleteModal name={deleteEntryDialog.param?.firstName} onDelete={deleteEntryDialog.submit} onCancel={deleteEntryDialog.close}/>
      </AppDialog>, document.body
    )}
  </div>
}