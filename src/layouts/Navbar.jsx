"use client";
import { Navbar } from "flowbite-react";
import {logo} from "../assets/images"

const NavigationBar = () => {
  return (
    <Navbar className="xl:flex xl:py-6 sm:px-0 xl:mx-20 sm:mx-10 mx-5 justify-between xl:me-48 uppercase">
      <Navbar.Brand>
        <a href="/">
          <img src={logo} alt="logo" />
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

export default NavigationBar;
