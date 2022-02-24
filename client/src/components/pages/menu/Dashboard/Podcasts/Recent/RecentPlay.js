import React from 'react'
import './RecentPlay.css'
function Recent({title, artist, Thumbnail}) {
    return (
        <div className='recent-container'>
            <div className='recent-thumbnail'>
              <img src= {Thumbnail} className='recent-thumbnail' alt=''/>
            </div>
            <div className='recent-info'>
            <h3 className='title'>{title.length <= 16 ? title :<br/>}</h3>
            <h4 className='artist'>{artist}</h4>
            </div>
        </div>
    )
}

export default Recent
