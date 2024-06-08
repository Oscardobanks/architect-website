import { FiArrowRight } from "react-icons/fi";

const OurProjects = () => {
  return (
    <section className="mb-40">
      <h1 className="textColor text-5xl">Our Projects</h1>
      <div className="flex flex-col gap-4 mt-10">
        <div className="grid grid-cols-2 gap-4">
          <img src={"src/assets/rectangle 4.png"} alt="" />
          <img src={"src/assets/rectangle 5.png"} alt="" />
        </div>
        <div className="flex gap-4">
          <img
            src={"src/assets/rectangle 6.png"}
            alt=""
            className="lg:w-64 w-1/5 lg:h-60 md:h-40 h-20"
          />
          <img
            src={"src/assets/rectangle 7.png"}
            alt=""
            className="w-1/2 lg:h-60 md:h-40 h-20"
          />
          <img
            src={"src/assets/rectangle 8.png"}
            alt=""
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
