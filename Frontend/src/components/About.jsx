import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


const About = () => {
  return (
    <div className="about-us-container mx-auto max-w-screen-lg p-8">
    <Navbar />
      {/* <h1 className="text-4xl font-bold mb-4">About Us</h1> */}

      <section className="mb-8 mt-12">
        <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
        <p className="text-lg">
          We are a team of passionate professionals dedicated to delivering high-quality solutions. 
          Our mission is to empower businesses and individuals through innovative technology and 
          exceptional service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-lg">
          Our mission is to lead the industry in delivering exceptional digital products and 
          services that create lasting value and drive meaningful impact for our clients.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
        <p className="text-lg">
          We envision a world where technology serves as a bridge to greater achievements and 
          deeper connections, improving the lives of people around the globe.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Meet the Team</h2>
        <p className="text-lg">
          Our team is comprised of experts in various fields, including development, design, and 
          strategy. Together, we work to build solutions that are innovative, reliable, and impactful.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default About;
