import React from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import { Skeleton } from './components-module';
import './DonutGauge.scss';

const DonutGauge = ({ qualityType, color, isLoading, percent, success }) => {

  const state = {
    labels: [qualityType],
          datasets: 
          [
            {
              backgroundColor: [ `#${color}`, '#f5f5f5' ],
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 0,
              data: [`${percent}`, 100 -`${percent}`]
            },
          ]
        }

  return(
    <>
    { success ?
      <div className='donutGauge'>
        <Doughnut
          data={state}
          width={175}
          height={50}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      :
      <div className="donutGauge__placerholder">
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
  }
}

export default connect(mapStateToProps)(DonutGauge);