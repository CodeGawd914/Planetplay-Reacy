import React, { Component } from 'react';
import {buildUrl} from 'react-instafeed'
import InstagramFeed from '../Components/InstagramFeed'

const options = {
  clientId: 	'9298471ce64844039cd83176ba0533e4',
  get: 'user', // popular, user
  locationId: null,
  resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
  sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
  tagName: null,
  userId: 8481222760,
}

const instragramURL = buildUrl(options)

class Gallary extends Component {

componentDidMount(){
  console.log('tester');
  fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=9298471ce64844039cd83176ba0533e4')
  .then(res => res.json())
  .then(console.log)
}
  render() {


    return (
      <div>
        <InstagramFeed/>
      </div>
    );
  }

}

export default Gallary;
