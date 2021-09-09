import {ListItem} from "./TodoListItem";
import styles from "./Todo.module.scss";
import {ProgressBar} from "../progress-bar/ProgressBar";

interface TodoProgressBarProps {
    items: Array<ListItem>;
}

const getTodoProgress = (items: Array<ListItem>): number => {
    const itemsChecked = items.filter(item => item.checked).length;

    return itemsChecked / items.length * 100;
};


export const TodoProgressBar = ({items} : TodoProgressBarProps) => {
    const progress = getTodoProgress(items);

    return (
        <div className={styles.item__progress}>
            <p className={styles.item__progress_complete}>
                {progress === 100 ? "Complete" : "In progress"}
            </p>
            <ProgressBar percents={progress} className={styles.item__progress_bar}/>
        </div>
        // TODO : Fix undefined class when `item__progress_bar` is empty
    );
}