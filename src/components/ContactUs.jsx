<<<<<<< HEAD
import { FiArrowRight } from "react-icons/fi";

const ContactUs = () => {
  return (
    <section className="mb-20 w-full">
      <h1 className="textColor text-5xl">Contact Us</h1>
      <div className="flex gap-5 mt-5 mb-16">
        <form
          action=""
          method="post"
          className="contactForm flex flex-col gap-3"
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
            rows={6}
            className="pl-5 pt-3"
            required
          />
        </form>
        <img src={"src/assets/rectangle 9.png"} alt="" style={{ width: '940px', height: '380px' }} />
      </div>
      <button className="text-sm uppercase flex gap-3 items-center text-white bg-black p-5 px-10">
        send email
        <FiArrowRight />
      </button>
    </section>
  );
};

export default ContactUs;
=======
import { FiArrowRight } from "react-icons/fi";

const ContactUs = () => {
  return (
    <section className="mb-20 w-full">
      <h1 className="textColor text-5xl">Contact Us</h1>
      <div className="flex gap-5 mt-5 mb-16">
        <form
          action=""
          method="post"
          className="contactForm flex flex-col gap-3"
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
            rows={6}
            className="pl-5 pt-3"
            required
          />
        </form>
        <img src={"src/assets/rectangle 9.png"} alt="" style={{ width: '940px', height: '380px' }} />
      </div>
      <button className="text-sm uppercase flex gap-3 items-center text-white bg-black p-5 px-10">
        send email
        <FiArrowRight />
      </button>
    </section>
  );
};

export default ContactUs;
>>>>>>> dc41317 (first commit)
