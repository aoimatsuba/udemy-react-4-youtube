import axios from 'axios'

const KEY = 'AIzaSyCxf-tpbHU3uxpg1LoGP7DR45AQPNhw_Nc'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});