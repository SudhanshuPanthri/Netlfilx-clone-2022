import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../assets/netflix.svg'
import { BsSearch } from 'react-icons/bs'
import { AiFillBell } from 'react-icons/ai'
import { MdAccountCircle } from 'react-icons/md'
import Link from 'next/link'

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            }
            else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className='headerParent' style={isScrolled ? styles.red : styles.transparent}>
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
            <div className='iconWrapper'>
                <BsSearch className='icon' />
                <p className='hidden'>Kids</p>
                <AiFillBell className='icon' />
                <Link href='/account'>
                    <MdAccountCircle className='icon' style={{ fontSize: '28px' }} />
                </Link>
            </div>
        </header>
    )
}

const styles = {
    red: {
        backgroundColor: '#141414'
    },
    transparent: {
        backgroundColor: 'transparent'
    }
}

export default Header;