import { FiArrowRight } from "react-icons/fi";
import {rectangle9} from "../assets/images";

const ContactUs = () => {
  return (
    <section className="mb-20 w-full">
      <h1 className="textColor text-5xl">Contact Us</h1>
      <div className="lg:flex gap-5 mt-5 mb-16">
        <form
          action=""
          method="post"
          className="contactForm flex flex-col gap-3 lg:w-full"
        >
          <input type="text" name="name" placeholder="Name" />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            required
          />
          <input type="email" name="email" placeholder="E-mail" required />
          <input type="text" name="interest" placeholder="Interested In" />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="pl-5 pt-3 bg-gray-50"
            required
          />
        </form>
        <img
          src={rectangle9}
          alt="contact img"
          className="lg:block hidden"
          style={{ width: "940px", height: "375px" }}
        />
      </div>
      <button className="text-sm uppercase flex gap-3 items-center text-white bg-black p-5 px-10">
        send email
        <FiArrowRight />
      </button>
    </section>
  );
};

export default ContactUs;
