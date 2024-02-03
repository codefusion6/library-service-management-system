import { BiMessageRoundedDots } from "react-icons/bi";
import { FaPhoneFlip } from "react-icons/fa6";

const Talk = () => {
    return (
        <section className="container mx-auto md:flex text-center gap-4 px-2 py-10">
            <div className="border-2 p-5 rounded-md mb-2">
                <FaPhoneFlip className="mx-auto text-orange-500 text-3xl" />
                <h3 className="text-2xl mt-1 mb-2 font-semibold">Talk to Subscription</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perferendis accusamus sequi assumenda! Impedit sint ducimus esse voluptates harum expedita.</p>
                <p className="mt-2 text-orange-500 font-bold">+8801763739339</p>
            </div>
            <div className="border-2 p-5 rounded-md mb-2">
                <BiMessageRoundedDots className="mx-auto text-orange-500 text-4xl" />
                <h3 className="text-2xl mt-1 mb-2 font-semibold">Contact Customer Support</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perferendis accusamus sequi assumenda! Impedit sint ducimus esse voluptates harum expedita.</p>
                <p className="mt-2 text-orange-500 font-bold">codefusion@teamgmail.com</p>
            </div>
        </section>
    )
}

export default Talk