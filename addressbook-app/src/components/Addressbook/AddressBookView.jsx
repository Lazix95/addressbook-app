import {createPortal} from 'react-dom';
import { AppDialog } from "../shared/AppDialog";
import { AddressBookForm } from "./AddressBookForm";
import { AddressBookList } from "./AddressBookList";
import { AddressBookDeleteModal } from './AddressBookDeleteModal';

export function AddressbookView({entries, newEnrtyDialog, deleteEntryDialog, editEntryDialog, onNewEntryFormSubmit, onDeleteItem, onEditItem, onItemClick, onEditItemSubmit}) {

  return <div className={'AddressBook'}>
    <AddressBookList entries={entries} onDeleteItem={onDeleteItem} onEditItem={onEditItem} onItemClick={onItemClick}/>

    {createPortal(
      <AppDialog dialog={newEnrtyDialog} title={'Add New Entry'}>
        <AddressBookForm translations={{submit: '➕ ADD'}} onSubmit={onNewEntryFormSubmit}/>
      </AppDialog>, document.body
    )}

    {createPortal(
      <AppDialog dialog={deleteEntryDialog} title={'Delete Entry'}>
        <AddressBookDeleteModal name={deleteEntryDialog.param?.firstName} onDelete={deleteEntryDialog.submit} onCancel={deleteEntryDialog.close}/>
      </AppDialog>, document.body
    )}

    {createPortal(
      <AppDialog dialog={editEntryDialog} title={'Edit Entry'}>
        <AddressBookForm translations={{submit: 'Submit'}}  item={editEntryDialog?.param} onSubmit={(payload) => onEditItemSubmit(editEntryDialog?.param, payload)} />
      </AppDialog>, document.body
    )}
  </div>
}