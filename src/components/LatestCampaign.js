import React, { Component } from 'react';
import campaign from './campaign.jpg';
class LatestCampaign extends Component {
    state = {  } 
    render() { 
        return (<div>
            <div className='latestCampaigns'>
         <img src={campaign} alt='' className='imageOne'/>
         

            <div className='campaign'>
            <div className='headingA' id='a'>Mensuration</div>
            <div className='campaignText'> Menstruation or periods, is a topic which even today is uttered in
hushed voices. Old practices turned into beliefs which lost it's roots
and is now merely myths. Treating periods as a taboo adds to the
already challenging days. We aspire to remove the superstitions
surrounding it, to end the whispering and to accept it as a boon not
bane.</div>
        </div>
        <div className='campaign'>
            <div className='headingA' id='a'>Organ Donation</div>
            <div className='campaignText'>In India 2,00,000 Kidneys , 50,000 hearts and 50,000 levers are
required for transplantation every year. 1.5 Lakh people become brain
dead each year in India. If even 10% of them pledge their organs , no
living person will have to sacrifice their organs. </div>
            
        </div>
        <div className='campaign'>
            <div className='headingA' id='a'>Food Donation</div>
            <div className='campaignText'>In India 2,00,000 Kidneys , 50,000 hearts and 50,000 levers are
required for transplantation every year. 1.5 Lakh people become brain
dead each year in India. If even 10% of them pledge their organs , no
living person will have to sacrifice their organs.</div>
        </div></div></div>
        );
    }
}
 
export default LatestCampaign;