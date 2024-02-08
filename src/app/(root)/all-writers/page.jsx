import HowHelp from '@/pages/allwriters/HowHelp'
import Writers from '@/pages/allwriters/Writers'
import React from 'react'

const Allwriters = () => {
  return (
    <div className='mt-28'>
        <h2 className='text-3xl text-center'>All Writers With Us</h2>
       <Writers />
       <HowHelp />
    </div>
  )
}

export default Allwriters