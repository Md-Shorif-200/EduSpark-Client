// import React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';


// const bull = (
//     <Box
//       component="span"
//       sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//       •
//     </Box>
//   );


const Faculty = ({facultyData}) => {

    const {icon,title,description} = facultyData;

     

     return (

        <div className="faculty_card card bg-base-100 rounded-lg my-10 ">
  <div className="card-body text-center">
        <img src={icon} alt="faculty icon" className="w-[50px] mx-auto" />
    <h2 className="capitalize text-lg my-3 font-bold"> {title} </h2>
  </div>
</div>
    // <Card sx={{ minWidth: 275 }}>
    //   <CardContent>
    //     <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
    //       Word of the Day
    //     </Typography>
    //     <Typography variant="h5" component="div">
    //       be{bull}nev{bull}o{bull}lent
    //     </Typography>
    //     <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
    //     <Typography variant="body2">
    //       well meaning and kindly.
    //       <br />
    //       {'"a benevolent smile"'}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
  );

};

export default Faculty;