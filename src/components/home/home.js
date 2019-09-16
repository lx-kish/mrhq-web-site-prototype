import React from 'react';
import Button from '../../hoc/btn/btn';

const Home = () => {
    return(
        <div className="home-screen">
            <div className="home-screen__sign">
                <h1>Launch your tech career in 14 weeks!</h1>
            </div>
            <div className="home-screen__buttons">
                <Button name="Apply" className="btn__gap--right" link="/apply"/>
                <Button name="Programmes" className="btn__gap--right" link="/programmes"/>
                <Button name="Gallery" className="" link="/gallery"/>
            </div>
        </div>
    )
}

export default Home;