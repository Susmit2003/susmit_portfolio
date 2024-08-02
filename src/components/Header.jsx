
import React from 'react';
import { Typography } from '@material-ui/core';
import avatar from '../image/myImage.jpg';
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-10">
      <div className="flex justify-center">
        <img 
          className="w-64 h-64 m-4 rounded-full"
          src={avatar} 
          alt="Susmit Talukdar"
        />
      </div>
      <Typography className="text-tomato" variant="h3">
        <Typed className='text-white'strings={['Susmit Talukdar']} typeSpeed={70} />
      </Typography>
      <br />
      <Typography className="text-tan mb-12" variant="h5">
        <Typed className='text-white'
          strings={[
            'Bachelor of Engineering in Computer Science'
          ]}
          typeSpeed={70}
          backSpeed={60}
          loop
        />
      </Typography>
    </div>
  );
};

export default Header;
