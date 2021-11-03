import React from 'react';
import { Link } from 'react-router-dom';
import {AddTodo} from "../../../features/todos/AddTodo";

function AddTodoPage() {
    return (
        <div>
            <AddTodo/>
            <Link to="/todos"><p>Ejemplo de redireccion</p></Link>

        </div>
    );
}

export default AddTodoPage;
