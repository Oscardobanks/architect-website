import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const ProjectLorum = () => {
  return (
    <section className="md:flex justify-between gap-10 items-end mb-20">
      <div className="flex flex-col lg:gap-20 gap-10 my-20">
        <div>
          <p className="textColor uppercase text-5xl">Project</p>
          <p className="text-5xl font-bold">Lorum</p>
        </div>
        <div className="flex gap-3">
          <div className="p-2 border text-black w-fit">
            <FiArrowLeft />
          </div>
          <div className="p-2 bg-gray-100 w-fit">
            <FiArrowRight />
          </div>
        </div>
        <div className="flex gap-4 textColor">
          <div>
            <p>0</p>
            <p>1</p>
          </div>
          <span className="gray-line"></span>
          <p>02</p>
        </div>
      </div>

      <div>
        <img src={"src/assets/rectangle.png"} alt="" />
        <a href="/projects">
          <button className="flex gap-3 uppercase items-center p-5 pr-16 absolute lg:-mt-16 -mt-14 z-10 bg-white">
            View Project
            <FiArrowRight className="ml-2" />
          </button>
        </a>
      </div>
    </section>
  );
};

export default ProjectLorum;
