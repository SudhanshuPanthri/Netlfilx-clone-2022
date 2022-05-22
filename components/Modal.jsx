import React, { useEffect, useState } from 'react'
import MuiModal from '@mui/material/Modal'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atom/modalAtom'
import { AiFillCloseCircle, AiFillPlusCircle, AiFillLike } from 'react-icons/ai'
import ReactPlayer from 'react-player/lazy'
import { BsFillPlayFill, BsVolumeMute } from 'react-icons/bs'

const Modal = () => {
    const [showModal, setShowModal] = useRecoilState(modalState);
    const [movie, setMovie] = useRecoilState(movieState);
    const [trailer, setTrailer] = useState('')
    const [genres, setGenres] = useState([]);
    const [muted, setMuted] = useState(false);

    const handleClose = () => {
        setShowModal(false)
    }

    useEffect(() => {
        if (!movie) return

        async function fetchMovie() {
            const data = await fetch(`https://api.themoviedb.org/3/${movie?.media_type === 'tv' ? 'tv' : 'movie'
                }/${movie?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY
                }&language=en-US&append_to_response=videos`).then((response) => response.json())

            if (data?.videos) {
                const index = data.videos.results.findIndex((element) => element.type === 'Trailer')
                setTrailer(data.videos?.results[index]?.key)
            }
            if (data?.genres) {
                setGenres(data.genres);
            }
        }
        fetchMovie()
    }, [movie])

    // console.log(trailer);
    return (
        <MuiModal open={showModal} onClose={handleClose} className='modal'>
            <>
                <button onClick={handleClose} className='closeModal'>
                    <AiFillCloseCircle className='closeIcon' />
                </button>
                <div className='playerWrapper'>
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${trailer}`}
                        width="100%"
                        height="100%"
                        style={{ position: 'absolute', top: '0', left: '0' }}
                        playing
                        muted={muted}
                    />
                </div>
                <div>
                    <div className='modalPlayButton'>
                        <button className='playBtn'>
                            <BsFillPlayFill style={{ fontSize: '24px', }} />
                            Play
                        </button>
                        <button className='transparent'>
                            <AiFillPlusCircle className='circle' style={{ fontSize: '36', color: 'whitesmoke', margin: '0 10px' }} />
                        </button>
                        <button className='transparent'>
                            <AiFillLike className='like' style={{ fontSize: '36', color: 'whitesmoke', margin: '0 10px' }} />
                        </button>
                    </div>
                    <button className='mute' onClick={() => setMuted(!muted)}>
                        <BsVolumeMute style={{ fontSize: '36', color: 'whitesmoke', margin: '0 10px' }} />
                    </button>
                </div>
                <div className='infoWrapper'>
                    <div>likes</div>
                    <div className='bottomWrapper'>
                        <div>info</div>
                        <div>genre</div>
                    </div>
                </div>
            </>
        </MuiModal>
    )
}

export default Modal