<<<<<<< HEAD
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const ProjectLorum = () => {
  return (
    <section className="flex justify-between items-end mb-20">
      <div className="flex flex-col gap-20 mb-20">
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
        <button className="flex gap-3 uppercase items-center p-5 pr-16 absolute -mt-16 z-10 bg-white">
          View Project
          <FiArrowRight className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default ProjectLorum;
=======
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const ProjectLorum = () => {
  return (
    <section className="flex justify-between items-end mb-20">
      <div className="flex flex-col gap-20 mb-20">
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
        <button className="flex gap-3 uppercase items-center p-5 pr-16 absolute -mt-16 z-10 bg-white">
          View Project
          <FiArrowRight className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default ProjectLorum;
>>>>>>> dc41317 (first commit)
