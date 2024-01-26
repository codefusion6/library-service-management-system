import React, { useState } from 'react'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'

function useTheme() {
    const [theme, setTheme] = useState(false)

    return <button onClick={() => setTheme(!theme)}>
        {theme ?
            <MdDarkMode size={30} /> :
            <MdOutlineDarkMode size={30} />
        }
    </button>
}
