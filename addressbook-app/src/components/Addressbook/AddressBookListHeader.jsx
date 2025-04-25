export function AddressBookListHeader() {
  return <div className={'AddressBookList--row AddressBookList--header'}>
  <div className={'AddressBookList--column'}>
    <span>Name</span>
  </div>

  <div className={'AddressBookList--column'}>
    <span>Address</span>
  </div>

  <div className={'AddressBookList--column'}>
    <span>City</span>
  </div>

  <div className={'AddressBookList--column'}>
    <span>Zip</span>
  </div>

  <div className={'AddressBookList--column'}>
    <span>Country</span>
  </div>

  <div className={'AddressBookList--column'}>
    <span>Action</span>
  </div>
</div>
}