
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myImage from '../image/myImage.jpg';
import Footer from './Footer';
import HomeContract from './HomeContract';
import { AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import BuildIcon from '@material-ui/icons/Build';
import SchoolIcon from '@material-ui/icons/School';

const menuItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
    listPath: '/',
  },
  {
    listIcon: <BuildIcon />,
    listText: 'Skills',
    listPath: '/skills',
  },
  {
    listIcon: <SchoolIcon />,
    listText: 'Education',
    listPath: '/education',
  },
  {
    listIcon: <SchoolIcon />,
    listText: 'MY Patent',
    listPath: '/startup',
  },
  {
    listIcon: <ContactMail />,
    listText: 'Contact',
    listPath: '/contacts',
  },
];

function Navbar() {
  const [slider, setSlider] = useState(false);

  const toggleSlide = (open) => () => {
    setSlider(open);
  };

  const sideList = () => (
    <div
      className="w-64 h-full bg-gradient-to-r from-black to-red-900 p-4"
      onClick={toggleSlide(false)}
    >
      <img
        className="block mx-auto my-2 w-14 h-14 rounded-full"
        src={myImage}
        alt="Susmit Talukdar"
      />
      <div className="border-t border-gray-200 my-4"></div>
      <ul>
        {menuItems.map((item, key) => (
          <li key={key}>
            <Link
              to={item.listPath}
              className="flex items-center text-gray-300 hover:text-white py-2"
            >
              <span className="text-tan">{item.listIcon}</span>
              <span className="ml-4">{item.listText}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <nav>
        
        <div className="bg-gray-900">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <button onClick={toggleSlide(true)}>
              <ClearAllIcon className="text-red-500" />
            </button>
            <h1 className="text-white text-xl">
              <a href="/" className="text-white no-underline">
                Susmit Talukdar
              </a>
            </h1>
            <HomeContract />
          </div>
        </div>
        {slider && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
            <div className="relative bg-white w-64 h-full">
              {sideList()}
              <Footer />
            </div>
            <div
              className="flex-grow"
              onClick={toggleSlide(false)}
            ></div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
