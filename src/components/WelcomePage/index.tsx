import { Button } from '@mui/material'
import logo from '../../../public/logo.png'
import React from 'react'

interface WelcomePageProps {
  setOpen: (open: boolean) => void
}

const WelcomePage = ({ setOpen }: WelcomePageProps) => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-6">
      <h1 className="text-center text-4xl font-bold text-gray-900">
        Welcome to Pants or Shorts!
      </h1>
      <p className="text-center text-xl text-gray-800">
        Based on your preferences, we will help you decide if you should wear
        pants or shorts today.
      </p>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setOpen(true)}
      >
        Get Started
      </Button>
      <div className="flex justify-center align-top">
        <img src={logo} alt="Logo" className="w-1/2 lg:w-1/2" />
      </div>
    </div>
  )
}

export default WelcomePage
