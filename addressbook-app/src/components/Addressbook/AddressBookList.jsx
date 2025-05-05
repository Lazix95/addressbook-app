import { AddressBookListHeader } from "./AddressBookListHeader";
import { AddressBookListItem } from "./AddressBookListItem";

export function AddressBookList({entries, loading, onDeleteItem, onEditItem, onItemClick, onViewItem}) {
  return <div className={'AddressBookList'}>
    <AddressBookListHeader/>
    {loading ?  <span>Loading...</span> : null}
    {!loading ? entries?.map((entry) => <AddressBookListItem key={entry.uuid} entry={entry} onDelete={onDeleteItem} onClick={onItemClick} onEdit={onEditItem} onView={onViewItem}/>) : null}
  </div>
}

