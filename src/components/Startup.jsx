import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: 'o auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid tan',
      right: '40px',
      top: 0,
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto',
      },
    },
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid tan',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: 'tomato tomato transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: 'tan',
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent tomato tomato',
      },
    },
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.2rem',
    color: '#fff',
    background: 'tomato',
    lineHeight: 1,
    padding: '0.5rem 1rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto',
      },
      '&:nth-of-type(2n):before': {
        display: 'none',
      },
    },
  },
  heading: {
    color: 'tomato',
    padding: '3rem 0',
    textTransform: 'uppercase',
  },
  subHeading: {
    color: '#fff',
    padding: 0,
    textTransform: 'uppercase',
  },
  body1: {
    color: 'tomato',
  },
  subtitle1: {
    color: 'tan',
  },
}));

// educations
const educations = [
  {
    id: 1,
    year: ' - MY utility Patent 1',
    universityName: 'Method of Electric Power Generation from Road Vehicle  ',
    department: 'Abstract: A system for the generation of electrical power utilizing the pressure of a running vehicle on roadways is disclosed. The system includes a frame of cuboid shape made with cast iron or stainless steel.The frame consists of many cylinders, a piston inside each cylinder, and a piezoelectric plate at the bottom of each cylinder. At steady conditions, the extreme top of those pistons is 3mm to 5mm above the road level. The cylinders are provided with two vents, the first one is to introduce the atmospheric air during the reverse stroke, and the second one is the outlet valve, used to push the compressed air to the air storage tank during the forward stroke. When a vehicle passes over the frame, the pistons inside the cylinders will get pressed. Thereafter, the compressed air will reach the air tanks via a controlled valve. At the same time, the pressure on the piezoelectric plates will increase, and electric power will generate at each plate. By connecting the plates in series and parallel combinations the net electric power can be increased and stored inside the battery. On the other hand, The compressed air inside the air tank can deliver the pressure to the torque turbine-generator system to generate electricity.',
    description: '',
  },
  {
    id: 2,
    year: ' MY design Patent 1 ',
    universityName: 'Pumping Cylinder',
    department: ' pumping cylinder contains a piston, a piezoelectric plate( at the bottom of each cylinder ), a spring and two vents, the first one is to introduce the atmospheric air during the reverse stroke, and the second one is the outlet valve, used to push the compressed air.',
    description: '',
  },
  {
    id: 3,
    year: ' MY design Patent 2 ',
    universityName: 'pumping box .',
    department: 'pumping box contains a frame of cuboid shape made with cast iron or stainless steel. The frame consists of many cylinders and every cylinder contains a piston, a piezoelectric plate( at the bottom of each cylinder ), a spring and two vents, the first one is to introduce the atmospheric air during the reverse stroke, and the second one is the outlet valve, used to push the compressed air. ',
    description: '',
  },
];



const Startup = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header">
        <Typography variant="h4" align="center" className={classes.heading}>
          MY PATENT
        </Typography>
        <Box component="div" className={classes.timeLine}>
          {/* start */}
          {educations.map((education) => (
            <>
              <Typography
                variant="h2"
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}
              >
                {education.year}
              </Typography>

              <Box component="div" className={classes.timeLineItem}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.subHeading}
                >
                  {education.universityName}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.body1}
                >
                  {education.department}
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.subtitle1}
                >
                  {education.description}
                </Typography>
              </Box>
            </>
          ))}
          {/* end */}
        </Box>
      </Box>
    </>
  );
};


export default Startup;