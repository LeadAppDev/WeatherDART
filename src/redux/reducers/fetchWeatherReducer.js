import { store } from '../store';
import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  data: {
    responses: [
      // Observations Endpoint
      {
        success: false,
        response: {
          ob: {
            dewpointF: null,
            feelslikeF: null,
            weather: '',
            dewpointF: null,
            tempF: null,
            windMPH: null,
            windDir: '',
            visibilityMI: null,
            heatindexF: null,
            windchillF: null,
            precipIN: null,
            sky: null,
            pressureIN: null,
            weatherPrimary: '',
            icon: '',
          }
        }
      },
      // Places Endpoint
      {
        response: {
          loc: {
            lat: null,
            long: null,
          },
          place: {
            name: '',
            state: '',
          }
        }
      },
      // Forecast Endpoint
      {
        response: [
          {
            periods: [
              {
                timestamp: null,
                dateTimeISO: '',
                minTempF: null,
                maxTempF: null,
                humidity: null,
                icon: '',
                pop: null,
                weather: '',
                uvi: null,
              },
              {
                icon: '',
                maxTempF: null,
                weather: '',
                dateTimeISO: '',
              }
            ]
          }
        ]
      },
      // Alerts Endpoint
      {
        response: [
          {
            details: {
              body: '',
              emergency: null,
              name: ''
            },
            place: {
              name: '',
              state: '',
            }
          }
        ]
      },
      // Threats Endpoint
      {
        response: [
          {
            place: {
              name: '',
              state: '',
            },
            periods: [
              {
                storms: {
                  phrase: {
                    long: '',
                    short: '',
                  },
                  direction: {
                    toDEG: null,
                    to: '',
                    fromDEG: null,
                    from: '',
                  },
                  approaching: null,
                  speed: {
                    avgMPH: null,
                    minMPH: null,
                    maxMPH: null,
                  },
                  hail: {
                    probSevere: null,
                    prob: null,
                    maxSize: null,
                    maxSizeCM: null,
                  },
                  rotation: null,
                  tornadic: null,
                  advisories: null,
                }
              }
            ]
          }
        ]
      },
      // Air Quality Endpoint
      {
        response: [
          {
            periods: [
              {
                aqi: null,
                category: '',
                color: '',
              }
            ]
          }
        ]
      },
      // Indice Endpoint
      {
        response: [
          {
            indice: {
              type: '',
              range: {
                min: null,
                max: null,
              }
            },
            current: {
              index: null,
              indexENG: '',
            }
          }
        ]
      }
    ]
  }

}

export const fetchWeatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_WEATHER_REQUEST: return {
      ...state,
      isLoading: true
    }
    case FETCH_WEATHER_SUCCESS: return {
      ...state,
      isLoading: false,
      data: action.payload
    }
    case FETCH_WEATHER_FAILURE: return {
      ...state,
      isLoading: false,
      data: action.payload
    }
  }
  return state
}