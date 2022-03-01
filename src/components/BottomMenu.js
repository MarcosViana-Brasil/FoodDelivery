import React from 'react'

function BottomMenu({ link, icon, isHome }) {
    return (
        <li className={isHome ? 'active' : ''}>
            <a href={link}>
                <span className="icon">{icon}</span>
            </a>
        </li>
    )
}

export default BottomMenu
