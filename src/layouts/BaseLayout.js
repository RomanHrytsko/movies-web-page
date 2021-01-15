import React from "react";
import styles from './BaseLayout.module.css'
export const BaseLayout = ({children}) => {
    return (
        <div className={styles.mainWrapper}>
            <header>Header data</header>
            <main>
                {children}

            </main>
            <footer>Footer data</footer>

        </div>
    )
}