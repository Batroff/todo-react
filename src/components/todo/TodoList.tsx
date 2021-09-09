import styles from "./Todo.module.scss";
import {ListItem, TodoListItem} from "./TodoListItem";

interface TodoListProps{
    items: Array<ListItem>;
    isOpen: boolean;
}


// TODO : Smooth height transform
export const TodoList = ({items, isOpen}: TodoListProps) => {

    return (
        <ul className={styles.item__list}>
            {items.map((({text, checked}, i) => {
                return <TodoListItem text={text}
                                     checked={checked}
                                     key={i}/>
            }))}
        </ul>
    );
}