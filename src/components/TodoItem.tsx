import React, {FC} from "react";
import {clsx} from 'clsx'

export interface TodoItemProps {
    id: string;
    label: string;
    checked?: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const TodoItem: FC<TodoItemProps> = ({
        id,
        label,
        checked = false,
        onChange
    }) => {
    return (
        <li className='flex items-center w-full border-r-4 mb-2 p-4 bg-white font-normal text-lg cursor-pointer'>
            <input
                className='w-[16px] h-[16px] mr-12'
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <span
                className={clsx(
                'm-0 flex flex-row flex-nowrap justify-start items-center text-lg',
                    checked && 'line-through'
                )}
            >
                {label}
            </span>
        </li>
    );
};
