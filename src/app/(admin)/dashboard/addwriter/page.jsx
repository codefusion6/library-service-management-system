import Image from 'next/image'

const page = () => {
  return (
    <div className=''>
      <div className=' py-5   px-3 md:px-0'>
       
        <div className=''>
          <h2 className='text-2xl font-semibold text-center'>Create Writer Here</h2>
          <hr className='mb-3' />

          <div className='flex flex-col gap-2 md:w-1/2 mx-auto'>
            <input type="text" placeholder="Enter Writer Name " className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2' />
            <input type="text" placeholder="Date of Birth " className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2' />
            <input type="text" placeholder="Date of Dead" className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2' />
            <input type="file"  className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2' />
            <input type="text" placeholder="Address" className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2' />
            <textarea name="" id="" cols="30" placeholder='Description' rows="10" className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2'></textarea>
            <button className='bg-green-700 py-2 rounded-md text-white text-sm font-semibold'>Create Writer</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default page