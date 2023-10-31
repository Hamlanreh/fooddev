import styles from '@styles/Navbar.module.css';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@app/api/auth/[...nextauth]/route';

import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default async function Navbar() {
    // Get user session token
    const session = await getServerSession(authOptions);

    return (
        <nav className={styles.navbar}>
            <Link href="/">FoodDev</Link>

            <ul className={styles.navBox}>
                {!session ? (
                <li className={styles.navBtn}>
                    <Link href="/api/auth/signin">Login</Link>
                </li>
                ) : (
                <li className={styles.navBtn}>
                    <Link href="/api/auth/signout">Logout</Link>
                </li>
                )}
                <li>
                    <Link className={styles.navIconLink} href="/cart"><ShoppingCartIcon className={styles.navIcon} /></Link>
                </li>
                <li className={`${styles.navBtn} ${styles.navToggle}`}>
                    <MenuIcon className={styles.navIcon} />

                    <ul className={styles.navPopup}>
                        {!session ? 
                        <li>
                            <Link href="/api/auth/signin">Login</Link>
                        </li> : 
                        <li>
                            <Link href="/api/auth/signout">Logout</Link>
                        </li>}
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

