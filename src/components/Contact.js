import React, { Component } from 'react';
import backgroundcontact from './backgroundcontact.jpg';
import instagram from './instagram.png';
import email from './email.png';
import twitter from './twitter.png';
import facebook from './facebook.png';
import call from './call.png';
import location from './location.png';
import './Contact.css';

class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div className='contactBox'style={{ backgroundImage:`url(${backgroundcontact})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                <div className='headingContact'>
                    Contact Us
                </div>
                <div className='links'>
                    <img className='vector' src={instagram} alt='' />
                    <img className='vector' src={twitter} alt='' />
                    <img className='vector' src={facebook} alt=''/>   
                </div>
                <div className='detailBox'>
                <div className='details'> 
                <img className='vectorContact'src={call} alt=''/>
                <div className='contactText'>9386552333</div>
                </div>
                <div className='details'> 
                <img className='vectorContact'src={email} alt=''/>
                <div className='contactText'>- teamhullad.dramsoc@gmail.com</div>
                </div>
                <div className='details'> 
                <img className='vectorContact'src={location} alt=''/>
                <div className='address'>1009, New Nagar , Dipatoli ,<div> Bangarri , Bariatu , Ranchi - 834009 </div></div>
                </div>
                
                </div>

            </div>
            </>
        );
    }
}
 
export default Contact;