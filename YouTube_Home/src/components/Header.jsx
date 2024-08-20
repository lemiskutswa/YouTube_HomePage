import React, { useState } from 'react'
import YouTubeLogo from '../assets/images/youtube-logo.svg'
import HamburgerMenu from '../assets/images/hamburger-menu.svg'
import VoiceSearch from '../assets/images/voice-search-icon.svg'
import UploadButton from '../assets/images/upload.svg'
import SearchIcon from '../assets/images/search.svg'
import Notifications from '../assets/images/notifications.svg'
import ChannelPicture from '../assets/images/my-channel.jpeg'

export default function Header() {
    
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseOver() {
        setIsHovered(true)
    }

    function handleMouseOut() {
        setIsHovered(false)
    }

    return (
        <header className="header">
                <div className="left-section">
                    <img className="hamburger-menu" src={HamburgerMenu} alt="hamburger-menu" />
                    <img className="youtube-logo"src={YouTubeLogo} alt="YT-logo" />
                </div>
            
            <div className="middle-section">
                <input className="search-bar" type='text' placeholder='Search'/>
                <button className="search-button">
                    <img className="search-icon" src={SearchIcon} alt="search-icon" />
                </button>
                
                <div className="voice-search">
                    <button className="voice-search-button" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <img className="voice-search-icon" src={VoiceSearch} alt="voice-search-icon" />
                
                    </button>
                    <div className='voice-search-hover'>
                            {isHovered && <p>Search with your voice</p>}
                    </div>
                </div>
                
            </div>

            <div className="right-section">
                <img className="upload-button" src={UploadButton} alt="upload-button" />
                <img className="notifications-icon" src={Notifications} alt="notifications-icons" />
                <img className="my-channel-icon" src={ChannelPicture} alt="channel-picture" />
            </div>


        </header>
    )
}