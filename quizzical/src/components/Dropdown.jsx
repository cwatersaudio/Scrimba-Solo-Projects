import React from 'react'

const Dropdown = ({ dropDownChoices, title, id, onChange, value, className }) => {
    function generateOptions() {
        return dropDownChoices.map((choice, index) => {
            return <option key={`${id} ${index}`} value={choice.value}>{choice.label}</option>
        })
    }

    return (
        <>
            <label for={id}>{title} </label>
            <select name={id} className={className} onChange={onChange} value={value}>
                {generateOptions()}
            </select>
        </>

    )
}

export default Dropdown