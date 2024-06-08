<<<<<<< HEAD
import { FiArrowRight } from "react-icons/fi";

const About = () => {
  return (
    <section className="bg-gray-50 mb-28 p-4 flex gap-4">
      <div className="flex gap-4 pl-10">
        <div>
          <img
            src={"src/assets/rectangle 1.jpeg"}
            alt=""
            className="w-52 h-52"
          />
          <img
            src={"src/assets/rectangle 2.jpeg"}
            alt=""
            className="w-52 h-28 absolute mt-4"
          />
        </div>
        <img
          src={"src/assets/rectangle 3.jpeg"}
          alt=""
          className="w-52 h-64 mt-5"
        />
      </div>

      <div className="w-1/2">
        <h1 className="textColor text-5xl mb-3">About</h1>
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
=======
import { FiArrowRight } from "react-icons/fi";

const About = () => {
  return (
    <section className="bg-gray-50 mb-28 p-4 flex gap-4">
      <div className="flex gap-4 pl-10">
        <div>
          <img
            src={"src/assets/rectangle 1.jpeg"}
            alt=""
            className="w-52 h-52"
          />
          <img
            src={"src/assets/rectangle 2.jpeg"}
            alt=""
            className="w-52 h-28 absolute mt-4"
          />
        </div>
        <img
          src={"src/assets/rectangle 3.jpeg"}
          alt=""
          className="w-52 h-64 mt-5"
        />
      </div>

      <div className="w-1/2">
        <h1 className="textColor text-5xl mb-3">About</h1>
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
>>>>>>> dc41317 (first commit)
