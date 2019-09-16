import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = (props) => {

    const items = [
        {
            type: 'main-menu__item',
            text: 'Home',
            link: '/'
        },
        {
            type: 'main-menu__item',
            text: 'Our story',
            link: '/story'
        },
        {
            type: 'main-menu__item',
            text: 'Programmes',
            link: '/programmes'
        },
        {
            type: 'main-menu__item',
            text: 'Gallery',
            link: '/gallery'
        },
        {
            type: 'main-menu__item',
            text: 'Funding',
            link: '/funding'
        },
        {
            type: 'main-menu__item',
            text: 'Industry Partners',
            link: '/partners'
        },
        {
            type: 'main-menu__item',
            text: 'Apply',
            link: '/apply'
        }
    ];

    const showItems = () => {
        return items.map((item, i) => {
            return (
                <li key={i} className={item.type}>
                    <Link to={item.link}>
                        {item.text}
                    </Link>
                </li>
            )
        })
    }

    return (
        <ul className="main-menu">
            {showItems()}
        </ul>
    )
}

export default MainMenu;