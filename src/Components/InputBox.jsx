import React from 'react'

function InputBox({number1, onChange}) {
    return (
<input 
  type="number" 
  value={number1}
  onChange={onChange}
  className="bg-white text-gray-800 border-2 border-gray-300 rounded-lg w-full px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 hover:border-blue-500" 
  placeholder="Enter number" 
/>
    )
}

export default InputBox
