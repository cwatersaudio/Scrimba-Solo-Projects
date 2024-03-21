import React from 'react'

const Options = ({ options, number }) => {

    return (
        <div className='answer-choices'>
            {options.map((option, index) => {
                return (
                    <>
                        <input type="radio" id={`choices${number},${index}`} name={`choices${number}`} value={option} />
                        <label htmlFor={`choices${number},${index}`}>{option}</label>
                    </>
                )
            })}

        </div>
    )
}

export default Options