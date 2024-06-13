import React, { FC, memo, useEffect } from "react";
import { clsx } from "clsx";

export interface TodoItemProps {
    id: string;
    label: string;
    checked?: boolean;
    deadline?: number;
    created_at: string;
    completed_at?: string;
    onCheckedChange: (id: string, isChecked: boolean) => void;
    onDelete: (id: string) => void;
}

export const TodoItem: FC<TodoItemProps> = memo(
    ({ id, label, checked = false, created_at, completed_at, deadline, onCheckedChange, onDelete }) => {
        useEffect(() => {
            if (deadline && !checked) {
                const deadlineTimestamp = new Date(created_at).getTime() + deadline * 60 * 1000;
                const now = Date.now();

                const timeout = setTimeout(() => {
                    alert(`Deadline for "${label}" has been reached!`);
                }, Math.max(0, deadlineTimestamp - now));

                return () => clearTimeout(timeout);
            }
        }, [deadline, checked, label]);

        return (
            <li data-created-at={created_at} data-completed-at={completed_at}>
                <label className="group flex items-center w-full border-r-4 mb-2 p-4 bg-white font-normal text-lg cursor-pointer">
                    <input
                        className="w-[16px] h-[16px] mr-4"
                        type="checkbox"
                        id={id}
                        checked={checked}
                        onChange={(e) => onCheckedChange(id, e.target.checked)}
                    />
                    <span
                        className={clsx(
                            "m-0 flex flex-row flex-nowrap justify-start items-center text-lg",
                            checked && "line-through",
                        )}
                    >
                        {label}
                    </span>
                    <button
                        type="button"
                        className="w-6 h-6 shrink-0 flex items-center justify-center ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-100"
                        onClick={(e) => {
                            e.stopPropagation();

                            onDelete(id);
                        }}
                    >
                        X
                    </button>
                </label>
            </li>
        );
    },
);
