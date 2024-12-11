const Testimonials = () => (
  <section className='py-16 bg-blue-100'>
    <div className='container mx-auto text-center'>
      <h2 className='text-3xl font-bold text-gray-800'>
        What Teachers Are Saying
      </h2>
      <div className='mt-8 space-y-6'>
        <div className='max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg'>
          <p className='text-lg text-gray-700'>
            &quot;This platform has transformed the way I teach. My students are
            more engaged, and I’m able to track their progress effortlessly.
            Highly recommended!&quot;
          </p>
          <p className='mt-4 font-semibold text-gray-800'>
            Sarah L., High School Teacher
          </p>
        </div>
        <div className='max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg'>
          <p className='text-lg text-gray-700'>
            &quot;The professional development resources are excellent. I’ve
            learned so much and feel more confident in my teaching
            abilities.&quot;
          </p>
          <p className='mt-4 font-semibold text-gray-800'>
            John D., Elementary School Teacher
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;