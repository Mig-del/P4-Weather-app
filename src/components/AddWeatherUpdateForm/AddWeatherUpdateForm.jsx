import React, { useState } from 'react';

import { Button, Form, Grid, Segment } from 'semantic-ui-react'

export default function AddWeatherUpdateForm(props){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    detail: ''
  })

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('photo', selectedFile)
    formData.append('detail', state.detail)
    props.handleAddPost(formData); 
    
    // Have to submit the form now! We need a function!
  }


  return (
    
    <Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
        
            <Form  autoComplete="off" onSubmit={handleSubmit}>
            
              <Form.Input
                  className="form-control"
                  name="detail"
                  value={state.detail}
                  placeholder="Weather Details"
                  onChange={handleChange}
                  required
              />   
              <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />   
              <Button
                type="submit"
                className="btn"
              >
                Post Weather Update
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
   
  ); 
}