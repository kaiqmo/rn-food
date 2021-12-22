import axios from 'axios';

export default axios.create({
    baseURL:'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses',
    headers:{
       Authorization:'Bearer mhKVyWFwM7I3NZkltfh0i2B1h7gm94THgPPgaMCZKUBRLnXKT7HoWYULDminFLrQNglHbMc2L4WL3CmIQl8cccBf8_7mS9BijMotlMFkgTS61EVN6Os4skxyp05aYHYx',
    }
});
