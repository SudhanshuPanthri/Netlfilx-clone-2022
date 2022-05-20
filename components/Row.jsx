import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Thumbnail from './Thumbnail'

const Row = ({ title, movies }) => {
    return (
        <div className='rowParent'>
            <h2 className='rowTitle'>{title}</h2>
            <div className='scrollerWrapper'>
                <AiOutlineLeft className='scrollerLeft' />
                <div className='thumbnailWrapper'>
                    {movies.map((movie) => {
                        <Thumbnail key={movie.id} movie={movie} />
                    })}
                </div>
                <AiOutlineRight className='scrollerRight' />
            </div>
        </div>
    )
}

export default Row