import React from 'react'
import './style.css'
// import Button from '@mui/material/Button';
import Pdf from './Yash_Nayak_Resume.pdf';
import ArticleIcon from '@mui/icons-material/Article';

export const Homepage = () => {
  return (
    <>
      <div className='mainHomePage'>
        <h1>Hi, I am <span className='name'>Yash Nayak.</span></h1>
        <span className='mail'>Email : <a href = "mailto: nayakyash2209@gmail.com" target="_blank"> nayakyash2209@gmail</a></span>
        <h2>Learning ReactJs from Vnurture Technology.</h2>
        <br />
        <p className='desc'>I am from Silver Oak College Of Engineering & Technology <br />
          Right now i am doing summer internship in Vnurture Technology <br />
          I am studying degree Bachelor Of Engineering in Computer <br />
          This is my self made Portfolio Website as a Project <br />
        </p>
        <div className='resubutton'>
        <button className='resume'>
          <a href={Pdf} target="_blank">
            <ArticleIcon />&nbsp;Resume</a>
        </button>
        </div>
        <div className='links'>
          <span>
            <a href="https://github.com/yash22nayak" target="_blank">
              <img className='icon' src="https://cdn-icons-png.flaticon.com/128/733/733609.png"></img>
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/yash-nayak-8537141a1/" >
              <img className='icon' src='https://cdn-icons-png.flaticon.com/128/2111/2111532.png'></img>
            </a>
          </span>
        </div>
        <footer className='footer'>
          Copyright &copy; Yash_Nayak
        </footer>
      </div>
    </>
  )
}