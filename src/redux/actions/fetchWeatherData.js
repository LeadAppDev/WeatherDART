import { store } from '../store';
import axois from 'axios';
import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from './actionTypes';
import AerisWeather from '@aerisweather/javascript-sdk';

// Weather API Key
export const aeris = new AerisWeather('lnq0FOAsLawGrS7zM1FhP', 'bFT07MIOXHfBxAlivFnOyMy3uqf1icXn5kgLHsFH')

const fetchWeatherData = () => {
  return {
    type: FETCH_WEATHER_REQUEST
  }
}

const fetchWeatherSuccess = (payload) => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: payload
  }
}

const fetchWeatherFailure = (error) => {
  return {
    type: FETCH_WEATHER_FAILURE,
    payload: error
  }
}

export const fetchWeather = (city) => {
  
  const obsRequest = aeris.api().endpoint('observations')
  const locationRequest = aeris.api().endpoint('places')
  const forecastRequest = aeris.api().endpoint('forecasts').filter('day').limit(7)
  const alertRequest = aeris.api().endpoint('alerts')
  const threatRequest = aeris.api().endpoint('threats')
  const airQualityRequest = aeris.api().endpoint('airquality')
  const indicesRequest = aeris.api().endpoint('indices')
  const request = aeris.api().place(city)

  return (dispatch) => {
    store.dispatch(fetchWeatherData())

    request.addRequest(obsRequest)
    request.addRequest(locationRequest)
    request.addRequest(forecastRequest)
    request.addRequest(alertRequest)
    request.addRequest(threatRequest)
    request.addRequest(airQualityRequest)
    request.addRequest(indicesRequest)

    request.get().then(result => {
      dispatch(fetchWeatherSuccess(result.data))
      console.log(result.data)
    })
    .catch(err => {
      dispatch(fetchWeatherFailure(err.message))
      console.log(err.message)
    })
  }
}