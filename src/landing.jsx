import React, { useState } from "react";
import foto from "./foto.jpg";
import foto2 from "./foto2.jpg";
import foto3 from "./foto3.jpg";
import foto4 from "./foto4.jpg";
import { Carousel } from "@material-tailwind/react";

const ProjectSection = ({ openModal }) => {
  return (
    <section id="project" className="bg-gradient-to-b from-white to-green1 py-36">
      <div className="container mx-auto text-center space-y-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">CARD PAGES</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div
            className="bg-white p-6 shadow-lg rounded-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105 w-full lg:w-1/3 cursor-pointer"
            onClick={() => openModal('CARD1')}
          >
            <img src={foto2} alt="icon" className="h-36 mx-auto mb-4 rounded-md" />
            <h3 className="text-xl font-bold text-gray-800">CARD1</h3>
            <p className="text-gray-600">lorem lorem lorem</p>
          </div>
          {/* Card 2 */}
          <div
            className="bg-white p-6 shadow-lg rounded-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105 w-full lg:w-1/3 cursor-pointer"
            onClick={() => openModal('CARD2')}
          >
            <img src={foto3} alt="icon" className="h-36 mx-auto mb-4 rounded-md" />
            <h3 className="text-xl font-bold text-gray-800">CARD2</h3>
            <p className="text-gray-600">lorem lagi lorem lagi lorem lagi</p>
          </div>
          {/* Card 3 */}
          <div
            className="bg-white p-6 shadow-lg rounded-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105 w-full lg:w-1/3 cursor-pointer"
            onClick={() => openModal('CARD3')}
          >
            <img src={foto4} alt="icon" className="h-36 mx-auto mb-4 rounded-md" />
            <h3 className="text-xl font-bold text-gray-800">CARD3</h3>
            <p className="text-gray-600">lagi lagi lorem lagi</p>
          </div>
        </div>
      </div>
    </section>
  );
};


const Landing = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  const openModal = (card) => {
    setCurrentCard(card);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentCard(null);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header */}
      <nav className="bg-darkgreen1 shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-white">MyPorto</a>
          <div className="flex">
            <strong>
              <a href="#project" className="text-white mr-4 hover:text-olive1">Project</a>
              <a href="#about" className="text-white mr-4 hover:text-olive1">About</a>
              <a href="#contact" className="text-white hover:text-olive1">Contact</a>
            </strong>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green1 to-white py-36 lg:py-36">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 flex flex-col space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">Gianna Nasya</h1>
            <p className="text-lg lg:text-xl text-gray-600">Information Technology - Frontend Developer</p>
            <a href="#project" className="px-6 py-3 bg-darkgreen1 text-white rounded-lg hover:bg-olive1 w-80">Let's Get Started</a>
          </div>
          <div className="lg:w-1/2">
            <img src={foto} alt="fotooo" className="w-full" />
          </div>
        </div>
      </section>

      {/* Project Section */}
      <ProjectSection openModal={openModal} />

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg w-1/3 relative">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="font-bold text-lg">{currentCard}!</h3>
            <p className="py-4">desc buat card nya nanti</p>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="bg-gradient-to-b from-green1 to-white py-36 lg:py-36">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 flex flex-col space-y-6 lg:pr-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">About Me</h1>
            <p className="text-lg lg:text-xl text-gray-600 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src={foto} alt="fotooo" className="w-full" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-b from-white to-green1 py-36">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-larger text-4xl font-bold">Contact me</p>
          <h1 className="mt-2 text-3xl font-bold text-olive1 md:text-3xl">Get in touch</h1>
        </div>
        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Card for Email */}
          <div className="bg-white p-6 shadow-lg rounded-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105">
            <span className="inline-block p-3 text-white rounded-full bg-darkblue1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.5V15a2.5 2.5 0 01-2.5 2.5H5.5A2.5 2.5 0 013 15v-2.5M21 12.5V7a2.5 2.5 0 00-2.5-2.5H5.5A2.5 2.5 0 003 7v5.5m18 0l-9 4.5-9-4.5" />
              </svg>
            </span>
            <h2 className="mt-4 text-2xl font-medium text-olive1">Email</h2>
            <p className="mt-2 text-blue-500">gianna@nasya.com</p>
          </div>

          {/* Card for Office */}
          <div className="bg-white p-6 shadow-lg rounded-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105">
            <span className="inline-block p-3 text-white rounded-full bg-darkblue1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>
            <h2 className="mt-4 text-2xl font-medium text-olive1">Office</h2>
            <p className="mt-2 text-blue-500">jalanin aja dlu</p>
          </div>

          {/* Card for Phone */}
          <div className="bg-white p-6 shadow-lg rounded-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105">
            <span className="inline-block p-3 text-white rounded-full bg-darkblue1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </span>
            <h2 className="mt-4 text-2xl font-medium text-olive1">Phone</h2>
            <p className="mt-2 text-blue-500">+62 000-0000-0000</p>
          </div>
        </div>
      </div>
      </section>

      {/* Footer */}
      <footer className="bg-darkgreen1 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© Gianna Nasya 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
