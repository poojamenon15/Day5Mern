import React from 'react'
import {Box, AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const Navibar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
       <AppBar position="static">
        <Toolbar> 
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StudentApp
          </Typography>
           <Button color="inherit"><Link to={'/b'} style={{textDecoration:'none', color: 'white'}}>Add Student</Link></Button>
          <Button color="inherit"><Link to={'/s'} style={{textDecoration:'none', color: 'white'}}>View Student</Link></Button> 
        </Toolbar>
       </AppBar>
      </Box>
    </div>
  )
}

export default Navibar
