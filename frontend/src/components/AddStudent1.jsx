import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const AddStudent1 = (props) => {
  var[inputs,setInputs] = useState({Name:"",Age:"",Dept:"",Sal:""})

  //inputs are the values that will be added in the textfield
// to update value
var location = useLocation()
var navigate = useNavigate()
console.log("loc",location.state.val.Name)

  const inputHandler = (e)=>{
    setInputs({...inputs,[e.target.name]:e.target.value })
    // ... is the spread operator which keeps previous value and updates new values into the inputs
    //here, we r mapping e.target.name to e.target.value and the name and value will be specified inside each textfield
    console.log(inputs)
  }
//  use location hook is required

  const addHandler =()=>{
    console.log("Clicked")

    // link of postman is used in axios
     //postman link for adding values to db along with the inputs obtained from the textfield is added to the db in mongodb atlas
    if(location.state!==null){
        axios
        .put("http://localhost:3002/update/"+location.state.val._id,inputs)
        .then((res)=>{
            alert(res.data.message)
            navigate('/s')
        })


        .catch((err) =>
            console.log(err))
    }
    else{
        axios
        .post("http://localhost:3002/add" ,inputs)
        .then((res)=>{
      console.log(res)
      alert(res.data.message)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
    }
useEffect(()=>{
    if(location.state!==null){
        setInputs({...inputs,
            Name:location.state.val.Name,
            Age:location.state.val.Age,
            Dept:location.state.val.Dept,
            Sal:location.state.val.Sal  
    })
    }
},[])


  return (
    <div style={{textAlign:'center', marginTop:'10%'}}>
      <Typography variant='h4'>Add Employee Details</Typography> <br/><br/>
      <TextField variant='outlined' label='Name' on onChange={inputHandler} name='Name' value={inputs.Name}></TextField> <br/><br/>
      <TextField variant='outlined' label='Age' on onChange={inputHandler} name='Age' value={inputs.Age}></TextField> <br/><br/>
      <TextField variant='outlined' label='Department' on onChange={inputHandler} name='Dept' value={inputs.Dept} ></TextField> <br/><br/>
      <TextField variant='outlined' label='Salary' on onChange={inputHandler} name='Sal' value={inputs.Sal}></TextField> <br/> <br/>

      <Button variant='contained' onClick={addHandler}>Submit</Button>
    </div>
  )
}

export default AddStudent1
