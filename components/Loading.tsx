import styles from '@styles/Loading.module.css';

export default function Loading() {
    return (
        <div className={styles.loadingContainer}>
            <h1 className={styles.loadingText}>Loading...</h1>
        </div>
    )
}
