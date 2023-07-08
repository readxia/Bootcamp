import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { object, string, number} from 'yup'
import {yupResolver} from '@hookform/resolvers'

const App = () => {
  //have to have defined validation properties to pass to useForm
  const userSchema = object(
    {
      fname: string().min(1).max(10)
    }
  )

  const { 
    register, //allows to register our selected elements
    handleSubmit, //handles data once form is submitted
    setValue, //takes care of chanign state of our values
    reset, // allows us to reset the WHOLE form
    formState: {errors: errors}
  } = useForm({
    resolver: yupResolver(userSchema)
  })

  const initialState = {
    fname: "George",
    lname: "Of the Jungle"
  };
  const [data, setData] = useState(initialState);
  const onSubmit = (data) => {
    console.log(data)
    //make sure to send data to database before reseting
    reset() // access reset function from useForm
    // e.preventDefault();
  };

  const handleChange = (event) => {
    // console.log(`${event.target.name}: ${event.target.value}`);
    // setData({ ...data, [event.target.name]: event.target.value });
    setValue(event.target.name, event.target.value)
  };

  return (
    <Box
      component="form"
      sx={{
        // "& :hover": { backgroundColor: "green" },
        backgroundColor: "cyan",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        //name="fname" // allows access to the values
        {...register('fname')}
        id="outlined-basic"
        label="First Name" // tells user what to input
        variant="outlined"
        onChange={handleChange}
        error={errors.fname !== undefined} //looking for errors
      />
      <TextField
        // name="lname" // allows access to the values
        {...register('lname')}
        id="outlined-basic"
        label="Last Name" // tells user what to input
        variant="outlined"
        onChange={handleChange}
      />

      <TextField 
        {...register('age')}
        id='outlined-basic'
        label='Age'
        variant='outlined'
        onChange={handleChange}
      />

      <TextField 
        {...register('email')}
        id='outlined-basic'
        label='Email Address'
        variant='outlined'
        onChange={handleChange}
      />

      <TextField 
        {...register('password')}
        id='outlined-basic'
        type='password'
        label='Password'
        variant='outlined'
        onChange={handleChange}
      />

      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default App;
