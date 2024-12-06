const Features = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="text-center max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">What We Offer</h2>
        <p className="text-lg text-gray-700 mb-12">
          At TechHorizon, we bring together tech enthusiasts, professionals, and
          learners. We offer engaging events, collaborative workshops, valuable
          networking opportunities, and insightful blog content to help you
          grow.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Event Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="mb-4">
              <i className="fas fa-calendar-alt text-4xl text-blue-500"></i>
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              Upcoming Events
            </h3>
            <p className="text-gray-600">
              Stay up to date with the latest tech events, workshops, and
              meetups happening in our community. Whether you`re looking to
              network, learn, or collaborate, we have something for you!
            </p>
          </div>

          {/* Event Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="mb-4">
              <i className="fas fa-users-cog text-4xl text-blue-500"></i>
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              Collaborative Workshops
            </h3>
            <p className="text-gray-600">
              Join our hands-on workshops where you can collaborate with
              like-minded individuals, share knowledge, and build real-world
              projects that help you grow your skills.
            </p>
          </div>

          {/* Event Feature 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="mb-4">
              <i className="fas fa-chalkboard-teacher text-4xl text-blue-500"></i>
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              Tech Talks & Webinars
            </h3>
            <p className="text-gray-600">
              Attend insightful tech talks and webinars by industry experts,
              covering the latest trends, technologies, and career development
              tips. Expand your knowledge and stay ahead of the curve.
            </p>
          </div>

          {/* Blog Feature */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="mb-4">
              <i className="fas fa-blog text-4xl text-blue-500"></i>
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">
              Tech Blog
            </h3>
            <p className="text-gray-600">
              Stay informed with the latest trends, tutorials, and community
              stories. Our blog covers tech tips, guides, and insights from both
              industry leaders and community members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
