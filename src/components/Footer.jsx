import React from 'react';
import { Typography } from './components-module';
import './Footer.scss';

const Footer = () => {
  return(
    <div className='footer'>
      <Typography variant='body2' color='inherit'>© Copyright WeatherDART LLC 2019, 2020</Typography>
    </div>
  )
}

export default Footer;