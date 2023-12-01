import styles from 'styles/two-column.module.css'


export function TwoColumn({ children }) {
    return (
        <div className={styles.flexContainer}>
            {children}
        </div>
    )
}

export function TwoColumnSideber({ children}) {
    return (
        <div className={styles.Sideber}>
            {children}
        </div>
    )
}