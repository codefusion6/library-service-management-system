"use client"
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";


function ThemeButton() {
    const [toggleTheme, setToggleTheme] = useState(false)

    return (
        <Button>
            {
                toggleTheme ?
                    <MdOutlineDarkMode size={25} onClick={() => setToggleTheme(!toggleTheme)} />
                    :
                    <MdDarkMode size={25} onClick={() => setToggleTheme(!toggleTheme)} />
            }
        </Button>
    )
}

export default ThemeButton