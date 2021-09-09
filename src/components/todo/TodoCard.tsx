import styles from "./Todo.module.scss"
import {useEffect, useRef, useState} from "react";
import {ListItem} from "./TodoListItem";
import {TodoList} from "./TodoList";
import {TodoProgressBar} from "./TodoProgressBar";

interface TodoCardProps {
    title: string;
    items: Array<ListItem>;
}


export const TodoCard = ({title, items}: TodoCardProps) => {
    const [isOpen, setState] = useState(false);
    const cardElem = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cardElem.current === null) return;

        cardElem.current.setAttribute('data-open', isOpen ? 'true' : 'false');
    }, [isOpen])

    return (
        <div className={styles.item}
             onClick={() => setState(!isOpen)}
             ref={cardElem}>
            <p className={styles.item__title}>{title}</p>

            <TodoList items={items} isOpen={isOpen}/>

            <TodoProgressBar items={items}/>
        </div>
    );
};
