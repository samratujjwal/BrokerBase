import React from 'react';
import "./CustomStyle.css"
function OpenAccount({ heading, description, buttonText, onButtonClick }) {
    return (

        <div className=" text-center py-4">
            <h2 className=" mb-4">{heading}</h2>
            <p className=" mb-4">{description}</p>
            <button onClick={onButtonClick} className="btn btn-primary">{buttonText}</button>
        </div>
    );
}

export default OpenAccount;