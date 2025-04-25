import classes from './AddressBookForm.module.scss'

export function AddressBookDeleteModal({name, onDelete, onCancel}) {
  return <div className={classes.AddressBookDeleteModal}>
      <p style={{color: 'black'}}>Are you sure to delete ({name})</p>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onCancel}>Cancel</button>
  </div>
}