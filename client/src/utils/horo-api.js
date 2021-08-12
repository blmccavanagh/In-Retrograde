import axios from 'axios';

const userID =  "617351";
const apiKey = "f46952b45cd88fdb1d6bf43d441839a1";

// export default {
//     getHoroApiInfo: function (date, month, year, hour, minute, latitude, longitude, timezone) {
//         return axios({
//             method: 'post',
//             url: 'https://json.astrologyapi.com/v1/western_horoscope',
//             headers: {
//                 "authorization": "Basic " + btoa(userID+":"+apiKey),
//                 "Content-Type":'application/json'
//                 },
//             data: {
//                 'day': date,
//                 'month': month,
//                 'year': year,
//                 'hour': hour,
//                 'min': minute,
//                 'lat': latitude,
//                 'lon': longitude,
//                 'tzone': timezone
//             }
//           });
//     }
// }

export default {
    getHoroApiInfo: function (sign) {
        return axios ({ 
            method: 'POST',
            url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
            params: {sign: 'aquarius', day: 'today'},
            headers: {
              'x-rapidapi-key': 'c7499102c2msh4563d49509c75b6p1ac9d9jsn0f788dfdc88f',
              'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
            })
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    }
}