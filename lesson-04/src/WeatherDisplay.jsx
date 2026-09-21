function WeatherDisplay({
  temperature,
  description,
  feels_like,
  temp_min,
  temp_max,
  humidity,
  pressure,
  icon
}) {
  const iconUrl = icon
    ? `https://openweathermap.org/img/wn/${icon}@2x.png`
    : null

  return (
    <div className="WeatherDisplay">
      {iconUrl ? (
        <img
          className="WeatherDisplay-icon"
          src={iconUrl}
          alt={description || 'weather'}
        />
      ) : null}

      <p className="WeatherDisplay-temp">{temperature}&deg;</p>
      <p className="WeatherDisplay-description">{description}</p>

      <dl className="WeatherDisplay-details">
        <div>
          <dt>Feels like</dt>
          <dd>{feels_like}&deg;</dd>
        </div>
        <div>
          <dt>Low / High</dt>
          <dd>
            {temp_min}&deg; / {temp_max}&deg;
          </dd>
        </div>
        <div>
          <dt>Humidity</dt>
          <dd>{humidity}%</dd>
        </div>
        <div>
          <dt>Pressure</dt>
          <dd>{pressure} hPa</dd>
        </div>
      </dl>
    </div>
  )
}

export default WeatherDisplay
