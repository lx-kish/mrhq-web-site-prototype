import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <Link to={props.link} className={`btn ${props.className}`}>
            {props.name}
        </Link>
    )
}

export default Button;