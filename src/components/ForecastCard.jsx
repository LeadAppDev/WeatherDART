import React from 'react';
import { connect } from 'react-redux';
import { Typography, Skeleton } from './components-module';
import { weatherIcon } from '../helpers/weatherIcons';
import './ForecastCard.scss';

const ForecastCard = ({ 
  days, 
  isLoading, 
  success,
  }) => {

    const timestamp = (day) => {
      const dayOfWeek = new Date(day.timestamp * 1000).toDateString()

      if(dayOfWeek.includes('Fri')) return 'Friday'
      if(dayOfWeek.includes('Sat')) return 'Saturday'
      if(dayOfWeek.includes('Sun')) return 'Sunday'
      if(dayOfWeek.includes('Mon')) return 'Monday'
      if(dayOfWeek.includes('Tue')) return 'Tuesday'
      if(dayOfWeek.includes('Wed')) return 'Wednesday'
      if(dayOfWeek.includes('Thu')) return 'Thursday'
    }

  return(
    <>
      { success ?
        days.map((day, key) => (
        <div className='forecastCard' key={key}>
          <div className='forecastCard__header'>
            <Typography variant='body2' color='secondary'>{timestamp(day)}</Typography>
          </div>
          <div className='forecastCard__icon-content'>
            <img className='forecastCard__icon-content__icon' src={weatherIcon(day.icon)} />
          </div>
          <div className='forecastCard__summary'>
            <Typography variant='body2' color='textPrimary'>{day.weather}</Typography>
          </div>
            <div className='forecastCard__weather-stats'>
              <div className='forecastCard__weather-stats__desc-name'>
              <Typography variant='subtitle2' color='secondary'>High</Typography>
              <Typography variant='subtitle2' color='secondary'>Low</Typography>
              <Typography variant='subtitle2' color='secondary'>Rain Chance</Typography>
              <Typography variant='subtitle2' color='secondary'>Humidity</Typography>
              <Typography variant='subtitle2' color='secondary'>Dewpoint</Typography>
              <Typography variant='subtitle2' color='secondary'>Wind</Typography>
              </div>
              <div className='forecastCard__weather-stats__desc-result'>
                <Typography variant='subtitle2' color='textPrimary'>{day.maxTempF}°</Typography>
                <Typography variant='subtitle2' color='textPrimary'>{day.minTempF}°</Typography>
                <Typography variant='subtitle2' color='textPrimary'>{day.pop}%</Typography>
                <Typography variant='subtitle2' color='textPrimary'>{day.humidity}%</Typography>
                <Typography variant='subtitle2' color='textPrimary'>{day.dewpointF}°</Typography>
                <Typography variant='subtitle2' color='textPrimary'>{day.windGustMPH}mph {day.windDir}</Typography>
              </div>
            </div>
        </div>
        ))
        :
        <div className='placeholder'>
          { isLoading && <Skeleton animation='wave' variant='rect' height='100%' width='100%' /> }
        </div>
      }
    </>
  )
}

const mapStateTpProps = (state) => {
  return {
    days: state.data.responses[2].response[0].periods,
    isLoading: state.isLoading,
    success: state.data.responses[0].success,

  }
}

export default connect(mapStateTpProps)(ForecastCard);