import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  AccountCircleRounded,
  AppBar,
  Badge,
  Button,
  InputBase,
  IconButton,
  LibraryBooksRounded,
  Menu,
  MenuItem,
  NotificationsRounded,
  Typography,
  Toolbar,
} from './components-module';
import { fetchWeather } from '../redux/actions/fetchWeatherData';
import './Navbar.scss';

const Navbar = ({ fetchWeather }) => {

  const [toggle, setToggle] = useState(null);
  const handleClick = (e) => setToggle(e.currentTarget);
  const handleClose = () => setToggle(null);

  const [value, setValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    fetchWeather(value)
  }

  return (
    <AppBar color='primary' position='sticky'>
      <Toolbar className='app-toolbar'>
        <Typography color='primary' variant='h5'>WeatherDART</Typography>
        <div className='app-toolbar__items'>
          <div>
            <form onSubmit={handleSubmit}>
              <InputBase value={value} onChange={(e) => setValue(e.target.value)} placeholder='Search a zip code...' />
            </form>
          </div>
          <div className='app-toolbar__items__links'>
            <IconButton>
              <LibraryBooksRounded />
            </IconButton>
            <IconButton>
              <Badge badgeContent={7} color='primary'>
                <NotificationsRounded />
              </Badge>
            </IconButton>
            <IconButton>
              <AccountCircleRounded />
            </IconButton>
            <Button color='default' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={toggle}
              keepMounted
              open={Boolean(toggle)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><Typography color='textPrimary'>dsadsa</Typography></MenuItem>
              <MenuItem onClick={handleClose}><Typography color='textSecondary'>Logout</Typography></MenuItem>
            </Menu>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    fetchWeather: (city) => dispatch(fetchWeather(city))
  }
}

export default connect(null, mapDispatchToProps)(Navbar);