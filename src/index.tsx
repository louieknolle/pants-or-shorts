import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from './components/App'
import { TemperatureProvider } from './components/TemperatureContext'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <TemperatureProvider>
    <div className="app h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
      <App />
    </div>
  </TemperatureProvider>
)
