import React from 'react'
import './Audioplayer.css'
function AudioPlayer() {
    return (
        <div className='audio-player'>
            <div className='track-info'>
                <img 
                src='https://image.simplecastcdn.com/images/f7ad2703-76ce-47e9-936a-1201e5fddda0/0316596a-80f2-4061-a893-a1d995e11061/3000x3000/opjs-artwork.jpg?aid=rss_feed'
                className='audio-player-thumbnail'
                alt='trackname'
                />
                <h3 className='title'>Track Name</h3>
            <h4 className='artist'>Artist</h4>
            </div>
            <div className='player-actions'>
            
            </div>
        </div>
    )
}

export default AudioPlayer
