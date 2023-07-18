import React from 'react'

export default function MainButton({style, text, onClick}: {style: object, text: string, onClick: () => void}) {
  return (
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded"
        style={style}
        onClick={onClick}>
            {text}
        </button>
  )
}
