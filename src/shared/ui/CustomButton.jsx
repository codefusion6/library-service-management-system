'use client'
import React, { useState } from 'react'

function CustomButton({ children, btnstyle }) {
    const [expand, setExpand] = useState(false)
    return (
        <button onClick={() => setExpand(!expand)} className={`py-y ${btnstyle && btnstyle}`}>{children}</button>
    )
}
export default CustomButton