import React, {FC, useState} from "react";

export interface AddInputProps {
    onAdd: (label: string) => void;
}

export const AddInput: FC<AddInputProps> = ({ onAdd }) => {
    const [input, setInput] = useState("");

    return (
        <form
            className='w-full'
            onSubmit={(e) => {
                e.preventDefault();
                onAdd(input);
                setInput("");
            }}
        >
            <input
                className='w-full border-none p-[16px] outline-none border-r-4 mb-[8px]'
                onChange={(e) => setInput(e.target.value)}
                value={input}
                placeholder="Add a new todo item here"
            />
        </form>
    );
};
