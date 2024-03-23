import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '0aa53f17f8mshcaf9cf732643888p15bda1jsn969e22eed984',
//     'X-RapidAPI-Host': 'youtube-music-api3.p.rapidapi.com\n'
//   }
// };

// fetch('https://youtube-music-api3.p.rapidapi.com/recommend', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

  export const shazamCoreApi = createApi({
    reducerPath:'shazamCoreApi',
    basequery: fetchBaseQuery({
      baseUrl: '​https://shazam-api7.p.rapidapi.com',
      prepareHeaders: () => {
        headers.set('X-RapidAPI-Key', '0aa53f17f8mshcaf9cf732643888p15bda1jsn969e22eed984')

        return headers;
      }
    }),
    endpoints:(builder) => ({
      getTopCharts: builder.query({ query: () => '/charts/world'})
    })
  })

  export const {
    useGetTopChartsQuery,
  } = shazamCoreApi;