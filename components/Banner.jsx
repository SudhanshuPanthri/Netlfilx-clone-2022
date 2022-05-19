import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'
import { baseURL } from '../constants/movie'

const Banner = ({ netflixOriginals }) => {

    const [movie, setMovie] = useState('');
    useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    }, [netflixOriginals])

    console.log(movie)
    return (
        <div className='bannerParent'>
            <div className='bannerWrapper'>
                <Image src={`${baseURL}${movie.backdrop_path || movie.poster_path}`} layout="fill" objectFit="cover" />
            </div>
            <h1 className='bannerTitle'>{movie.title || movie.name || movie.original_name}</h1>
            <p className='bannerInfo'>{movie.overview}</p>
        </div>
    )
}

export default Banner