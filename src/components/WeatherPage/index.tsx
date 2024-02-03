import { TemperatureContext } from 'components/TemperatureContext'
import React, { useContext } from 'react'

const WeatherPage = () => {
  const { preferredTemperature, city, state } = useContext(TemperatureContext)
  const currentTemperature = 30 // Replace with actual temperature
  const decision =
    currentTemperature > preferredTemperature ? 'shorts' : 'pants'
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">{`It is currently ${currentTemperature}°F in ${city}, ${state}`}</h1>
      <p className="text-xl">{`Based on your preferences, we recommend you wear ${decision} today.`}</p>
    </div>
  )
}

export default WeatherPage
