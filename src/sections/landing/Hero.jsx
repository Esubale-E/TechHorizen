const Hero = () => {
  return (
    <section className="relative bg-cover bg-center text-white h-screen flex items-center justify-center py-16 px-4 bg-[url('/hero-bg.jpg')]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex">
        <div className="relative text-center max-w-4xl mx-auto z-10">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Welcome to <span className="text-yellow-400">TechHorizon</span>
          </h1>
          <p className="text-3xl">Your Gateway to Tech Excellence</p>
          <p className="text-lg mb-8">
            At TechHorizon, we are a vibrant community of innovators, learners,
            and tech enthusiasts passionate about exploring the ever-evolving
            world of technology. Join us to connect, learn, and collaborate as
            we shape the future of tech.
          </p>
          <a
            href="#join"
            className="bg-yellow-400 text-blue-900 px-6 py-3 text-xl font-semibold rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Join Us
          </a>
        </div>
        <div className="w-2/5"></div>
      </div>
    </section>
  );
};

export default Hero;
