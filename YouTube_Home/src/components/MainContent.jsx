import React from 'react'

export default function MainContent(props) {
    return (
        <div className='sidebar-main'>
            <section className="videos-grid">
                <div className="video-preview">

                    <div className="thumbnail-row">
                        <img className="thumbnail-1" src={`src/assets/images${props.item.videoThumbnail}`} alt="marques-brownlee"></img>
                    </div>

                    <div className="video-info-grid">

                        <div className="channel-image">
                            <img src="channel-pictures/brownlee.jpeg" alt="brownlee" className="profile-picture"></img>
                        </div> 
                        
                        <div className="video-details">
                            <p className="video-title">{props.item.videoTitle}</p>
                            <p className="video-author">{props.item.videoAuthor}</p>
                            <p className="video-stats">{props.item.videoStats}</p>
                        </div>

                    </div>

                </div>
            </section>
        </div>

    )
}