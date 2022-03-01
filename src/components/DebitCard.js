import React from 'react'

import bkcard from '../assets/back-card.png'
import visa from '../assets/visa-logo.png'
import bird from '../assets/bird-card.png'
import chip from '../assets/chip.png'
import back from '../assets/back.png'

function DebitCard() {
    return (
        <div className="cardGroup">
            <img src={bkcard} alt="" className="bk_card" />
            {/* <img src={bkcard} alt="" className="bk_card" /> */}
            {/* <img src={visa} alt="" className="card_logo" />
            <img src={chip} alt="" className="card_chip" />
            <img src={bird} alt="" className="card_bird" />
            <img src={back} alt="" className="card_back" />

            <div className="card_number">4532 5678 9000 1234</div>
            <div className="card_number_top">4532 5678 9000 1234</div>
            <div className="card_name">MARCOS CONSTANTINO</div> */}
            {/* <div className="card_from">10/20</div> */}

            {/* <div className="card_to">
                <span>12/27</span>
                <span>12/27</span>
            </div>
            <div className="card_ring"></div> */}
        </div>
    )
}

export default DebitCard
