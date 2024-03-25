import React from 'react'
import { useFormStatus } from "react-dom";
const AddWritterBtn = () => {
    const { pending } = useFormStatus();
    // console.log(pending, "pending");
    return (
        <button type="submit" disabled={pending} className={`bg-gradient-to-r from-[#4b79a7] to-[#4ebcde]  py-3 px-5 rounded-md text-white text-sm font-semibold ${pending && 'bg-gray-200'}`}>
            {pending ? "Loading..." : "Create Writer"}
        </button>
    )
}

export default AddWritterBtn