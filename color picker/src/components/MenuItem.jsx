import React from "react"

export default function MenuItem({ onClick, name, value, title, className, handleClick }) {
    return (
        <button
            onClick={handleClick}
            className={className}
            name={name}
            value={value}>
            {title}
        </button>

    )
}