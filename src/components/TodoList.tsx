import React from "react";

export const TodoList = ({children, ...props}) => {
    return <ul {...props} className='w-full'>
        {children}
    </ul>
}