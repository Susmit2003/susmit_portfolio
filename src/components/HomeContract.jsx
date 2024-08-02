
import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// data
const contracts = [
  {
    id: 1,
    name: 'GitHub',
    icon: GitHubIcon,
    username: 'susmit2003',
    link: 'https://github.com/Susmit2003',
  },
  {
    id: 2,
    name: 'LinkedIn',
    icon: LinkedInIcon,
    username: 'susmit2003',
    link: 'https://www.linkedin.com/in/susmit-talukdar-7772a0244/',
  },
];

function HomeContract() {
  return (
    <div className="ml-[5%] flex justify-center space-x-4 bg-transparent">
      {contracts.map((contract) => (
        <a 
          key={contract.id}
          href={contract.link}
          target="_blank"
          rel="noopener noreferrer"
          title={contract.username}
          className="text-white flex flex-col items-center text-tan hover:text-tomato transition-colors duration-300"
        >
          <contract.icon className="w-8 h-8" />
        </a>
      ))}
    </div>
  );
}

export default HomeContract;
