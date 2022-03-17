import React from 'react';
import 'boxicons';

import MainContent from './MainContent';
import Footer from './Footer';
import userPic from '../images/hisoka.jpg';

export default function Header() {
  return (
    <>
      <header className='header'>
        <img src={userPic} alt='' />
        <div className='header__content'>
          <div className='header__text'>
            <h1>Emanuelle Martin</h1>
            <p>Frontend Developer</p>
            <small>@teppeiKiyoshi</small>
          </div>
          <div className='header__links'>
            <a href='#' className='btn btn-email'>
              <i class='bx bx-envelope bx-xs bx-tada-hover'></i> Email
            </a>
            <a
              href='#'
              className='btn btn-lin'
            >
              <i class='bx bxl-linkedin-square bx-xs bx-tada-hover'></i>{' '}
              LinkedIn
            </a>
          </div>
          <MainContent />
        </div>
        <Footer />
      </header>
    </>
  );
}
