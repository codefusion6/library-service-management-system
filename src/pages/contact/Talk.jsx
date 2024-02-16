import { BiMessageRoundedDots } from "react-icons/bi";
import { FaPhoneFlip } from "react-icons/fa6";

const Talk = () => {
  return (
    <section className="container mx-auto grid md:grid-cols-2 gap-4 text-center px-2 py-10">
      <div className="border-2 p-5 mb-2 rounded-md shadow-lg">
        <FaPhoneFlip className="mx-auto text-green-500 text-3xl" />
        <h3 className="text-2xl mt-1 mb-2 font-semibold">Talk to Subscription</h3>
        <p>
          Elevate your experience with our subscription service! Enjoy premium content, early access, personalized recommendations, and exclusive discounts. Choose from our Basic or Premium plans for a seamless, enhanced experience. Subscribe now through our website, and start reaping the rewards immediately. Have questions? Our dedicated support team is ready to assist at{" "}
          <a href="mailto:teamcodefusion24@gmail.com">teamcodefusion24@gmail.com</a>. Thank you for being a valued member of our community!
        </p>
        <p className="mt-2 text-green-500 font-bold">+8801763739339</p>
      </div>

      <div className="border-2 p-5 mb-2 rounded-md shadow-lg">
        <BiMessageRoundedDots className="mx-auto text-green-500 text-4xl" />
        <h3 className="text-2xl mt-1 mb-2 font-semibold">Contact Customer Support</h3>
        <p>
          We are here to help! If you have any questions, concerns, or need assistance, our dedicated customer support team is just a message away. Reach out to us at <a className="text-green-500" href="mailto:teamcodefusion24@gmail.com">teamcodefusion24@gmail.com</a>. Your satisfaction is our priority, and we are committed to providing prompt and helpful assistance. Thank you for choosing CodeFusion!
        </p>
        <p className="mt-2 text-green-500 font-bold">codefusion@teamgmail.com</p>
      </div>
    </section>
  );
};

export default Talk;
