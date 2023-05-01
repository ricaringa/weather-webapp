const api_url = import.meta.env.VITE_API_BASEURL;
const api_key = import.meta.env.VITE_API_KEY;
interface air_quality{
  co: 208.60000610351562,
            no2: number,
            o3: number,
            so2: number,
            pm2_5: number,
            pm10: number,
            usepaindex: number,
            gbdefraindex: number
}
export interface hour {
  chance_of_rain: number,
  chance_of_snow: number,
  cloud: number,
  condition: {
    text: string,
    icon: string,
    code: number
  },
  dewpoint_c: number,
  dewpoint_f: number,
  feelslike_c: number,
  feelslike_f: number,
  gust_kph: number,
  gust_mph: number,
  heatindex_c: number,
  heatindex_f: number,
  humidity: number,
  is_day: number,
  precip_in: number,
  precip_mm: number,
  pressure_in: number,
  pressure_mb: number,
  temp_c: number,
  temp_f: number,
  time: string,
  time_epoch: number,
  uv: number,
  vis_km: number,
  vis_miles: number,
  will_it_rain: number,
  will_it_snow: number,
  wind_degree: number,
  wind_dir: string,
  wind_kph: number,
  wind_mph: number,
  windchill_c: number,
  windchill_f: number
}
export interface day {
  avghumidity: number;
  avgtemp_c: number;
  avgtemp_f: number;
  avgvis_km: number;
  avgvis_miles: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
  daily_will_it_rain: number;
  daily_will_it_snow: number;
  maxtemp_c: number;
  maxtemp_f: number;
  maxwind_kph: number;
  maxwind_mph: number;
  mintemp_c: number;
  mintemp_f: number;
  totalprecip_in: number;
  totalprecip_mm: number;
  totalsnow_cm: number;
  uv: number;
}
export interface forecastDay {
  astro: {
    is_moon_up: number,
    is_sun_up: number,
    moon_illumination: string,
    moon_phase: string,
    moonrise: string,
    moonset: string,
    sunrise: string,
    sunset: string,
  },
  date: string,
  date_epoch: string,
  day: day,
  hour: Array<hour>
}
export interface weatherData {
  code: number,
  location: {
    name: string;
    region: string;
    country: string;
    lat: string;
    lon: string;
    tz_id: string;
    localtime_epoch: string;
    localtime: string;
  };
  forecast: {
    forecastday: Array<forecastDay>
  }
  current: {
    last_updated_epoch: string;
    last_updated: string;
    temp_c: string;
    temp_f: string;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
    air_quality: air_quality
  };
}

const getData = async (q: string) => {
  let data : weatherData = {} as weatherData
  try{
    const response = await fetch(
      `${api_url}/forecast.json?key=${api_key}&q=${q}&days=7&aqi=yes`
      );
      if(response.status===400){
        data.code = 0
      } else {
         data = await response.json();
      }
    } catch(error){
console.log(error)
    }
  
  return data;
// try {
//   const data : weatherData = await fetch(
//           `${api_url}/forecast.json?key=${api_key}&q=${q}&days=7&aqi=yes`
//           ).then(response=>{
//             if(response.status===400){
//               console.log('error xd')
//               data.code = 0
//               return data
//             } else {
//             return response.json()
//             }
//           })
//           data.code = 1
//           return data
// } catch (e) {
//   if (e) {
//     const data : weatherData = {} as weatherData
//     data.code = 0
//     return data

//   }
//   throw e;
// }
};

export default getData;
