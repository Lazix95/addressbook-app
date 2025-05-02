import { AddressBookListHeader } from "./AddressBookListHeader";
import { AddressBookListItem } from "./AddressBookListItem";

export function AddressBookList({entries, onDeleteItem, onEditItem, onItemClick, onViewItem}) {
  return <div className={'AddressBookList'}>
    <AddressBookListHeader/>
    {entries?.map((entry) => <AddressBookListItem key={entry.uuid} entry={entry} onDelete={onDeleteItem} onClick={onItemClick} onEdit={onEditItem} onView={onViewItem}/>)}    
  </div>
}

