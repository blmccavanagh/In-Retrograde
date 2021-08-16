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

// export default {
//     getHoroApiInfo: function (sign) {
//         return axios ({ 
//             method: 'POST',
//             url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
//             params: {sign: 'aquarius', day: 'today'},
//             headers: {
//               'x-rapidapi-key': 'c7499102c2msh4563d49509c75b6p1ac9d9jsn0f788dfdc88f',
//               'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
//             })
          
//           axios.request(options).then(function (response) {
//               console.log(response.data);
//           }).catch(function (error) {
//               console.error(error);
//           });
//     }
// }

// var axios = require("axios").default;

// var options = {
//   method: 'POST',
//   url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
//   params: {sign: 'aquarius', day: 'today'},
//   headers: {
//     'x-rapidapi-key': 'c7499102c2msh4563d49509c75b6p1ac9d9jsn0f788dfdc88f',
//     'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

import React, { Component } from 'react';

class Aztro extends Component {
    constructor(props){
        super(props);
        this.state = {
          json: {}
        }
    }

    componentDidMount () {
        const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({json}); });
    }

    render() {
        return (
          <div>
              Current Date: {this.state.json.current_date} <br />
              Compatibility: {this.state.json.compatibility} <br />
              Lucky Number: {this.state.json.lucky_number} <br />
              Lucky Time: {this.state.json.lucky_time} <br />
              Color: {this.state.json.color} <br />
              Date Range: {this.state.json.date_range} <br />
              Mood: {this.state.json.mood} <br />
              Description: {this.state.json.description} <br />
          </div>
        );
    }
}

export default Aztro;