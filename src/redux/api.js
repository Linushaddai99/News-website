// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const getCountries = createAsyncThunk('Countries-Of-The-World/getCountries', async () => {

//   try {
//     const response = await axios.get('https://restcountries.com/v2/all');
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// });

// export default getCountries;

import { createAsyncThunk } from '@reduxjs/toolkit';

const getCountries = createAsyncThunk('Countries-Of-The-World/getCountries', async () => {
  try {
    const response = await fetch('https://restcountries.com/v2/all')
      .then((data) => data.json());
    return response;
  } catch (error) {
    return error;
  }
});

export default getCountries;
