// import React from 'react';
// import Navbar from './Navbar';
// import { makeStyles } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// import project1 from '../image/todoAppReactWithFirebase.png';
// import project2 from '../image/reactWeatherApp.png';
// import project3 from '../image/portfolioUsingReact.png';

// const useStyles = makeStyles((theme) => ({
//   heading: {
//     color: 'tomato',
//     paddingTop: '1.5rem',
//     textTransform: 'uppercase',
//   },
//   mainContainer: {
//     height: '100%',
//   },
//   cardContainer: {
//     maxWidth: 345,
//     margin: '3rem auto',
//     '&:hover': {
//       msTransform: 'scale(1.2)',
//       webkitTransform: 'scale(1.2)',
//       transform: 'scale(1.05)',
//       backfaceVisibility: 'hidden',
//       // transform: 'translateZ(0)',
//       transitionProperty: 'transform',
//       transitionDuration: '0.25s',
//       transitionTimingFunction: 'ease-out',
//       transitionDelay: '0s',
//     },
//   },

//   projectName: {
//     color: 'tomato',
//   },
//   projectDescription: {
//     color: 'rgb(132 29 2 / 1)',
//   },
//   button: {
//     backgroundColor: 'rgb(218 218 218)',
//   },
// }));

// const projects = [
//   {
//     image: project1,
//     name: 'pumping cylinder',
//     description: `This is a pumping cylinder which contains a piston, a piezoelectric plate( at the bottom of each cylinder ),
//      a spring and two vents, the first one is to introduce the atmospheric air during the reverse stroke, and the second one is 
//      the outlet valve, used to push the compressed air..`,
    
//     live: 'https://react-firebase-todo-app-d37d1.web.app/',
//     source: 'https://github.com/sakilk130/react-firebase-todo-app',
//   },
//   {
//     image: project2,
//     name: 'Weather App',
//     description: `This is a Weather app. Where you can search a city and see current weather temperature, \
//     wind speed etc. As front end I used JavaScript library called 'React'. I used 'OpenWeather' APIs For request \
//     data and  display data.`,
//     tools: ['javascript', 'react'],
//     live: 'https://react-weather-app-v1.netlify.app/',
//     source: 'https://github.com/sakilk130/react-weather-app',
//   },
//   {
//     image: project3,
//     name: 'My Portfolio Website',
//     description: `This is my Portfolio Website. Also this is a part of projects. Where people can see some information \
//     about me. There are 6 pages like Home, Resume, Portfolio, Contacts, Skills and Educations. For this project i \
//     used 'React' for front end and 'Material-UI'.`,
//     tools: ['javascript', 'react'],
//     live: 'https://sakilkhan.netlify.app/',
//     source: 'https://github.com/sakilk130/react-portfolio-website',
//   },
// ];

// const Portfolio = () => {
//   const classes = useStyles();
//   return (
//     <>
//       <Navbar />
//       <Box component="div" className={classes.mainContainer}>
//         <Typography variant="h4" align="center" className={classes.heading}>
//           Projects
//         </Typography>
//         <Grid container justify="center">
//           {/* Projects */}
//           {projects.map((project, i) => (
//             <Grid item xs={12} sm={8} md={4} key={i}>
//               <Card className={classes.cardContainer}>
//                 <CardActionArea>
//                   <CardMedia
//                     component="img"
//                     alt="Project 1"
//                     height="140"
//                     image={project.image}
//                   />
//                   <CardContent>
//                     <Typography
//                       variant="h5"
//                       gutterBottom
//                       className={classes.projectName}
//                     >
//                       {project.name}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color="textSecondary"
//                       className={classes.projectDescription}
//                     >
//                       {project.description}
//                     </Typography>

//                     {/* Tools */}
//                     {project.tools.map((tool, i) => (
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         size="small"
//                         style={{
//                           marginRight: '5px',
//                           height: '18px',
//                           background: 'rgb(95 176 71)',
//                         }}
//                         key={i}
//                       >
//                         {tool}
//                       </Button>
//                     ))}
//                     {/* end */}
//                   </CardContent>
//                 </CardActionArea>
//                 <CardActions className={classes.button}>
//                   <Button
//                     variant="contained"
//                     size="small"
//                     color="primary"
//                     target="blank"
//                     href={project.live}
//                   >
//                     Live Demo
//                   </Button>
//                   <Button
//                     variant="contained"
//                     size="small"
//                     color="secondary"
//                     style={{ background: '#589084' }}
//                     target="blank"
//                     href={project.source}
//                   >
//                     Source Code
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//           {/* end */}
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default Portfolio;
