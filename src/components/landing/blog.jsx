import { Heading2 } from "../common/Headings";
import AppLink from "../common/AppLink";

const blogs = [
  {
    id: 1,
    image: "https://via.placeholder.com/300",
    title: "How to Master React",
    description: "A step-by-step guide to becoming a React expert.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300",
    title: "Understanding TailwindCSS",
    description: "Learn how to build stylish, responsive UI components.",
  },
];

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="bg-background dark:bg-darkbackground py-12 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Heading2>Latest Blogs</Heading2>
          <p className="text-secondary dark:text-darksecondary mt-4">
            Stay updated with our latest articles and insights
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-darkbackground rounded-lg shadow-md overflow-hidden"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                {/* Blog Title */}
                <h3 className="text-xl font-semibold text-primary dark:text-highlight mb-2">
                  {blog.title}
                </h3>

                {/* Blog Description */}
                <p className="text-text dark:text-darktext mb-4">
                  {blog.description}
                </p>

                {/* Read More Button */}
                <AppLink to={`/blog/${blog.id}`}>Read More →</AppLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
