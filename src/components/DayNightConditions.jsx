import React from 'react';
import { connect } from 'react-redux';
import { Typography, Skeleton } from './components-module';
import { weatherIcon } from '../helpers/weatherIcons';
import './DayNightConditions.scss';

const DayNightConditions = ({
  isLoading,
  success,
  tonightTemp,
  tonightConditions,
  tomorrowTemp,
  tomorrowConditions,
  tonightIcon,
  tomorrowIcon
  }) => {
  return(
    <>
    { success ?
      <div className='day_night_conditions'>
        <div className='day_night_conditions__night'>
          <div className='day_night_conditions__night__header'>
            <Typography color='inherit'>Tonight</Typography>
          </div>
          <img className='day_night_conditions__night__icon' src={weatherIcon(tonightIcon)} />
          <Typography variant='body2' color='textPrimary'>{tonightConditions}</Typography>
          <Typography color='secondary'>Low: {tonightTemp}°</Typography>
        </div>
        <div className='day_night_conditions__tomorrow'>
          <div className='day_night_conditions__tomorrow__header'>
            <Typography color='inherit'>Tomorrow</Typography>
          </div>
          <img className='day_night_conditions__tomorrow__icon' src={weatherIcon(tomorrowIcon)} />
          <Typography variant='body2' color='textPrimary'>{tomorrowConditions}</Typography>
          <Typography color='primary'>High: {tomorrowTemp}°</Typography>
        </div>
      </div>
      :
      <div className='day_night_conditions__placeholder'>
        { isLoading && <Skeleton animation='wave' variant='rect' height='100%' width='100%' /> }
      </div>
    }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    success: state.data.responses[0].success,
    tonightTemp: state.data.responses[2].response[0].periods[0].minTempF,
    tonightIcon: state.data.responses[2].response[0].periods[0].icon,
    tonightConditions: state.data.responses[0].response.ob.weatherPrimary,
    tomorrowTemp: state.data.responses[2].response[0].periods[1].maxTempF,
    tomorrowConditions: state.data.responses[2].response[0].periods[1].weather,
    tomorrowIcon: state.data.responses[2].response[0].periods[1].icon,
  }
}

export default connect(mapStateToProps)(DayNightConditions);