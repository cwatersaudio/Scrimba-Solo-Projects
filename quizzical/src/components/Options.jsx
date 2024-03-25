import React from 'react'

const Options = ({ allChoices, number, correct, updateAnswer, showAnswers }) => {
    const [selected, setSelected] = React.useState(null)

    function handleSelect(event, i) {
        console.log(event.target)
        setSelected(event.target.value)

    }
    React.useEffect(() => {
        updateAnswer(selected, number)
    }, [selected])

    function getStyles(choice) {
        let styleString = "option "
        if (showAnswers) {
            if (choice === correct) {
                styleString = + "correct"
            }

        } else if (choice === selected) {
            styleString += "selected"
        }
        console.log(styleString)
        return (styleString)
    }



    return (

        <div className='answer-choices'>
            {allChoices.map((option, index) => {


                return (
                    <>
                        <input
                            type="radio"
                            id={`choices${number},${index}`}
                            name={`choices${number}`}
                            value={option}
                            onChange={() => handleSelect(event, number)}

                        />
                        <label
                            htmlFor={`choices${number},${index}`}
                            className={`option ${getStyles(option)}`}
                        >{option}</label >
                    </>
                )
            })}

        </div >
    )
}

export default Options