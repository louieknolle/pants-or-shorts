import React, { useContext, useState } from 'react'
import logo from '../../public/logo.png'
import { Button } from '@mui/material'
import GetStartedModal from './GetStartedModal'
import { TemperatureContext, TemperatureProvider } from './TemperatureContext'

function App() {
  const [open, setOpen] = useState(false)
  const { preferredTemperature } = useContext(TemperatureContext)

  return (
    <div className="relative h-screen overflow-hidden bg-blue-400 py-3">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full flex-col items-center justify-center space-y-6">
          <h1 className="text-center text-4xl font-bold text-gray-900">
            Welcome to Pants or Shorts!
          </h1>
          <p className="text-center text-xl text-gray-800">
            Based on your preferences, we will help you decide if you should
            wear pants or shorts today.
          </p>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setOpen(true)}
          >
            Get Started
          </Button>
          <p className="text-center text-xl text-gray-800">
            Your preferred temperature is{' '}
            {preferredTemperature ? preferredTemperature + '°F' : 'Not set yet'}
          </p>
          <GetStartedModal open={open} handleClose={() => setOpen(false)} />
          <div className="flex justify-center align-top">
            <img src={logo} alt="Logo" className="w-full lg:w-1/2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
