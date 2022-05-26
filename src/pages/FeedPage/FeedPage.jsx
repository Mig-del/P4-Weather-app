import React, { useState, useEffect } from "react";
import CityCard from "../../components/CityCard/CityCard"
import { Card } from 'semantic-ui-react'
import {Grid, View, Flex} from '@adobe/react-spectrum'

let mockData = [
  '93304', '93307', '90302', '93280'
]

// let items = [
//   {
//   header: 'Bakersfield',
//   description:
//     '70 Degrees Farenheit',
//   meta: 'Feels like 1000 Degrees',
//   },
//   {
//   header: 'Seattle',
//   description:
//     '70 Degrees Farenheit',
//   meta: 'Feels like 1000 Degrees',
//   },
//   {
//   header: 'Wasco',
//   description:
//     '70 Degrees Farenheit',
//   meta: 'Feels like 1000 Degrees',
//   }
// ]

function FeedPage (props) {

  const [items, setItems] = useState([])
  let apiResponse = []

  useEffect(() => {

    mockData.forEach(element => {
      fetch(`http://api.weatherapi.com/v1/current.json?key=3cd832ab4bee40b7a8e225226222305&q=${element}`)
      .then(res => res.json())
      .then(result => {
          console.log(result)
          let weather = {
            header: result.location.name,
            description: result.current.temp_f,
            meta: result.current.feelslike_f,
          }
          console.log(weather)
          apiResponse.push(weather)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
        }
      )
    })
    console.log(apiResponse)
    
    console.log(items)
  }, [])


  // {
  //   header: 'Project Report - June',
  //   description:
  //     'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
  //   meta: 'ROI: 27%',
  // }
  if(items.length > 0){
    console.log(items)
    return (
      <Card.Group items={items} />
    )
  }
  return null

}

export default FeedPage;