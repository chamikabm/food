import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (term) => {
    console.log('Hello');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: term,
          location: 'Singapore',
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(`Error occurred while fetching restaurants. Error : ${err}`);
      setErrorMessage('Something went wrong!');
    }
  };

  useEffect(() => {
    searchApi('pasta')
  }, []);

  return [searchApi, results, errorMessage];
};

