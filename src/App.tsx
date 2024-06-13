import React, { useCallback, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";
import { AddInput } from "./components/AddInput";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { Header } from "./components/Header";

interface Todo {
    id: string;
    label: string;
    checked: boolean;
    created_at: string;
    completed_at?: string;
    deadline?: number;
}

const TODO_LOCAL_STORAGE_KEY = "todos";

let initialData: Todo[] = [
    {
        id: uuid(),
        label: "Buy groceries",
        checked: false,
        created_at: new Date().toISOString(),
    },
    {
        id: uuid(),
        label: "Reboot computer",
        checked: false,
        created_at: new Date().toISOString(),
    },
    {
        id: uuid(),
        label: "Ace interview",
        checked: true,
        created_at: new Date().toISOString(),
        completed_at: new Date().toISOString(),
    },
];

try {
    const todos = JSON.parse(localStorage.getItem(TODO_LOCAL_STORAGE_KEY));

    if (Array.isArray(todos)) {
        initialData = todos;
    }
} catch {
    // Do nothing, use initial data
}

function App() {
    const [todos, _setTodos] = useState<Todo[]>(initialData);

    const setTodos: typeof _setTodos = useCallback((todosOrCallback) => {
        if (typeof todosOrCallback === "function") {
            _setTodos((prev) => {
                const newTodos = todosOrCallback(prev);

                localStorage.setItem(TODO_LOCAL_STORAGE_KEY, JSON.stringify(newTodos));

                return newTodos;
            });
        } else {
            _setTodos(todosOrCallback);

            localStorage.setItem(TODO_LOCAL_STORAGE_KEY, JSON.stringify(todosOrCallback));
        }
    }, []);

    const addTodo = useCallback((label: string) => {
        let deadlinePrompt: string | undefined;

        do {
            deadlinePrompt = prompt("Enter a deadline for this task in minutes (optional)");

            if (Number.isNaN(Number(deadlinePrompt)) || Number(deadlinePrompt) <= 0) {
                alert("Invalid deadline, please enter a number in minutes.");
            }
        } while (deadlinePrompt && Number.isNaN(Number(deadlinePrompt)));

        const deadline = deadlinePrompt ? Number(deadlinePrompt) : undefined;

        setTodos((prev) => [
            {
                id: uuid(),
                label,
                checked: false,
                created_at: new Date().toISOString(),
                deadline,
            },
            ...prev,
        ]);
    }, []);

    const handleTodoCheckedChange = useCallback((id: string, isChecked: boolean) => {
        setTodos((prev) => {
            const todo = prev.find((todo) => todo.id === id);

            if (!todo) {
                return prev;
            }

            return prev.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        checked: !todo.checked,
                        completed_at: isChecked ? new Date().toISOString() : undefined,
                    };
                }

                return todo;
            });
        });
    }, []);

    const handleTodoDelete = useCallback((id: string) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }, []);

    const checkedTodos = useMemo(
        () =>
            todos
                .filter((todo) => todo.checked)
                .sort((a, b) => new Date(a.completed_at).getTime() - new Date(b.completed_at).getTime()),
        [todos],
    );
    const uncheckedTodos = useMemo(
        () =>
            todos
                .filter((todo) => !todo.checked)
                .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()),
        [todos],
    );

    return (
        <div className="flex flex-col items-center w-[300px]">
            <Header>Todo List</Header>
            <AddInput onAdd={addTodo} />
            <TodoList>
                {uncheckedTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        onCheckedChange={handleTodoCheckedChange}
                        onDelete={handleTodoDelete}
                    />
                ))}
                {checkedTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        onCheckedChange={handleTodoCheckedChange}
                        onDelete={handleTodoDelete}
                    />
                ))}
            </TodoList>
        </div>
    );
}

export default App;
