import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

type TodoId = string;

type Todo = {
    id: TodoId;
    title: string;
    completed: boolean;
};

type TodosState = {
    list: Todo[];
};

const initialState = {
    list: [],
} as TodosState;

export const slice = createSlice({
    name: "todos",
    initialState,

    reducers: {
        addTodo(
            state: TodosState,
            action: PayloadAction<Todo>
        ) {
            state.list = [...state.list, action.payload];
        },
        toggleTodo(
            state,
            action: PayloadAction<TodoId>
        ) {
            const index = state.list.findIndex(
                ({id}) => id === action.payload);

            if (index) {
                state.list[index].completed = !state.list[index].completed;
            }
        },
    },
});

export const selectTodos = (state: RootState) => state.todos.list;

export const {addTodo, toggleTodo} = slice.actions;

export default slice.reducer;
