import { useState } from 'react'
import { gql } from '@apollo/client'
import { client } from './apolloClient'
import WeatherDisplay from './WeatherDisplay'

function Weather() {
  const [zip, setZip] = useState('')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(null)

  async function getWeather() {
    setError(null)
    setWeather(null)

    try {
      const json = await client.query({
        query: gql`
          query GetWeather($zip: Int!) {
            getWeather(zip: $zip) {
              temperature
              description
              feels_like
              temp_min
              temp_max
              humidity
              pressure
              icon
              cod
              message
            }
          }
        `,
        variables: { zip: parseInt(zip, 10) },
        fetchPolicy: 'network-only'
      })

      const data = json.data.getWeather

      if (data.cod !== 200) {
        setError(data.message || 'Unable to fetch weather')
        return
      }

      setWeather(data)
    } catch (err) {
      setError(err.message)
      console.log(err.message)
    }
  }

  return (
    <div className="Weather">
      <form
        className="Weather-form"
        onSubmit={(e) => {
          e.preventDefault()
          getWeather()
        }}
      >
        <label htmlFor="zip">Zip code</label>
        <div className="Weather-form-row">
          <input
            id="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder="e.g. 94102"
            inputMode="numeric"
          />
          <button type="submit">Get weather</button>
        </div>
      </form>

      {error ? <p className="Weather-error">{error}</p> : null}

      {weather ? <WeatherDisplay {...weather} /> : null}
    </div>
  )
}

export default Weather
