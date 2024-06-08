<<<<<<< HEAD
import { AiOutlineMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="flex gap-20 py-10 px-20 items-start text-white">
        <img src={"src/assets/logo white.svg"} alt="" />
        <div className="flex flex-col gap-4 ml-10 capitalize">
          <h1 className="font-bold">Information</h1>
          <a href="/">main</a>
          <a href="/gallery">gallery</a>
          <a href="/projects">projects</a>
          <a href="">certifications</a>
          <a href="">contacts</a>
        </div>

        <div className="ml-20">
          <h1 className="font-bold">Contacts</h1>
          <div className="flex gap-3 mt-4">
            <BiMap />
            <span className="w-40">1234 Sample Street Austin Texas 78704</span>
          </div>
          <div className="flex gap-3 mt-12">
            <FiPhone />
            <span>512.333.2222</span>
          </div>
          <div className="flex gap-3 mt-10">
            <AiOutlineMail />
            <span>sampleemail@gmail.com</span>
          </div>
        </div>

        <div className="ml-32">
          <h1 className="font-bold">Social Media</h1>
          <div className="flex gap-10 mt-4">
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaLinkedinIn />
            </a>
            <a href="">
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>

      <hr className="mt-10" />

      <p className="footerColor text-center py-10">© 2021 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
=======
import { AiOutlineMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="flex md:flex-row flex-col lg:gap-20 gap-10 py-10 xl:mx-20 sm:mx-10 mx-5 items-start text-white">
        <img src={"src/assets/logo white.svg"} alt="" />
        <div className="flex flex-col gap-4 xl:ml-10 capitalize">
          <h1 className="font-bold">Information</h1>
          <a href="/">main</a>
          <a href="/gallery">gallery</a>
          <a href="/projects">projects</a>
          <a href="">certifications</a>
          <a href="">contacts</a>
        </div>

        <div className="xl:ml-20">
          <h1 className="font-bold">Contacts</h1>
          <div className="flex gap-3 mt-4">
            <BiMap />
            <span className="w-40">1234 Sample Street Austin Texas 78704</span>
          </div>
          <div className="flex gap-3 lg:mt-12 mt-8">
            <FiPhone />
            <span>512.333.2222</span>
          </div>
          <div className="flex gap-3 lg:mt-10 mt-5">
            <AiOutlineMail />
            <span>sampleemail@gmail.com</span>
          </div>
        </div>

        <div className="xl:ml-32">
          <h1 className="font-bold">Social Media</h1>
          <div className="flex lg:gap-10 gap-5 mt-4">
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaLinkedinIn />
            </a>
            <a href="">
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>

      <hr className="mt-10" />

      <p className="footerColor text-center py-10">© 2021 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
>>>>>>> dc41317 (first commit)
