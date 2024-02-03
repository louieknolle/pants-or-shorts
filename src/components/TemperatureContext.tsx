import React, { PropsWithChildren, createContext, useState } from 'react'

interface TemperatureContextValue {
  preferredTemperature: number | null
  setPreferredTemperature: (newTemperature: number) => void
  city: string | null
  setCity: (newCity: string) => void
  state: string | null
  setState: (newState: string) => void
}

export const TemperatureContext = createContext<TemperatureContextValue>(
  {} as TemperatureContextValue
)

export const TemperatureProvider = ({ children }: PropsWithChildren) => {
  const [preferredTemperature, setPreferredTemperature] = useState<
    number | null
  >(null)
  const [city, setCity] = useState<string | null>(null)
  const [state, setState] = useState<string | null>(null)

  return (
    <TemperatureContext.Provider
      value={{
        preferredTemperature,
        setPreferredTemperature,
        city,
        setCity,
        state,
        setState
      }}
    >
      {children}
    </TemperatureContext.Provider>
  )
}
