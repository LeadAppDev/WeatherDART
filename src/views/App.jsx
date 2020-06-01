import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme/app-theme';
import './App.scss';

// Import Components
import Navbar from '../components/Navbar';
import MapView from '../components/MapView';
import ObservationView from '../components/ObservationView';
import ForecastCard from '../components/ForecastCard';
import AdSense from '../components/AdSense';
import DayNightConditions from '../components/DayNightConditions';
import DonutGauge from '../components/DonutGauge';
import Footer from '../components/Footer';

const App = ({
  airQuality,
  airQualityCategory,
  minTempF,
  maxTempF
  }) => {
  return(
    <div className='app'>
      <ThemeProvider theme={theme}>
        <Navbar />
        <div className='app__content'>
          <AdSense />
          <div className='mainViewArea'>
            <MapView />
            <ObservationView />
          </div>
        </div>
        <div className='app__day_night_content'>
          <div className='app__day_night_content__gauges'>
            <DonutGauge color='ffb300' qualityType={`Air Quality (${airQualityCategory.toUpperCase()})`} percent={airQuality} />
            <DonutGauge color='ec407a' qualityType='Not Available' percent={25}/>
            <DonutGauge color='5c6bc0' qualityType='Not Available' percent={25}/>
          </div>
          <DayNightConditions />
        </div>
        <div className='forecast'>
          <ForecastCard />
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    humidity: state.data.responses[0].response.ob.humidity,
    minTempF: state.data.responses[2].response[0].periods[0].minTempF,
    maxTempF: state.data.responses[2].response[0].periods[0].maxTempF,
    airQuality: state.data.responses[5].response[0].periods[0].aqi,
    airQualityCategory: state.data.responses[5].response[0].periods[0].category,
  }
}

export default connect(mapStateToProps)(App);