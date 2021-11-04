import React from "react";
import {useDispatch, useSelector} from 'react-redux'

import {selectTodos, toggleTodo} from "./slice";

export const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch(toggleTodo(todo.id))}
                    />
                    {todo.title}
                </li>
            ))}
        </ul>
    );
};

