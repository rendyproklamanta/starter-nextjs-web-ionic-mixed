import Link from 'next/link';
import styles from '../layout.module.css';

export default function Layout({ children }) {

   return (
      <>
         <div className={`${styles.header} ${styles.red}`}>
            <Link href="/">Second Layout</Link>
         </div>
         <div>
            {children}
         </div>
      </>
   );
}