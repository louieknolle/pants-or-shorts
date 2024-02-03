import React, { useState } from 'react'
import { Button } from '@mui/material'
import GetStartedModal from './GetStartedModal'
import WelcomePage from './WelcomePage'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative h-screen overflow-hidden bg-blue-400 py-3">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <WelcomePage setOpen={setOpen} />
        <GetStartedModal open={open} handleClose={() => setOpen(false)} />
      </div>
    </div>
  )
}

export default App
