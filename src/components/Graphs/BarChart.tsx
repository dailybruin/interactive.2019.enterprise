import React from 'react'
import { css } from 'emotion'
import { Bar, defaults } from 'react-chartjs-2'

const dataMay = {
  labels: ['Powell', 'YRL'],
  datasets: [
    {
      label: 'Compost',
      data: [57.52, 50.97],
      backgroundColor: '#D6E9C6', // green
      stack: 'Powell',
    },
    {
      label: 'Recycling',
      data: [19.03, 16.67],
      backgroundColor: '#FAEBCC', // yellow
      stack: 'Powell',
    },
    {
      label: 'Landfill',
      data: [23.45, 32.36],
      backgroundColor: '#EBCCD1', // red
      stack: 'Powell',
    },
  ],
}

const dataFeb = {
  labels: ['Powell', 'YRL'],
  datasets: [
    {
      label: 'Compost',
      data: [63.89, 56.5],
      backgroundColor: '#D6E9C6', // green
      stack: 'Powell',
    },
    {
      label: 'Recycling',
      data: [21.58, 22.15],
      backgroundColor: '#FAEBCC', // yellow
      stack: 'Powell',
    },
    {
      label: 'Landfill',
      data: [14.52, 21.36],
      backgroundColor: '#EBCCD1', // red
      stack: 'Powell',
    },
  ],
}

function BarChart(props) {
  defaults.global.defaultFontColor = '#fefbf4'
  return (
    <div>
      <div
        className={css`
          height: 500px;
        `}
      >
        <Bar
          data={dataFeb}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  stacked: true,
                },
              ],
              yAxes: [
                {
                  stacked: true,
                },
              ],
            },
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: props.title,
            },
          }}
        />
      </div>
      <div
        className={css`
          height: 500px;
        `}
      >
        <Bar
          data={dataMay}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  stacked: true,
                },
              ],
              yAxes: [
                {
                  stacked: true,
                },
              ],
            },
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: props.title,
            },
          }}
        />
      </div>
    </div>
  )
}

export default BarChart
