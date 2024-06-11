import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";
import styled from "@emotion/styled";
import { AddInput } from "./components/AddInput";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { Header } from "./components/Header";

const Wrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 300,
});
interface Todo {
    id: string;
    label: string,
    checked: boolean,
}

const initialData: Todo[] = [
    {
        id: uuid(),
        label: "Buy groceries",
        checked: false,
    },
    {
        id: uuid(),
        label: "Reboot computer",
        checked: false,
    },
    {
        id: uuid(),
        label: "Ace CoderPad interview",
        checked: true,
    },
];

function App() {
    const [todos, setTodos] = useState<Todo[]>(initialData);

    const addTodo = useCallback((label: string) => {
        setTodos((prev) => [
            {
                id: uuid(),
                label,
                checked: false,
            },
            ...prev,
        ]);
    }, []);

    return (
        <Wrapper>
            <Header>Todo List</Header>
            <AddInput onAdd={addTodo} />
            <TodoList>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} onChange={e => {
                        setTodos(prev => {
                            const foundTodo = prev.find(prevTodo => prevTodo.id === todo.id);

                            foundTodo.checked = e.target.checked;

                            return [...prev]
                        })
                    }} />
                ))}
            </TodoList>
        </Wrapper>
    );
}

export default App;
