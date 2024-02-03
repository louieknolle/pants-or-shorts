import React, { useContext, useState } from 'react'
import GetStartedModal from './GetStartedModal'
import WelcomePage from './WelcomePage'
import { TemperatureContext } from './TemperatureContext'
import WeatherPage from './WeatherPage'

function App() {
  const [open, setOpen] = useState(false)
  const { preferredTemperature } = useContext(TemperatureContext)

  return (
    <div className="relative h-screen overflow-hidden bg-blue-400 py-3">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!preferredTemperature ? (
          <div>
            <WelcomePage setOpen={setOpen} />
            <GetStartedModal open={open} handleClose={() => setOpen(false)} />
          </div>
        ) : (
          <WeatherPage />
        )}
      </div>
    </div>
  )
}

export default App
