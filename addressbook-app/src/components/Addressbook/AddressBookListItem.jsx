export function AddressBookListItem({entry, onDelete, onClick}) {

  function handleDelete(evt) {
    evt.stopPropagation();
    onDelete(entry)
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
  </div>
</div>
}