import styles from "./Todo.module.scss";
import {TodoCard} from "./TodoCard";

const todoItems = [
    {
        title: 'TODO #1',
        items: [
            {text: '1st action', checked: true},
            {text: '2nd action', checked: true},
            {text: 'last action', checked: true},
        ]
    },
    {
        title: 'TODO #2',
        items: [
            {text: '1st action', checked: true},
            {text: '2nd action', checked: true},
            {text: '3rd action', checked: true},
            {text: 'last action', checked: false},
        ]
    },
    {
        title: 'TODO #3',
        items: [
            {text: '1st and last action', checked: false},
        ]
    },
    {
        title: 'TODO #4',
        items: [
            {text: '1st action', checked: true},
            {text: 'last action', checked: false},
        ]
    },
];



export const TodoCardList = () => {

    return (
        <div className={styles.container}>
            {todoItems.map(({title, items}, index) =>
                <TodoCard title={title}
                          items={items}
                          key={index}/>)
            }
        </div>
    );
}