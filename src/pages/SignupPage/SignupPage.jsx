import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";

export default function SignUpPage(props) {

  const [error, setError] = useState('')
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: ''
  })

  function handleSubmit(){

  }

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleFileInput(){
    
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
   <Grid.Column style={{ maxWidth: 450 }}>
     <Header as="h2" color="teal" textAlign="center">
        Sign Up
     </Header>
     <Form autoComplete="off" onSubmit={handleSubmit}>
       <Segment stacked>
         <Form.Input
           name="username"
           placeholder="username"
           value={state.username}
           onChange={handleChange}
           required
         />
         <Form.Input
           type="email"
           name="email"
           placeholder="email"
           value={state.email}
           onChange={handleChange}
           required
         />
         <Form.Input
           name="password"
           type="password"
           placeholder="password"
           value={state.password}
           onChange={handleChange}
           required
         />
         <Form.Input
           name="passwordConf"
           type="password"
           placeholder="Confirm Password"
           value={state.passwordConf}
           onChange={handleChange}
           required
         />
         
         <Form.Field>
           <Form.Input
             type="file"
             name="photo"
             placeholder="upload image"
             onChange={handleFileInput}
           />
         </Form.Field>
         <Button type="submit" className="btn">
           Signup
         </Button>
       </Segment>
       {error ? <ErrorMessage error={error} /> : null}
     </Form>
   </Grid.Column>
 </Grid>

   );
  }
