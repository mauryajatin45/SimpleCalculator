import React from 'react'

function Button(props) {
    return (
        <div>
            <button className='p-3 border-1 border-amber-300 hover:bg-gray-400 cursor-pointer text-white text-5xl px-6 rounded-2xl flex justify-center items-center'
                onClick={() => props.onClick(props.label)}

            >
                {props.label}
            </button>
        </div>
    )
}

export default Button
