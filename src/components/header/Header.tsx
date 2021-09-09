import * as React from "react";
import styles from "./Header.module.scss"

interface HeaderProps {
    username: string;
}


export const Header = (props: HeaderProps) => {
    const { username } = props

    return (
        <header className={styles.header}>
            <h2 className={styles.header__title}>Добрый день,<br/>
                { username }</h2>
            <p className={styles.header__subtitle}>Список дел</p>
        </header>
    )
}
