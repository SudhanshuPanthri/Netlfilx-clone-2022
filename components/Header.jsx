import React from 'react'
import Image from 'next/image'
import logo from '../assets/netflix.svg'

const Header = () => {
    return (
        <header className='headerParent'>
            <div className='headerWrapper'>
                <div className='logoWrapper'>
                    <Image src={logo} width={90} height={60} />
                </div>
                <ul className='list'>
                    <li className='item'>Home</li>
                    <li className='item'>TV Shows</li>
                    <li className='item'>Movies</li>
                    <li className='item'>New & Popular</li>
                    <li className='item'>My List</li>
                </ul>
            </div>
            <div>

            </div>
        </header>
    )
}

export default Header