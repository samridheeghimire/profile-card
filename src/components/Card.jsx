import React from 'react'
import photo from '../assets/sam.jpg'
import { FaFacebook, FaGithub, FaInstagram, FaRegComment, FaRegHeart, FaTwitter } from 'react-icons/fa'
import { RiShareForwardLine } from 'react-icons/ri'
import './Card.css'
import Button from './Button'
import './Button.css'
const Card = () => {
  return (
    <div className='head'>
        <div className='main'>
            <div className='color'>
                <img src={photo} alt="" />
            </div>
            <h1>Samridhee Ghimire</h1>
            <p> Student</p>
        
         <div className='icons'>

          <FaFacebook className='facebook'/>
          <FaGithub className='git'/>
          <FaInstagram className='insta'/>
          <FaTwitter className='twitter'/>
          </div>
          <div className='button'>
          <Button label='Message'/>
          <Button label='View Projects'/>
          </div>
        <div className='likes'>
        <div className='heart'> 
        <FaRegHeart/> 
        <span> 2.4k</span></div>
        <div className='comment'>
            <FaRegComment className='icon' /> 
            <span> 200</span>
          </div>
          <div className='share'>
            <RiShareForwardLine className='ic'/> 
            <span> 100</span>
        </div>
    </div>
    </div>
    </div>
    
  )
}

export default Card