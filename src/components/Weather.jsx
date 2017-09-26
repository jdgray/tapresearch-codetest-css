import React, {Component} from 'react';

const data = [
    {
        name: 'Monday',
        weather: [
            {
                time: '9AM',
                data: 'scattered clouds'
            },
            {
                time: '12PM',
                data: 'few clouds'
            },
            {
                time: '3PM',
                data: 'scattered clouds'
            },
            {
                time: '6PM',
                data: 'clear sky'
            },
            {
                time: '9PM',
                data: 'few clouds'
            }
        ]
    },
    {
        name: 'Tuesday',
        weather: [
            {
                time: '12AM',
                data: 'broken clouds'
            },
            {
                time: '3AM',
                data: 'broken clouds'
            },
            {
                time: '6AM',
                data: 'light rain'
            },
            {
                time: '9AM',
                data: 'light rain'
            },
            {
                time: '12PM',
                data: 'light rain'
            },
            {
                time: '3PM',
                data: 'light rain'
            },
            {
                time: '6PM',
                data: 'light rain'
            },
            {
                time: '9PM',
                data: 'light rain'
            }
        ]
    },
    {
        name: 'Wednesday',
        weather: [
            {
                time: '12AM',
                data: 'light rain'
            },
            {
                time: '3AM',
                data: 'light rain'
            },
            {
                time: '6AM',
                data: 'light rain'
            },
            {
                time: '9AM',
                data: 'light rain'
            },
            {
                time: '12PM',
                data: 'light rain'
            },
            {
                time: '3PM',
                data: 'light rain'
            },
            {
                time: '6PM',
                data: 'light rain'
            },
            {
                time: '9PM',
                data: 'light rain'
            }
        ]
    },
    {
        name: 'Thursday',
        weather: [
            {
                time: '12AM',
                data: 'light rain'
            },
            {
                time: '3AM',
                data: 'light rain'
            },
            {
                time: '6AM',
                data: 'broken clouds'
            },
            {
                time: '9AM',
                data: 'light rain'
            },
            {
                time: '12PM',
                data: 'clear sky'
            },
            {
                time: '3PM',
                data: 'clear sky'
            },
            {
                time: '6PM',
                data: 'scattered clouds'
            },
            {
                time: '9PM',
                data: 'scattered clouds'
            }
        ]
    },
    {
        name: 'Friday',
        weather: [
            {
                time: '12AM',
                data: 'light snow'
            },
            {
                time: '3AM',
                data: 'light snow'
            },
            {
                time: '6AM',
                data: 'light snow'
            },
            {
                time: '9AM',
                data: 'light snow'
            },
            {
                time: '12PM',
                data: 'clear sky'
            },
            {
                time: '3PM',
                data: 'broken clouds'
            },
            {
                time: '6PM',
                data: 'light snow'
            },
            {
                time: '9PM',
                data: 'light snow'
            }
        ]
    },
    {
        name: 'Saturday',
        weather: [
            {
                time: '12AM',
                data: 'light snow'
            }
        ]
    },
  ];



class Weather extends Component {

    render() {
      const listRows = data.map((day) =>
        <div className="weather-container">
            <div className="row">
                <div className="col-md-12 weather-header">{day.name}</div>
            </div>
            <div className="row weather-row">
          {
            day.weather.map((weatherData) => {
              return (
                <div className="col-12 col-md-8r weather-item">
                  <div>{weatherData.time}</div>
                  <div>{weatherData.data}</div>
                </div>
              )
            })
          }
          </div>
        </div>
      );
      return (
        <div className="weather">
          {listRows}
        </div>
      )
    }

}

export default Weather;