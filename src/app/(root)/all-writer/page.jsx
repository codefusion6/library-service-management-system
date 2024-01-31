import HowHelp from '@/pages/allwriter/HowHelp'
import Writers from '@/pages/allwriter/Writers'
import React from 'react'

const page = () => {
  return (
    <div className='mt-28'>
        <h2 className='text-3xl text-center'>All Writers With Us</h2>
       <Writers />
       <HowHelp />
    </div>
  )
}

export default page