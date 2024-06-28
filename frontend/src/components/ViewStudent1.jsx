import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const ViewStudent = () => {

  var[emp,setEmp]=useState([])

   //inorder to load immediately use useEffect
   var navigate = useNavigate();
    useEffect(()=>{
    axios
    .get("http://localhost:3002/view")
    .then((res)=>{
        console.log(res.data)
        setEmp(res.data) 
    })
    .catch((error)=>{console.log(error)})
     },[])

const delValue = (id)=>{
    console.log(id)
    axios
    .delete("http://localhost:3002/remove/"+id)
    .then((res)=>{
        // to forcefylly refresh
        alert(res.data.message);
        window.location.reload();
        
    })
    .catch((err) =>
        console.log(err));
}
const updateValue=(val)=>{
    console.log("Button Clicked")
    navigate("/b",{state:{val}})
}
  return (
    <div style={{marginTop:"3%"}}>
      <Grid container spacing={2}>
      {emp.map((val,i)=>{
        return ( 
        <Grid item xs={12} md={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Name : {val.Name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" >
              Age : {val.Age}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" >
              Dept : {val.Dept}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" >
              Sal : {val.Sal}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=>{delValue(val._id)}}>Delete</Button>
              <Button size="small" onClick={()=>{updateValue(val)}}>Update</Button>
            </CardActions>
          </Card>
       </Grid>
        )
      })}
      </Grid>
    </div> 
  )
}

export default ViewStudent
