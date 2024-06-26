import { FiArrowRight } from "react-icons/fi";
import {
  rectangle1,
  rectangle2,
  rectangle3,
} from "../assets/images";

const About = () => {
  return (
    <section className="bg-gray-50 mb-28 p-5 md:flex gap-4">
      <div className="flex gap-4 lg:pl-10 pl-5">
        <div>
          <img
            src={rectangle1}
            alt="about img1"
            className="w-52 lg:h-52 md:h-60"
          />
          <img
            src={rectangle2}
            alt="about img2"
            className="xl:w-52 lg:w-48 lg:h-32 md:h-36 lg:absolute mt-4"
          />
        </div>
        <img
          src={rectangle3}
          alt="about img3"
          className="w-52 lg:h-64 md:h-80 md:mt-10"
        />
      </div>

      <div className="md:w-1/2">
        <h1 className="textColor text-5xl mb-3 md:mt-0 mt-10">About</h1>
        <p>
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        </p>
      <button className="flex gap-3 items-center bg-white text-xs pl-4 py-3 pr-10 mt-8 uppercase">
        read more
        <FiArrowRight />
      </button>
      </div>
    </section>
  );
};

export default About;
