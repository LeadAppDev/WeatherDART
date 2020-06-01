import wiDaySunny from '../../assets/wi-day-sunny.svg';
import wiDayCloudy from '../../assets/wi-day-cloudy.svg';
import wiDayRain from '../../assets/wi-day-rain.svg';
import wiDayFog from '../../assets/wi-day-fog.svg';
import wiDayCloudyHigh from '../../assets/wi-day-cloudy-high.svg';
import wiDayStormShower from '../../assets/wi-night-lightning.svg';
import wiDaySunnyOvercast from '../../assets/wi-day-sunny-overcast.svg';
import wiShower from '../../assets/wi-day-showers.svg';

import wiNightCloudy from '../../assets/wi-night-cloudy.svg';
import wiNightLightning from '../../assets/wi-night-lightning.svg';
import wiNightClear from '../../assets/wi-night-clear.svg';

import wiNA from '../../assets/wi-na.svg';

export const weatherIcon = (icon) => {
  switch(icon) {
    case 'clear.png': return wiDaySunny
    case 'rain.png': return wiDayRain
    case 'pcloudyr.png': return wiDayRain
    case 'cloudy.png': return wiDayCloudy
    case 'fog.png': return wiDayFog
    case 'sunny.png': return wiDaySunny
    case 'mcloudy.png': return wiDayCloudyHigh
    case 'mcloudyr.png': return wiDayRain
    case 'mcloudyt.png': return wiDayStormShower
    case 'pcloudy.png': return wiDaySunnyOvercast
    case 'pcloudyt.png': return wiDayStormShower
    case 'tstorm.png': return wiDayStormShower
    case 'showers.png': return wiShower
    
    case 'cloudyn.png': return wiNightCloudy
    case 'tstormn.png': return wiNightLightning
    case 'clearn.png': return wiNightClear
  }
  return wiNA
}