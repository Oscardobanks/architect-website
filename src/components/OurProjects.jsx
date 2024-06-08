import { FiArrowRight } from "react-icons/fi";
import {
  rectangle4,
  rectangle5,
  rectangle6,
  rectangle7,
  rectangle8,
} from "../assets/images";

const OurProjects = () => {
  return (
    <section className="mb-40">
      <h1 className="textColor text-5xl">Our Projects</h1>
      <div className="flex flex-col gap-4 mt-10">
        <div className="grid grid-cols-2 gap-4">
          <img src={rectangle4} alt="projects img1" />
          <img src={rectangle5} alt="projects img2" />
        </div>
        <div className="flex gap-4">
          <img
            src={rectangle6}
            alt="projects img3"
            className="lg:w-64 w-1/5 lg:h-60 md:h-40 h-20"
          />
          <img
            src={rectangle7}
            alt="projects img4"
            className="w-1/2 lg:h-60 md:h-40 h-20"
          />
          <img
            src={rectangle8}
            alt="projects img5"
            className="w-1/4 lg:h-60 md:h-40 h-20"
          />
        </div>
      </div>
      <a href="/projects">
        <button className="uppercase flex gap-3 items-center text-sm bg-black text-white md:p-4 p-3 mt-4 w-fit float-end">
          all Projects
          <FiArrowRight />
        </button>
      </a>
    </section>
  );
};

export default OurProjects;
