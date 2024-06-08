<<<<<<< HEAD
<<<<<<< HEAD
const Navbar = () => {
  return (
    <>
      <nav className="flex py-6 px-20 justify-between pe-48">
        <a href="/"><img src={"src/assets/logo.svg"} alt="" /></a>
        <div className="uppercase flex gap-14 h-fit">
          <a href="/" className="border-y-2 border-y-black px-4">
            main
          </a>
          <a href="/gallery">gallery</a>
          <a href="/projects">projects</a>
          <a href="">certifications</a>
          <a href="">contacts</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
=======
const Navbar = () => {
=======
"use client";
import { Navbar } from "flowbite-react";

const NavigationBar = () => {
>>>>>>> 2a39322 (added responsiveness)
  return (
    <Navbar className="xl:flex xl:py-6 sm:px-0 xl:mx-20 sm:mx-10 mx-5 justify-between xl:me-48 uppercase">
      <Navbar.Brand>
        <a href="/">
          <img src={"src/assets/logo.svg"} alt="" />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" className="md:border-y-2 md:border-y-black md:px-4 lg:me-10">main</Navbar.Link>
        <Navbar.Link href="/gallery" className="lg:me-10">gallery</Navbar.Link>
        <Navbar.Link href="/projects" className="lg:me-10">projects</Navbar.Link>
        <Navbar.Link href="#" className="lg:me-10">certifications</Navbar.Link>
        <Navbar.Link href="#">Contacts</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

<<<<<<< HEAD
export default Navbar;
>>>>>>> dc41317 (first commit)
=======
export default NavigationBar;
>>>>>>> 2a39322 (added responsiveness)
