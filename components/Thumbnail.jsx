import React from 'react'
import Image from 'next/image'
// import logo from '../assets/netflix.svg'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atom/modalAtom'

const Thumbnail = ({ movie }) => {
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [showMovie, setShowMovie] = useRecoilState(movieState)
    return (
        <div className='thumbnailParent'>
            <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} layout='fill' className='cardImg' onClick={() => {
                setShowMovie(movie)
                setShowModal(true);
            }} />
        </div>
    )
}

export default Thumbnail
