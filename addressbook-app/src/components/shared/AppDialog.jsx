import { useEffect } from 'react';
import styles from './AppDialog.module.scss';
import { useScrollControll } from '../../hooks/useScrollControll';

export function AppDialog({dialog, title, children}) {
const {show, hide} = useScrollControll();

useEffect(() => {
  if (dialog.open) {
    hide();
  } else {
    show();
  }

}, [dialog.open])

  if (!dialog.open) return null;

  return <div className={styles.AppDialogWrapper}>
    <div className={styles.AppDialog}>
      <div className={styles.header}>
        <span className={styles.title}>
          {title}
        </span>
        <button onClick={dialog.close}>x</button>
      </div>
      {children}
    </div>
  </div>
}