import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer _2VZ5Kf44Q90LnySBvYiFrlyXjBts4yNqrLPqpbm4O78Jb-IE0FEvplVahLyrrdVsN1HyBaZLgDVTFINkfVV3cCzLzpsmDMDxK6KhgKJ6YDribRT0RJC-iSrovLbXXYx',
  },
});