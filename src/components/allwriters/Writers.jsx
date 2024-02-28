"use server"
import Image from "next/image"


const Writers = async ({ writers }) => {
    return (
        <section className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-3 px-2'>
            {
                writers.map((writer, idx) => (
                        <div key={idx} className='border-2 p-2 rounded-md'>
                            <Image height={200} width={300} className='h-[200px] w-full rounded-t-md' src={writer?.authorImg} alt="writer" />
                            <h3 className='mt-2 text-xl font-bold'>{writer?.writerName}</h3>
                            <p className='text-sm'>{writer?.description}</p>
                        </div>

                ))
            }
        </section>
    )
}

export default Writers