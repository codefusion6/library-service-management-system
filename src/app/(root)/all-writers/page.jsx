
import HowHelp from '@/components/allwriters/HowHelp'
import Writers from '@/components/allwriters/Writers'
import React from 'react'

const Allwriters = () => {
  return (
    <div className='mt-5'>
        <h2 className='text-3xl text-center'>All Writers With Us</h2>
       <Writers />
       <HowHelp />
    </div>
  )
}

export default Allwriters