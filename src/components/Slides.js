import React from 'react';
import ForwardArrow from './ForwardArrow.png';
import './Slides.css';
import BackwardArrow from './BackwardArrow.png';
import { useState } from 'react';
import campaign from './campaign.jpg';


                             
function Slides() {
  const Item1=
<div className='campaign'>
            <div className='headingA' id='a'>Mensuration</div>
            <div className='campaignText'> Menstruation or periods, is a topic which even today is uttered in
hushed voices. Old practices turned into beliefs which lost it's roots
and is now merely myths. Treating periods as a taboo adds to the
already challenging days. We aspire to remove the superstitions
surrounding it, to end the whispering and to accept it as a boon not
bane.</div></div>
 const Item2= <div className='campaign'>
<div className='headingA' id='a'>Organ Donation</div>
<div className='campaignText'>In India 2,00,000 Kidneys , 50,000 hearts and 50,000 levers are
required for transplantation every year. 1.5 Lakh people become brain
dead each year in India. If even 10% of them pledge their organs , no
living person will have to sacrifice their organs. </div>

</div>
const Item3=<div className='campaign'>
<div className='headingA' id='a'>Food Donation</div>
<div className='campaignText'>In India 2,00,000 Kidneys , 50,000 hearts and 50,000 levers are
required for transplantation every year. 1.5 Lakh people become brain
dead each year in India. If even 10% of them pledge their organs , no
living person will have to sacrifice their organs.</div>
</div>

 const itemList = [Item1,Item2 ,Item3];
const [CurrentIndex,setCurrentIndex]=useState(0);
const goToPrevious=()=>{
  const isFirstSlide= CurrentIndex === itemList.length-1;
  const newIndex = isFirstSlide ? itemList.length -1: CurrentIndex-1;
  setCurrentIndex(newIndex);
};

const goToNext=()=>{
  const isLastSlide= CurrentIndex === itemList.length-1;
  const newIndex = isLastSlide ? 0: CurrentIndex+1;
  setCurrentIndex(newIndex);
};
  return ( 
    <div className='slider-MainBox'>
     <img src={campaign} alt='' className='imageSlide'/>
     <div className='sliderBox'>
    <img src={BackwardArrow} alt='' className='arrow' onClick={goToPrevious}/>
    <div className='sliderText'>
      {itemList[CurrentIndex]}
    </div>
    <img src={ForwardArrow} alt='' className='arrow' onClick={goToNext}/>
    </div>
    </div>
   );
}

export default Slides; 