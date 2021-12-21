import React, { useState, useEffect} from 'react'
import logo from '../logo.png'
import profile from '../profile.png'
import '../styles/nav.css'

function Navbar() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
       window.addEventListener('scroll', ()=>{
           if(window.scrollY > 0){
            handleShow(true)
           }else{
               handleShow(false)
           }
       })
    }, [])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img src={logo} alt='logo'className='nav__logo' />
            <img src={profile} alt='profile' className='nav__profile' />
        </div>
    )
}

export default Navbar
