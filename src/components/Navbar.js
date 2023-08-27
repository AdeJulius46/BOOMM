import React from 'react'
import logo from '../images/logo.png'
import '../App.css'

function Navbar() {
  return (
    <section className='nav-section w-100'>
        <nav class="nav size">
            <a class="navbar-brand" href="#"><img src={logo} alt="logo" style={{width: "10rem"}}/></a>
            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> */}

            <div className='nav-menu'>
                <ul class="nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="https://www.boomm.app/#home">HOME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.boomm.app/#about">ABOUT</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.boomm.app/#roadmap">ROADMAP</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.boomm.app/#team">TEAM</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.boomm.app/#faq">FAG</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.boomm.app/#">EN </a>
                </li>
                </ul>
            </div>
            <div className='nav-buttons'> 
                <button className='nav-btn btn px-5 bgSecondary1' type="submit">JOIN US</button>
                <button className='nav-btn btn px-5 bgSecondary2'>STAKE</button>
            </div>
        </nav>
    </section>
  )
}

export default Navbar