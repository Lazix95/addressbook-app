import classes from './AddressBookUserView.module.scss'


export function AddressBookUserViewModal({item, onClose, openDelete, openEdit}) {

    

    return (
        <div className={classes.AddressBookUserViewModal}>
        <div>
           <p>First Name: <span>{item.firstName}</span></p>
           <p>Last Name: <span>{item.lastName}</span></p>
           <p>City: <span>{item.city}</span></p>
           <p>Address: <span>{item.street}</span></p>
           <p>Country: <span>{item.country}</span></p>
        </div>

        <section className='button-secion'>
            <button onClick={() => {
                onClose();
                openDelete(item);
                }}>
                Delete</button>
            <button onClick={() => {
                onClose();
                openEdit(item);
            }}>Edit</button>
        </section>
        </div>
    )

}