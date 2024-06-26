import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
} from "../assets/images";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
];

const Gallery = () => {
  return (
    <section className="xl:mx-20 sm:mx-10 mx-5 mb-20">
      <div className="mt-10">
        <p className="textColor text-5xl">Photo</p>
        <p className="text-5xl font-bold">Gallery</p>
      </div>

      <hr className="my-5" />

      <div className="grid md:grid-cols-5 grid-cols-2 gap-3 mb-10">
        {images.map((image, index) => {
          return <img key={index} src={image} alt="" />;
        })}
      </div>

      <div className="flex gap-5">
        <div className="flex gap-4 textColor">
          <div>
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

export default Gallery;
