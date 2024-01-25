"use client"

import React, { useState } from 'react'
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const CollapseButton = () => {
    const [state, setState] = useState(true);

    // const 
    return (
        <button onClick={() => {
            console.log(state);
            setState(!state)
        }}
            className="p-3 rounded-lg bg-gray-50 hover:bg-slate-100"
        >
            {state ? <FaArrowRightArrowLeft className="text-black" /> : "Test Passed"}
        </button>
    )
}

export default CollapseButton