'use client'

import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === 'dark') setDarkMode(false)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
        else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    return (
        <button>
            {darkMode ? <MdDarkMode size={30} onClick={() => setDarkMode(!darkMode)} />
                : <MdOutlineDarkMode size={30} onClick={() => setDarkMode(!darkMode)} />}
        </button>
    )
}

export default ThemeToggle