import React from 'react'

const IntroPage = (props) => {
    return (
        <div className="intro-page">
            <div className="overlap">
                <div className="text-wrapper">Start quiz</div>
                <div className="play-again-button">
                    <div className="overlap-group">
                        <button type="button" className="div" onClick={props.getTrivia}>Start quiz</button>
                    </div>
                </div>
            </div>
            {/* <img className="blobs" alt="Blobs" src="blobs.svg" />
          <img className="img" alt="Blobs" src="image.svg" /> */}
            <div className="header-nav">
                <div className="text-wrapper-2">Quizzical</div>
            </div>
            <div className="text-wrapper-3">Some description if needed</div>
        </div>)
}

export default IntroPage