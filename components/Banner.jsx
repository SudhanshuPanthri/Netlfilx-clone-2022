import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'
import { baseURL } from '../constants/movie'
import { BsFillPlayFill } from 'react-icons/bs'
import { AiFillInfoCircle } from 'react-icons/ai'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atom/modalAtom'

const Banner = ({ netflixOriginals }) => {

    const [movie, setMovie] = useState('');
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [showMovie, setShowMovie] = useRecoilState(movieState)
    useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    }, [netflixOriginals])

    return (
        <div className='bannerParent'>
            <div className='blend'></div>
            <div className='bannerWrapper'>
                <Image src={`${baseURL}${movie.backdrop_path || movie.poster_path}`} layout="fill" objectFit="cover" />
            </div>
            <h1 className='bannerTitle'>{movie.title || movie.name || movie.original_name}</h1>
            <p className='bannerInfo'>{movie.overview}</p>
            <div className='buttonContainer'>
                <div className='buttonWrapper'>
                    <BsFillPlayFill style={{ fontSize: '24px', }} />
                    <button className='btn'>Play</button>
                </div>
                <div className='buttonWrapper'>
                    <button className='btn' onClick={() => {
                        setShowMovie(movie)
                        setShowModal(true);
                    }}>More Info</button>
                    <AiFillInfoCircle style={{ fontSize: '24px' }} />
                </div>
            </div>
        </div>
    )
}

export default Banner