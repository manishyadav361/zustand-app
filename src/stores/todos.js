import { create } from "zustand";


export const TODO_ACTION = {
    ADD_TODO: 'ADD_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
}

function todoReducer(state, action) {
    switch (action.type) {
        case TODO_ACTION.ADD_TODO:
            return {
               ...state,
                todos: [...state.todos, action.payload],
                count: state.count + 1
            };
        case TODO_ACTION.REMOVE_TODO:
            return {
               ...state,
                todos: [...state.todos.filter((_, idx) => idx!== action.payload)],
                count: state.count - 1
            };
        default:
            return state;
    }
}

const useTodoStore = create(((set) => ({
    todos: [],
    count: 0,
    dispatch: (action) => set((state) => todoReducer(state, action)),
})))

export default useTodoStore;