import { create } from "zustand";

const useTodoStore = create(((set) => ({
    todos: [],
    count: 0,
    addTodo: (todo) => set((state) => ({todos: [...state.todos, todo], count: state.count + 1})),
    removeTodo: (id) => set((state) => ({todos: [...state.todos.filter((_, idx) => idx !== id)], count: state.count - 1}))
})))

export default useTodoStore;