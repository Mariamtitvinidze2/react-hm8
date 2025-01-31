import React from 'react'
import '../Card/Card.css'
import Image from '../../../assets/images/isometric.svg'
import NewImage from '../../../assets/images/Group.svg'
import ThirdImage from '../../../assets/images/Groups.svg'
import Title from '../../__molecules/Title/Title'


const Card = () => {
  return (
    <div className='MainDiv'>
       <img className='Image' src={Image} alt="Image" />
       <div>
       <img className='NewImage' src={NewImage} alt="NewImage" />
        <img className='ThirdImage' src={ThirdImage} alt="ThirdImage" />
       </div>

       <Title/>
      
    </div>
   )
}

export default Card