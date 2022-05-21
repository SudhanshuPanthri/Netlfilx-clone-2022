import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../assets/netflix.svg'

const login = () => {

    const [login, setLogin] = useState(false);

    return (
        <div className='loginParent'>
            <Head>
                <title>Netflix - Login</title>
            </Head>
            <div className='blender'></div>
            <div className='loginHeader'>
                <Image src={logo} width={160} height={160} />
            </div>
            <div className='loginForm'>
                <h1 style={{ color: 'whitesmoke' }}>Sign In</h1>
                <label>
                    <input type="email" placeholder='Enter Email' className='inp' />
                </label>
                <label>
                    <input type="password" placeholder='Enter Password' className='inp' />
                </label>
                <button className='signInBtn'>Sign In</button>
                <div className='signUp'>
                    <p>New to Netflix ?</p>
                    <button type='submit'>Sign Up Now</button>
                </div>
            </div>
        </div>
    )
}

export default login