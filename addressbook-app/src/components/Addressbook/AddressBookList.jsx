import { AddressBookListHeader } from "./AddressBookListHeader";
import { AddressBookListItem } from "./AddressBookListItem";

export function AddressBookList({entries, onDeleteItem, onItemClick}) {
  return <div className={'AddressBookList'}>
    <AddressBookListHeader/>
    {entries?.map((entry) => <AddressBookListItem key={entry.uuid} entry={entry} onDelete={onDeleteItem} onClick={onItemClick}/>)}    
  </div>
}