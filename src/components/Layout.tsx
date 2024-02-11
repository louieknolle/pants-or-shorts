import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="app h-full bg-gradient-to-r from-sky-500 to-indigo-500 pt-8">
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
