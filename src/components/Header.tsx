import React from "react";

export const Header = ({children, ...props}) => {
    return <div {...props} className='w-full h-[150px] text-white flex item-center justify-center text-[60px] leading-loose'>
        {children}
    </div>
}