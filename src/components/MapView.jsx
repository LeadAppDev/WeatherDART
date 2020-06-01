import React, { useState } from 'react';
import { connect } from 'react-redux';
import { aeris } from '../redux/actions/fetchWeatherData';
import { Typography, Skeleton } from './components-module';
import './MapView.scss';

const MapView = ({ city, state, isLoading, lat, long, success }) => {

  const [toggleSatellite, setToggleSatellite] = useState(true);
  const [toggleRadar, setToggleRadar] = useState(true);
  const [toggleAlerts, setToggleAlerts] = useState(true);

  aeris.views().then((views) => {
    if(success) {
      const map = new views.InteractiveMap('.mapCardView__map', {
        accessToken: 'AIzaSyBib0dFkzBouww5d-MK5pGY_xQpdb5x6M8',
        center: { lat: lat, lon: long },
        strategy: 'google',
        zoom: 10,
      }, () => {
        if(toggleSatellite) map.addLayer('satellite:35')
        if(toggleRadar) map.addLayer('radar:80')
        if(toggleAlerts) map.addLayer('alerts:35')
      })
    }
  })

  return(
    <>
    { success ?
      <div className='mapViewContainer'>
        <div className='mapCardView'>
          <div className='mapCardView__header'>
            <Typography className='mapCardView__header__title' color='inherit'>{city}, {state}</Typography>
          </div>
          <div className='mapCardView__map'></div>
        </div>

        <div className='mapViewContainer__controls'>
          <Typography color='secondary' onClick={() => setToggleSatellite(!toggleSatellite)} variant='body2'>Clouds ({ toggleSatellite ? 'On' : 'Off'})</Typography>
          <Typography color='secondary' onClick={() => setToggleAlerts(!toggleAlerts)} variant='body2'>Alerts ({ toggleAlerts ? 'On' : 'Off'})</Typography>
          <Typography color='secondary' onClick={() => setToggleRadar(!toggleRadar)} variant='body2'>Radar ({ toggleRadar ? 'On' : 'Off'})</Typography>
        </div>
      </div>
      :
      <div className='mapViewContainer__placeholder'>
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
    city: state.data.responses[1].response.place.name,
    lat: state.data.responses[1].response.loc.lat,
    long: state.data.responses[1].response.loc.long,
    state: state.data.responses[1].response.place.state,
  }
}

export default connect(mapStateToProps)(MapView);