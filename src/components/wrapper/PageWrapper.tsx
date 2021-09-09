import * as React from "react";
import styles from "./Wrapper.module.scss"


interface WrapperProps extends React.HtmlHTMLAttributes<HTMLDivElement>{
    children: JSX.Element | Array<JSX.Element>
}


export const PageWrapper = ({children, ...other}: WrapperProps) => {
    return (
        <div className={styles.main} {...other}>
            {children}
        </div>
    )
}