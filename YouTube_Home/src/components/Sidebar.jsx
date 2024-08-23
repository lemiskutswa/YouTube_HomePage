import React from 'react'
import Home from '../assets/images/home-icon1.png'
import Shorts from '../assets/images/shorts-icon.png'
import Subscriptions from '../assets/images/subscriptions-icon.png'
import You from '../assets/images/you.webp'

export default function Sidebar() {
    return (
        <section className="sidebar">
            <div>
                <img src={Home} alt="home-icon" className='sidebar-icons'/>
                <p>Home</p>
            </div>

            <div>
                <img src={Shorts} alt="shorts-icon" className='sidebar-icons'/>
                <p>Shorts</p>
            </div>

            <div>
                <img src={Subscriptions} alt="subs-icon" className='sidebar-icons'/>
                <p>Subscriptions</p>
            </div>

            <div>
                <img src={You} alt="you-icon" className='sidebar-icons'/>
                <p>You</p>
            </div>
        </section>
    )
}