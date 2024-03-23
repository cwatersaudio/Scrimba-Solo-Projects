import React from 'react'
import classNames from 'classnames'

const Option = ({ optionText, options, number, correct, handleChange }) => {

    const [isPressed, setIsPressed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const optClass = classNames({
        btn: true,
        'opt-pressed': isPressed,
        'opt-over': !isPressed && isHovered,
    });
    return (

        <>
            <input
                type="radio"
                id={`choices${number},${index}`}
                name={`choices${number}`}
                value={option}
                onChange={() => handleChange(event, number)}
            />
            <label
                htmlFor={`choices${number},${index}`}
                className={btnClass}
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => setIsPressed(false)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >{option}</label >
        </>

    )
}

export default Option