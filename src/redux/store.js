import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fetchWeatherReducer } from './reducers/fetchWeatherReducer';

export const store = createStore(fetchWeatherReducer, applyMiddleware(thunk));