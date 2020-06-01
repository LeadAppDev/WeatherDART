import React, { useState } from 'react';
import { Typography, Box, Tab, Tabs, Skeleton } from './components-module';
import { weatherIcon } from '../helpers/weatherIcons';
import { connect } from 'react-redux';
import './ObservationView.scss';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`observation-tab-panel-${index}`}
      aria-labelledby={`observation-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  )
}

const ObservationView = ({
  isLoading, 
  minTempF, 
  maxTempF,
  feelslikeF,
  weather,
  dewpointF,
  tempF,
  windMPH,
  windDir,
  heatindexF,
  windchillF,
  pressureIN,
  uvi,
  humidity,
  weatherAlert,
  icon,
  approachingWeather,
  success,
  body,
  }) => {

  const [tab, setTab] = useState(0);

  const handeTabChange = (e, newValue) => {
    setTab(newValue)
  }

  return (
    <>
    { success ?
      <div className='observation'>
        <div className='observation__header'>   
          <Typography color='inherit'>Current Conditions</Typography>
        </div>

          <Tabs variant="fullWidth" indicatorColor='primary' textColor='primary' value={tab} onChange={handeTabChange}>
            <Tab label='Right Now' color='primary' />
            <Tab label='Alerts' color='primary' />
          </Tabs>

          <TabPanel value={tab} index={0}>
            <div className='rightNowTab'>
              <div className='rightNowTab__conditions'>
                <div className='rightNowTab__conditions__temp'>
                  <Typography variant='subtitle1'>Low</Typography>
                  <Typography variant='h5'>{minTempF}°</Typography>
                </div>
                <div className='rightNowTab__conditions__temp'>
                  <Typography color='primary' variant='body1'>Feels Like</Typography>
                  <Typography variant='h3' color='primary'>{feelslikeF}°</Typography>
                </div>
                <div className='rightNowTab__conditions__temp'>
                  <Typography variant='subtitle1'>High</Typography>
                  <Typography variant='h5'>{maxTempF}°</Typography>
                </div>
              </div>
              <div className='rightNowTab__details'>
                <div className='rightNowTab__details__overview'>
                  { weatherAlert || approachingWeather ? 
                    <Typography color='textSecondary' variant='subtitle1'>{weatherAlert}</Typography> 
                    : !weatherAlert && approachingWeather &&
                    <Typography color='textSecondary' variant='subtitle1'>{weatherAlert}</Typography>
                  }
                  { !weatherAlert && !approachingWeather &&
                    <Typography color='primary' variant='subtitle1'>No Weather Alerts</Typography>
                  }
                  <img src={weatherIcon(icon)} height={70} width={70} />
                  <Typography color='textPrimary' variant='subtitle2'>{weather}</Typography>
                  { weatherAlert || approachingWeather ? 
                    <Typography color='textSecondary' variant='caption'>View weather details</Typography> 
                    : !weatherAlert && approachingWeather &&
                    <Typography color='textSecondary' variant='caption'>View weather details</Typography>
                  }
                </div>
                <div className='rightNowTab__details__stats'>
                  <div className='rightNowTab__details__stats__labels'>
                    <Typography color='secondary' variant='subtitle2'>Temperature:</Typography>
                    <Typography color='secondary' variant='subtitle2'>Heat Index:</Typography>
                    <Typography color='secondary' variant='subtitle2'>Rain Chance:</Typography>
                    <Typography color='secondary' variant='subtitle2'>High:</Typography>
                    <Typography color='secondary' variant='subtitle2'>Low:</Typography>
                    <Typography color='secondary' variant='subtitle2'>Wind Chill:</Typography>
                    <Typography color='secondary' variant='subtitle2'>Humidity:</Typography>
                    <Typography color='secondary' variant='subtitle2'>Dew Point:</Typography>
                    <Typography color='secondary' variant='subtitle2'>Wind:</Typography>
                    <Typography color='secondary' variant='subtitle2'>Pressure:</Typography>
                    <Typography color='secondary' variant='subtitle2'>UV Index:</Typography>
                  </div>
                  <div className='rightNowTab__details__stats__amounts'>
                    <Typography color='textPrimary' variant='subtitle2'>{tempF}°</Typography>
                    <Typography color='textPrimary' variant='subtitle2'>{heatindexF}°</Typography>
                    <Typography color='textPrimary' variant='subtitle2'>37%</Typography>
                    <Typography color='textPrimary' variant='subtitle2'>{maxTempF}°</Typography>
                    <Typography color='textPrimary' variant='subtitle2'>{minTempF}°</Typography>
                    <Typography color='textPrimary' variant='subtitle2'>{windchillF}°</Typography>
                    <Typography color='textPrimary' variant='subtitle2'>{humidity}°</Typography>
                    <Typography color='textPrimary' variant='subtitle2'>{dewpointF}°</Typography>
                    <Typography color='textPrimary' variant='subtitle2'>{windDir} {windMPH} mph</Typography>
                    <Typography color='textPrimary' variant='subtitle2'>{pressureIN} in</Typography>
                    <Typography color='textPrimary' variant='subtitle2'>{uvi} out of 10</Typography>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={tab} index={1}>
            <div className='alertsTab'>
                <div className='alertsTab__summary'>
                  <Typography color='textSecondary' variant='subtitle2'>{approachingWeather}</Typography>
                </div>
                <div className='alertsTab__details'>
                  <Typography color='textSecondary'>{body}</Typography>
                </div>
              </div>
          </TabPanel>
      </div>
      :
      <div className="observation__placerholder">
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
    minTempF: state.data.responses[2].response[0].periods[0].minTempF,
    maxTempF: state.data.responses[2].response[0].periods[0].maxTempF,
    uvi: state.data.responses[2].response[0].periods[0].uvi,
    feelslikeF: state.data.responses[0].response.ob.feelslikeF,
    icon: state.data.responses[0].response.ob.icon,
    weather: state.data.responses[0].response.ob.weather,
    dewpointF: state.data.responses[0].response.ob.dewpointF,
    tempF: state.data.responses[0].response.ob.tempF,
    windMPH: state.data.responses[0].response.ob.windMPH,
    windDir: state.data.responses[0].response.ob.windDir,
    heatindexF: state.data.responses[0].response.ob.heatindexF,
    windchillF: state.data.responses[0].response.ob.windchillF,
    humidity: state.data.responses[0].response.ob.humidity,
    pressureIN: state.data.responses[0].response.ob.pressureIN,
    weatherPrimary: state.data.responses[2].response[0].periods[0].weather,
    weatherAlert: state.data.responses[3].response[0]?.details.name,
    body: state.data.responses[3].response[0]?.details.body,
    approachingWeather: state.data.responses[4].response[0].periods[0].storms?.phrase.short,
  }
}

export default connect(mapStateToProps)(ObservationView);