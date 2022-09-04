import React, { useState } from 'react';
import Navbar from'./Navbar.js';
import aboutbackground from './aboutbackground.jpg';
import'./AboutPage.css';
import aboutusimg from './aboutusimg.jpeg';
import imageone from './1image.png';
import imagetwo from './2image.png';
import imagethree from './3image.png';
import imagefour from './4image.png';
import imagefive from './5image.png';
import imagesix from './6image.png';
import imageseven from './7image.png';
import imageeight from './8image.png';
import imagenine from './9image.png';
import imageten from './10image.png';
import './Contact.js';


import classNames from 'classnames';
import Contact from './Contact.js';
const AboutPage = () =>{
   const[readmore , setreadmore]= useState(true);
var x;
   const clicked = () =>{
    setreadmore(!readmore);
    readmore={readmore};
   }
   if(readmore){
     x='more';
   }
   else
   {x='less';
   }
   const classabout= classNames({readmore:readmore});
        return (

<div className='AboutPageBackground'>

           <div className='AboutUs' style={{ backgroundImage:`url(${aboutbackground})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
          
  
    <div className='HeadingBoxAbout' >
    <Navbar/>
        <div className='pehlaLine'>HULLAD</div>
        <div className='dusraLine'>know more About Us</div>
        
        <section id="section04" class="demoabout">
    <a href="#section04" ><span></span>Scroll</a>
</section>
</div>
    </div>
   
    <div className='dusraBox'>
        <div className='quotes'>Where Passion Meets Platform</div>
        <div className='AboutUsContext'>
            <img src={aboutusimg} alt='' className='AboutUsImg'/>
            <p className='AboutUsText'>
            Team Hullad was formed on 1st September,2018 by a group of young theatre enthusiasts to provide a platform to the young art 
            lovers to explore their passion in the field of art, mainly drama. In a month of its inception the Team got an opportunity 
            to perform on 2nd October , 2018 on the topic of -Swachh Bharat Abhiyan. Since this there was no looking back as the team keep 
            working hard to scale new heights by winning competitions and spreading awareness on different sensitive issues of the society. 
            We have partnered with various NGO’s to spread awareness in both rural and urban areas on pressing issues.
     <div className={classabout}>Over the years , we have also realized that education is much more than studies and it cannot be confined to a
     single dimension. Art , drama and extra-curricular activities have a huge impact in a persons’ overall development especially in understanding
     the society and human kind. Members associated with us are a testimony of the same. Team Hullad aims to leverage the energy of the youth to
     bring about positive change in the society and also give them a platform to explore and express themselves and become better citizens of the 
     world.</div> 
     <button  className='btn' onClick={clicked}>read{x}</button>
             </p>
            
        </div>
    </div>
    < div className='tisraBox'><div className='Boxpehlaoftisra'>
        <div className='VisionHeading'> OUR VISION</div>
        <div className='vision'>
        Team Hullad strives to be a platform where passionate people can get
an opportunity to not only develop their skills but also spread
awareness on the sensitive and alarming issues of the society.
In short, we leverage the youth to bring about positive change in the society.</div></div>
        
          <div className='Boxdusraoftisra'> <div className='joinHeading'>CAREERS</div>
            <div className='joinText'>Join Team Hullad to be a part of a diverse team where people come
together from different ethnicities and backgrounds to join hands to
create awareness on sensitive issues of the society and strive to
bring about a change with the medium of art.
At Team Hullad you not only sweat your blood but also explore, evolve
and experience different nuances of life.</div></div> 

    </div>
    <div className='Team'>
        <div className='MeetUs'> MEET OUR MEMBERS</div>
        <div className='Members'>
            <div className='MemberOne'>
            <div className='MemberBox'>
                
                <img className='MemberImg' alt='' src={imageone}/>
                <div className='AboutMember'>Ritik Kumar</div>
            </div>
            <div className='MemberBox'>
             
                <img className='MemberImg' alt='' src={imagetwo}/>
                <div className='AboutMember'>Megha Singh Rathore</div>
            </div>
            <div className='MemberBox'>
                
                <img className='MemberImg' alt='' src={imagethree}/>
                <div className='AboutMember'>Anshu Raj</div>
            </div>
            <div className='MemberBox'>
               
                <img className='MemberImg' alt='' src={imagefour}/>
                <div className='AboutMember'>Neha Singh </div>
            </div>
            <div className='MemberBox'>
               
                <img className='MemberImg' alt='' src={imagefive}/>
                <div className='AboutMember'>Purwa Pathak</div>
            </div>
            </div>
            <div className='MemberOne'>
            <div className='MemberBox'>
               
                <img className='MemberImg' alt='' src={imagesix}/>
                <div className='AboutMember'>Zeyaur Rahman Khan</div>
            </div>
            <div className='MemberBox'>
               
               <img className='MemberImg' alt='' src={imageseven}/>
               <div className='AboutMember'>Sunny Ranjan Singh</div>
           </div>
           <div className='MemberBox'>
               
               <img className='MemberImg' alt='' src={imageeight}/>
               <div className='AboutMember'>Debaduti Dey</div>
           </div>
           <div className='MemberBox'>
               
               <img className='MemberImg' alt='' src={imagenine}/>
               <div className='AboutMember'>Suveer Kumar</div>
           </div>
           <div className='MemberBox'>
               
               <img className='MemberImg' alt='' src={imageten}/>
               <div className='AboutMember'>Neha Singh</div>
           </div>
           </div>
        </div>
        <Contact/>
    </div>


  
</div>
        );
    }

 
export default AboutPage;




   