import React, { PropsWithChildren, createContext, useState } from 'react'

interface TemperatureContextValue {
  preferredTemperature: number | null
  setPreferredTemperature: (newTemperature: number) => void
}

export const TemperatureContext = createContext<TemperatureContextValue>(
  {} as TemperatureContextValue
)

export const TemperatureProvider = ({ children }: PropsWithChildren) => {
  const [preferredTemperature, setPreferredTemperature] = useState<
    number | null
  >(null)

  return (
    <TemperatureContext.Provider
      value={{ preferredTemperature, setPreferredTemperature }}
    >
      {children}
    </TemperatureContext.Provider>
  )
}
