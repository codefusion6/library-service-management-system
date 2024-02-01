import { FaPlus } from "react-icons/fa";

const AddWriter = () => {
    return (
        <div className='border-2 flex justify-center items-center flex-col gap-2 px-3 rounded-md bg-gray-300 py-5'>
            <FaPlus className="text-white text-4xl" />
            <input type="file" className='w-full' />
            <input type="text" className='w-full p-2 '  placeholder='Enter Writer Name' />
            <textarea type="text" className='w-full p-2 ' rows={4}  placeholder='Description' />
            <button className="bg-green-600 py-1 px-3 text-sm font-semibold text-white rounded-md">Create Writer</button>
        </div>
    )
}

export default AddWriter