import styles from "./ProgressBar.module.scss"
import React, {useEffect, useState} from "react";


interface TodoProgressBarProps {
    percents: number;
    className?: string;
}


export const ProgressBar = ({percents, className} : TodoProgressBarProps) => {
    const [value, setValue] = useState(percents)

    useEffect(() => {
        setValue(percents)
    }, [percents])

    return (
        <div className={styles.container} data-value={value}>
            <div className={`${className} ${styles.container__value}`}
                 style={{width: `${value}%`}}></div>
        </div>
    );
};