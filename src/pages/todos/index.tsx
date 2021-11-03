import React from 'react';
import '../../App.css';
import {TodoList} from "../../features/todos/TodoList";
import {AddTodo} from "../../features/todos/AddTodo";


function TodosPage() {
    return (
        <div>
            <AddTodo/>
            <TodoList/>
        </div>
    );
}

export default TodosPage;
