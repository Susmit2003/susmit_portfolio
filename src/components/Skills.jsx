import React from 'react';
import Navbar from './Navbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles({
  heading: {
    color: 'tomato',
    paddingTop: '1.5rem',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
  },
  mainContainer: {
    height: '100%',
    padding: '1rem',
  },
  cardContainer: {
    maxWidth: 450,
    margin: '0.2rem auto',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

    '&:hover': {
      msTransform: 'scale(1.2)',
      webkitTransform: 'scale(1.2)',
      transform: 'scale(1.05)',
      backfaceVisibility: 'hidden',
      // transform: 'translateZ(0)',
      transitionProperty: 'transform',
      transitionDuration: '0.25s',
      transitionTimingFunction: 'ease-out',
      transitionDelay: '0s',
    },
  },
  projectName: {
    color: 'tomato',
    fontSize: '20px',
  },
  language: {
    background: 'white',
    margin: '1.5rem auto',
    borderRadius: '0.5rem ',
    padding: '1.5rem',
  },
  languageView: {
    display: 'flex',
    color: 'tomato',
  },
});

const skills = [
  {
    title: 'HTML',
    logo: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
  },
  {
    title: 'JavaScript',
    logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
  },
  {
    title: 'MongoDB',
    logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg',
  },

  {
    title: 'CSS',
    logo: 'https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png',
  },
 
  
  {
    title: 'Bootstrap',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png',
  },
  {
    title: 'ReactJS',
    logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
  },
  // msql
  {
    title: 'SQL',
    logo:
      'https://seeklogo.com/images/M/mysql-logo-69B39F7D18-seeklogo.com.png',
  },

  {
    title: 'C++',
    logo:
      'data:image/png;base64,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',
  },
  {
    title: 'Java',
    logo:
      'data:image/jpeg;base64,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',
  },

  {
    title: 'NodeJS',
    logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
  },
  
  {
    title: 'VS Code',
    logo: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code.svg',
  },

  {
    title: 'ExpressJS',
    logo: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
  },

  
  
];
function Skills() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="div" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          MY SKILLS
        </Typography>
        <div className={classes.language}>
          <Grid container justify="center">
            {skills.map((skill, i) => (
              <Grid item xs={12} sm={8} md={4} key={i}>
                <Card className={classes.cardContainer}>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        <span className={classes.languageView}>
                          <Avatar
                            src={skill.logo}
                            style={{ marginRight: '10px' }}
                          />
                          {skill.title}
                        </span>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Box>
    </>
  );
}

export default Skills;
