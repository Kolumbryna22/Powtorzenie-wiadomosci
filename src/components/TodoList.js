import React from 'react';
import style from './TodoList.css';

const TodoList = (props) => {
    return (
        <div className={style.TodoListContainer}>
            {
                props.list.map((item, i) => {
                    return (
                        <div id={item.id} key={i} className={style.TodoListItem}>
                            <p>{item.text}</p>
                            <button onClick={() => props.remove(item.id)}>Delete</button>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default TodoList;
