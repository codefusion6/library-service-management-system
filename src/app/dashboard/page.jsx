import React from 'react'

function page() {
    return (
        <main className='min-h-screen px-1 bg-slate-600 pt-24'>
            <section>
                <div className="container mx-auto">
                    <div className='flex gap-2'>
                        <div className='w-4/12 border-r border-white bg-white'>
                            {/* <Sidebar/>  components */}
                        </div>
                        <div className='w-8/12 bg-white'>
                            {/* <Main/>  components */}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page