import styles from "./Todo.module.scss";
import React, {useState} from "react";

export interface ListItem{
    text: string;
    checked: boolean;
}

interface ListItemMouseEvent extends React.MouseEvent<HTMLLIElement> {
    target: EventTarget
}

export const TodoListItem = ({text, checked}: ListItem) => {
    const [isChecked, setCheckState] = useState(checked);

    const handleClick = (e: ListItemMouseEvent) => {
        e.stopPropagation()
        setCheckState(!isChecked);
    };

    return (
        <li className={styles.item__list_child}
            data-checked={isChecked}
            onClick={handleClick}>
            {text}
        </li>
    );
}