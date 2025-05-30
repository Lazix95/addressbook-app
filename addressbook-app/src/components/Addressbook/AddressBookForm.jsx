import { useEffect, useState } from 'react'
import classes from './AddressBookForm.module.scss'

export function AddressBookForm({onSubmit, item, translations}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [county, setCounty] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
   if (item) {
    setFirstName(item.firstName ?? '');
    setLastName(item.lastName ?? '');
    setCounty(item.country ?? '');
    setCity(item.city ?? '')
   }
  }, [item])

  function handleChange(evt) {
    const fncMap = {
      setFirstName, setLastName, setCounty, setCity
    }

    fncMap[`set${evt.target.name}`]?.(evt.target.value);
  }


  
  function hanldeSubmit() {
    onSubmit({firstName, lastName, country: county, city})
  }

  return <form className={classes['entery-container']} onSubmit={(evt) => evt.preventDefault()}>
    <div className={classes['entery-main-middle']}>
      <div className={classes['entry-field']}>
        <label>First Name</label>
        <input name="FirstName" type="text" value={firstName} onChange={handleChange} />
      </div>
      <div className={classes['entry-field']}>
        <label>Last Name</label>
        <input name="LastName" type="text" value={lastName} onChange={handleChange}/>
      </div>
      <div className={classes['entry-field']}>
        <label>Country</label>
        <input name="County" type="text" value={county} onChange={handleChange}/>
      </div>
      <div className={classes['entry-field']}>
        <label>City</label>
        <input name={'City'} type="text" value={city} onChange={handleChange}/>
      </div>
    </div>
    
    <button className={classes['entry-add-btn']} onClick={hanldeSubmit}>{translations?.submit}</button>
    
  </form>
}