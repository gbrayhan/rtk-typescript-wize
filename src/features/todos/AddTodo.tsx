// features/todos/AddTodo.tsx

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./slice";

// The rest of the code stays the same:
export const AddTodo = () => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setTitle("");

        dispatch(
            addTodo({
                id: Date.now().toString(),
                completed: false,
                title,
            })
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="todoName"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button>Add Todo</button>
        </form>
    );
};
