export function AddressBookListItem({entry, onDelete}) {

  return <div className={'AddressBookList--row '}>
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
    <button onClick={() => onDelete(entry)}>❌</button>
  </div>
</div>
}