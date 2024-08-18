import React from 'react'
import PropTypes from 'prop-types'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibFacebook, cibLinkedin, cibTwitter, cilCalendar } from '@coreui/icons'
import { CChart } from '@coreui/react-chartjs'

const WidgetsBrand = (props) => {
  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['0', '1', '2', '3', '4', '5', '6'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [11, 22, 66, 44, 88, 99, 55],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<img src="/assets/icons/sunny.png" alt="Sunny" height={52} className="my-4" />}
          values={[
            { title: '주요감정', value: '기쁨' },
            { title: '비율', value: '60%' },
          ]}
          style={{
            '--cui-card-cap-bg': '#F0CC00',
          }}
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['0', '1', '2', '3', '4', '5', '6'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [11, 22, 32, 12, 42, 66, 12],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<img src="/assets/icons/cloudy.png" alt="cloudy" height={52} className="my-4" />}
          values={[
            { title: '주요감정', value: '중립' },
            { title: '비율', value: '30%' },
          ]}
          style={{
            '--cui-card-cap-bg': '#00C7D1',
          }}
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['0', '1', '2', '3', '4', '5', '6'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [21, 21, 11, 21, 12, 19, 29],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<img src="/assets/icons/rainny.png" alt="rainny" height={52} className="my-4" />}
          values={[
            { title: '주요감정', value: '우울' },
            { title: '비율', value: '40%' },
          ]}
          style={{
            '--cui-card-cap-bg': '#0064FA',
          }}
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['0', '1', '2', '3', '4', '5', '6'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [4, 21, 55, 43, 2, 9, 3],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<img src="/assets/icons/snow.png" alt="snow" height={52} className="my-4" />}
          values={[
            { title: '주요감정', value: '행복' },
            { title: '비율', value: '40%' },
          ]}
          style={{
            '--cui-card-cap-bg': '#CFCDC6',
          }}
        />
      </CCol>
    </CRow>
  )
}

WidgetsBrand.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsBrand
