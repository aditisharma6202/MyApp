import React, { Component } from 'react'
import './Form.css';

import { useState } from 'react';
import { useParams, useNavigate } from "react-router";
import aboutbackground from './aboutbackground.jpg';
import Navbar from './Navbar';
import axios from 'axios';




export default function Form() {

  var [user, setUser] = useState({
    nam: "", email: "", phone: "", contribute: ""
  });


  
const createUser=()=>{
  axios.post('/volunteer',user)
}
   

      
  return (<>
    <body className='fullpage' style={{ backgroundImage: `url(${aboutbackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <Navbar />
      <div className='formbody'>
        <div className="top">
          <h1 className="title">WELCOME TO THE FAMILY</h1>
          <p className="descrption">Fill this simple form and become part of our community</p>
        </div>
        <form className="registration-form">
          <div className="container">
            <fieldset className="intro">
              <label className="name-label" for="text">NAME: </label>
              <input className="nam" type="text" name="nam" id="nam"
                value={user.nam} onChange={(event)=>setUser({...user,nam: event.target.nam})}
                placeholder="name" required />

              <label className="email-label" for="email">EMAIL: </label>
              <input className="email" type="email" name="email" id="email"
                value={user.email} onChange={(event)=>setUser({...user,email:event.target.email})}
                placeholder="eg. abc@something.com" required />

              <label className="phone" for="tel">PHONE NUMBER: </label>
              <input className="phone" type="tel" name="phone" id="phone"
                value={user.phone} onChange={(event)=>setUser({...user,phone:event.target.phone})}
                placeholder="enter your mobile number" pattern="[0-9]{10}" required />

            </fieldset>
            <fieldset className="selections">

              <p className="learning-method">How do you want to contribute? </p>
              <label for="online">VOLUNTEER </label>
              <input type="radio" className="on" 
                value={user.contribute} onChange={(event)=>setUser({...user,contribute:event.target.contribute})}
                name="contribute" id="contribute" /><br />
              <label for="offline">MEMBER </label>
              <input type="radio" className="off"
                value={user.contribute} onChange={(event)=>setUser({...user,contribute:event.target.contribute})}
                name="contribute" id="contribute" />


            </fieldset>
          </div>
          <button className="submit" type="submit" onClick={createUser}>Submit</button>
        </form>
      </div>
    </body>
  </>
  );
}