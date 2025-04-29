export function AddressBookListItem({entry, onDelete, onEdit, onClick}) {

  function handleDelete(evt) {
    evt.stopPropagation();
    onDelete(entry);
  }

  function handleEdit(evt) {
    evt.stopPropagation();
    onEdit(entry);
  }
  
  return <div className={'AddressBookList--row '} onClick={() => onClick?.(entry)}>
  <div className={'AddressBookList--column'}>
    <span>{entry.firstName} {entry.lastName}</span>
  </div>

  <div className={'AddressBookList--column'}>
    <span>{entry.street}</span>
  </div>

  <div className={'AddressBookList--column'}>
    <span>{entry.city}</span>
  </div>

  <div className={'AddressBookList--column'}>
    <span>{entry.postalCode}</span>
  </div>

  <div className={'AddressBookList--column'}>
    <span>{entry.country}</span>
  </div>

  <div className={'AddressBookList--column'}>
    <button onClick={handleDelete}>❌</button>
    <button onClick={handleEdit}>✏️</button>
  </div>
</div>
}