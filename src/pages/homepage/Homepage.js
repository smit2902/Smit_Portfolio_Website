import React from 'react'
import './style.css'
// import Button from '@mui/material/Button';
import Pdf from './Smit_Resume.pdf';
import ArticleIcon from '@mui/icons-material/Article';

export const Homepage = () => {
  return (
    <>
    <div className='backimage'></div>
      <div className='mainHomePage'>
        <h1 className='hi'>Hi, I am <span className='name'>Smit Shah.</span></h1>
        <span className='mail'>Email : <a href = "mailto: smithsha2902@gmail.com" target="_blank"> smithshah2902@gmail</a></span>
        <h2>Front End Web Developer.</h2>
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
            <a href="https://github.com/smit2902" target="_blank">
              <img className='icon' src="https://cdn-icons-png.flaticon.com/128/733/733609.png"></img>
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/smitshah02/"  target="_blank">
              <img className='icon' src='https://cdn-icons-png.flaticon.com/128/2111/2111532.png'></img>
            </a>
          </span>
        </div>
        <footer className='footer'>
          Copyright &copy; Smit_Shah
        </footer>
      </div>
    </>
  )
}