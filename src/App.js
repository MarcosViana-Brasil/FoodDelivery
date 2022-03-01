import { useEffect, useState } from 'react'
import {
    AccountBalanceWalletRounded,
    Chat,
    Favorite,
    HomeRounded,
    Settings,
    SummarizeRounded,
} from '@mui/icons-material'
import './App.css'
import BottomMenu from './components/BottomMenu'
import Header from './components/Header'
import BannerName from './components/BannerName'
import SubMenuContainer from './components/SubMenuContainer'
import MenuCard from './components/MenuCard'

import { MenuItems, Items } from './components/Data.js'
import burger from '../src/assets/burger.png'
import delivery from '../src/assets/delivery.png'
import ItemCard from './components/ItemCard'
import DebitCard from './components/DebitCard'
import CartItem from './components/CartItem'

function App() {
    const [isMainData, setIsMainData] = useState(
        Items.filter((element) => element.itemId === 'buger01')
    )

    useEffect(() => {
        const menuLi = document.querySelectorAll('#menu li')

        function setMenuActive() {
            menuLi.forEach((n) => n.classList.remove('active'))
            this.classList.add('active')
        }

        menuLi.forEach((n) => n.addEventListener('click', setMenuActive))

        function setMenuCardActive() {
            menuCards.forEach((n) => n.classList.remove('active'))
            this.classList.add('active')
        }

        const menuCards = document.querySelectorAll('.rowMenuCard')
        menuCards.forEach((n) => n.addEventListener('click', setMenuCardActive))
    }, [isMainData])

    // filter items
    const setData = (itemId) => {
        setIsMainData(Items.filter((element) => element.itemId === itemId))
    }

    return (
        <div className="App">
            {/* Header Section */}
            <Header />

            {/* Main Container */}
            <main>
                <div className="mainContainer">
                    {/* Banner */}
                    <div className="banner">
                        <BannerName
                            name={'Marcos'}
                            discount={'25'}
                            link={'#'}
                        />
                        <img
                            src={delivery}
                            alt="delivery"
                            className="deliveryPic"
                        />
                    </div>

                    {/* dishContainer */}
                    <div className="dishContainer">
                        <div className="menuCard">
                            <SubMenuContainer name={'Menu Category'} viewAll />
                        </div>
                        <div className="rowContainer">
                            {MenuItems &&
                                MenuItems.map((data, index) => (
                                    <div
                                        key={data.id}
                                        onClick={() => setData(data.itemId)}
                                    >
                                        <MenuCard
                                            imgSrc={data.imgSrc}
                                            name={data.name}
                                            isActive={
                                                data.id === 1 ? true : false
                                            }
                                        />
                                    </div>
                                ))}
                        </div>
                        <div className="dishItemContainer">
                            {isMainData &&
                                isMainData.map((data) => (
                                    <ItemCard
                                        key={data.id}
                                        itemId={data.id}
                                        imgSrc={data.imgSrc}
                                        name={data.name}
                                        ratings={data.ratings}
                                        price={data.price}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
                <div className="rightMenu">
                    <div className="debitCardContainer">
                        <div className="debitCard">
                            <DebitCard />
                        </div>
                    </div>

                    <div className="cartCheckouContainer">
                        <SubMenuContainer name={'Cart Items'} />
                        <div className="cartContainer">
                            <div>
                                <CartItem
                                    name={'Burger Bistro'}
                                    imgSrc={burger}
                                    qty={'4'}
                                    price={'7.95'}
                                />
                            </div>
                        </div>
                        <div className="totalSection">
                            <h3>Total</h3>
                            <p>
                                <span>$ </span>42.00
                            </p>
                        </div>
                        <button className="checkOut">Check Out</button>
                    </div>
                </div>
            </main>

            {/* Bottom Menu */}
            <div className="bottomMenu">
                <ul id="menu">
                    <BottomMenu link={'#'} icon={<HomeRounded />} isHome />
                    <BottomMenu link={'#'} icon={<Chat />} />
                    <BottomMenu
                        link={'#'}
                        icon={<AccountBalanceWalletRounded />}
                    />
                    <BottomMenu link={'#'} icon={<Favorite />} />
                    <BottomMenu link={'#'} icon={<SummarizeRounded />} />
                    <BottomMenu link={'#'} icon={<Settings />} />

                    <div className="indicator"></div>
                </ul>
            </div>
        </div>
    )
}

export default App

// parei 3:24
