import classes from "./AddressBookDeleteModal.module.scss";

export function AddressBookDeleteModal({ name, onDelete, onCancel }) {
  return (
    <div className={classes.AddressBookDeleteModal}>
      <p style={{ color: "black" }}>Are you sure to delete ({name})</p>
      <div>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
