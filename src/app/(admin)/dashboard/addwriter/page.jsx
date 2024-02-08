import AddWriterForm from "./addWriterForm"

const AddWriter = () => {
  return (
    <div className=''>
      <div className=' py-5 px-3 md:px-0'>
       
        <div className=''>
          <h2 className='text-2xl font-semibold text-center'>Create Writer Here</h2>
          <hr className='mb-3' />

         <AddWriterForm />

        </div>
      </div>
    </div>
  )
}

export default AddWriter