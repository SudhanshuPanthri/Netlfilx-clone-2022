import React from 'react'
import Image from 'next/image'

const Thumbnail = ({ movie }) => {
    console.log(movie);
    return (
        <div className='thumbnailParent'>
            {/* <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} layout='fill' className='cardImg' /> */}
            <p style={{ color: 'white' }}>thumbnail</p>
        </div>
    )
}

export default Thumbnail