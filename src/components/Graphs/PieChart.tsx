import React from 'react'
import { Pie } from 'react-chartjs-2'
import { css } from 'emotion'

var data = {
  datasets: [
    {
      data: [
        '57.96',
        '5.31',
        '9.34',
        '1.25',
        '5.54',
        '8.75',
        '5.54',
        '0.40',
        '5.87',
      ],
      backgroundColor: [
        '#6d786a',
        '#aaba8c',
        '#fffcf5',
        '#efdcac',
        '#4c4037',
        '#5d855e',
        '#dbb963',
        '#FCE205',
        '#D2B48C',
      ],
      label: 'Dataset 1',
    },
  ],
  labels: [
    'Compostables',
    'Paper',
    'Plastic',
    'Metal',
    'Glass',
    'Landfill',
    'Liquids',
    'Straws',
    'Plastic Bags',
  ],
}

function PieChart() {
  return (
    <div
      className={css`
        margin: 30px 0px;
        height: 400px;
      `}
    >
      <Pie
        data={data}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Young Research Library Waste Stream Percentages',
          },
        }}
      />
    </div>
  )
}

export default PieChart
