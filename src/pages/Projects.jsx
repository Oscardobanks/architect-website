import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const projects = [
  {
    img: "src/assets/projects/rectangle 1.png",
    title: "Sample project",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    img: "src/assets/projects/rectangle 2.png",
    title: "sample project 2",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    img: "src/assets/projects/rectangle 3.png",
    title: "sample project 3",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const Projects = () => {
  return (
    <section className="xl:mx-20 sm:mx-10 mx-5">
      <div className="mt-10">
        <p className="textColor text-5xl">Our</p>
        <p className="text-5xl font-bold">Projects</p>
      </div>

      <hr className="my-5" />

      <div className="flex flex-col gap-16 mb-10">
        {projects.map((project, index) => {
          return (
            <div key={index} className="bg-gray-50 lg:flex gap-4">
              <img src={project.img} alt="" className="lg:w-1/2 w-full" />
              <div className="lg:w-1/2 m-5">
                <h1 className="textColor text-5xl lg:mt-5 mt-10 xl:mb-20 mb-10 capitalize">{project.title}</h1>
                <p>{project.details}</p>
                <button className="flex gap-3 items-center bg-white text-xs pl-9 py-4 pr-10 mt-12 uppercase">
                  view more
                  <FiArrowRight />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-5 mb-20">
        <div className="flex gap-4 textColor">
          <div className="text-black">
            <p>0</p>
            <p>1</p> 
          </div>
          <span className="gray-line"></span>
          <p>05</p>
        </div>
        <div className="flex gap-3 h-fit">
          <div className="p-2 border text-black w-fit">
            <FiArrowLeft />
          </div>
          <div className="p-2 bg-gray-100 w-fit">
            <FiArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
