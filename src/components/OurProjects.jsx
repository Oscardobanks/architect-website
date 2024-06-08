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
            className="w-64 h-60"
          />
          <img
            src={"src/assets/rectangle 7.png"}
            alt=""
            className="w-1/2 h-60"
          />
          <img
            src={"src/assets/rectangle 8.png"}
            alt=""
            className="w-1/3 h-60"
          />
        </div>
      </div>
      <button className="uppercase flex gap-3 items-center text-sm bg-black text-white p-4 mt-4 w-fit float-end">
        all Projects
        <FiArrowRight />
      </button>
    </section>
  );
};

export default OurProjects;
