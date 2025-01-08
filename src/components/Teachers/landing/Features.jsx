// Features Section
const Features = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto text-center space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">
        Features that Make Teaching Easier
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Interactive Learning Tools
          </h3>
          <p className="mt-4 text-gray-600">
            Engage your students with interactive quizzes, multimedia content,
            and real-time feedback.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Classroom Management
          </h3>
          <p className="mt-4 text-gray-600">
            Organize your classes, assign homework, and track student progress
            effortlessly.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Professional Development
          </h3>
          <p className="mt-4 text-gray-600">
            Access courses and resources to enhance your teaching skills and
            grow your career.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
