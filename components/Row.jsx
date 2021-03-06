import React from 'react'
// import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Thumbnail from './Thumbnail'

const Row = ({ title, movies }) => {
    return (
        <>
            <h2 className='rowTitle'>{title}</h2>
            <div className='rowParent'>
                {/* <AiOutlineLeft className='scrollerLeft' />
                <AiOutlineRight className='scrollerRight' /> */}

                <div className='thumbnailWrapper'>
                    {movies.map((movie) => (
                        <Thumbnail key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </>
        // </Carousel>
    )
}

export default Row