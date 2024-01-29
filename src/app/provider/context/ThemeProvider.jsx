'use client'
import React, { createContext, useState } from 'react'

export const ThemeContext = createContext(null)
function ThemeProvider({ chlidren }) {
    const [dark, setDark] = useState(false)

    return <ThemeContext.Provider value={{ dark, setDark }}>
        {chlidren}
    </ThemeContext.Provider>
}

export default ThemeProvider