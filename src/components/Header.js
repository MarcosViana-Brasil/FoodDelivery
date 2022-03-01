import React, { useEffect } from 'react'
import {
    BarChart,
    SearchRounded,
    ShoppingCartRounded,
} from '@mui/icons-material'

import logo from '../assets/logo-1.png'
import profile from '../assets/profile.png'

function Header() {
    useEffect(() => {
        const toggleMenu = document.querySelector('.toggleMenu')

        toggleMenu.addEventListener('click', () => {
            document.querySelector('.rightMenu').classList.toggle('active')
        })
    }, [])

    return (
        <header>
            <img src={logo} alt="logo" className="logo" />
            <div className="inputBox">
                <SearchRounded className="searchIcon" />
                <input type="text" placeholder="Search" />
            </div>

            <div className="shoppingCart">
                <ShoppingCartRounded className="cart" />
                <div className="cart_content">
                    <p>2</p>
                </div>
            </div>

            <div className="profileContainer">
                <div className="imgBox">
                    <img src={profile} alt="profile" />
                </div>

                <h2 className="userName">Marcos Viana</h2>
            </div>

            <div className="toggleMenu">
                <BarChart className="toggleIcon" />
            </div>
        </header>
    )
}

export default Header
