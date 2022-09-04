import React, { Component } from 'react';
import Navbar from './Navbar.js';
import bgimage from './bgimage.jpg';
import './Headbox.css';
import volunteer from './volunteer.png';
import member from './member.png';
import donate from './donate.png';
import imagebackground from './imagebackground.jpg';
import aboutusimg from './aboutusimg.jpeg';
import Contact from './Contact.js';
import Slides from './Slides.js';
import LatestCampaign from './LatestCampaign.js';


export class Headbox extends Component{
   
    render(){
       
        return(
            <>
           
        <div className='boxone' style={{ backgroundImage:`url(${bgimage})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',
    }}>
             <Navbar/>
            
            <div className='headerText'>
                <div className='text1'>Spreading Awareness Through Art </div>
                <div className='text2'>WHERE PASSION MEETS PLATFORM</div>
            
            </div>
            <section id="section04" class="demo">
  
  <a href="#section04" ><span></span>Scroll</a>
</section>
</div>
        <div className='optionBox'>
          
        
        <div className='option'>
                <img src={volunteer} alt='' className='vector'/>
                <div className='optionText'>Help us</div>
                <button className='optionHeading'>Volunteer</button>
            </div>
            <div className='option'>
                <img src={donate} alt='' className='vector'/>
                <div className='optionText'>Help Us</div>
                <button className='optionHeading'>Donate</button>
            </div>
            <div className='option'>
                <img src={member} alt='' className='vector'/>
                <div className='optionText'>Join Us</div>
                <button className='optionHeading'>Member</button>
            </div>  
        </div>
        <div className='aboutUs'>
            <div className='heading'> ABOUT US  </div>
            <div className='contentText'>Team Hullad was formed on 1st September,2018 by a group of young theatre enthusiasts to provide a 
            platform to the young art lovers to explore their passion in the field of art, mainly drama.Team Hullad aims to leverage 
            the energy of the youth to bring about positive change in the society and also give them a platform to explore and express 
            themselves and become better citizens of the world.</div>
        </div> 
        <div className='background'>
        <div className='ongoingProject'>
            <div className='images'>
                <img src={imagebackground} alt='' className='imageBackground'/>
                <img src={aboutusimg} alt='' className='frontImage'/>

            </div>
            <div className='text'>
            <div className='heading'> Women Empowerment</div>
            <div className='headingTwo'>Female Foeticide</div>
            <div className='contentText'>By calender, we have arrived in the 21st century but has our society
reached there yet? It still dwells in an era where females have to
fight for equality and survival with minimal results. Female foeticide
and dwindling child sex ratio is the proof of this evil. Jharkhand
ranks 4th in India in most female foeticide cases.
At Hullad we try to eradicate this issue by clearing the allusion
about the boon in the form a woman.</div></div>
        </div> 
        </div>

        
<div className='latestCampaigns'>
       
   <div className='slidingBox'> <Slides/></div>

      <div className='latestCampaignBox'><LatestCampaign/></div>


           
        </div>
        
<Contact/>
       </>

        )

        
    }
}
export default Headbox