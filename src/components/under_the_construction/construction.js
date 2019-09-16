import React from 'react';

const Construction = (props) => {
    return (
        <div className="under-construction">
            <div className="under-construction__sign">
                <h1>Caution!</h1>
                <p>{`The ${props.page} page is currently under construction`}</p>
            </div>
        </div>

    )
}

export default Construction;