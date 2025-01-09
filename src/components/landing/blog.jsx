import { Heading2 } from "../common/Headings";
import Text from "../common/Text";
import { useEffect, useState } from "react";
import blogService from "../../services/blog-service";
import BlogCard from "./../BlogCard";
import { useNavigate } from "react-router-dom";

const BlogSection = () => {
  const navigateTO = useNavigate();
  const [blog, setBlog] = useState([]);
  const [error, setError] = useState(null);

  const trim = () =>
    blog
      .sort((blog) => {
        blog.date < 1 ? 1 : -1;
        blog.date > 1 ? -1 : 1;
      })
      .slice(0, 3);

  const latestBlogs = trim();

  useEffect(() => {
    blogService
      .getAll()
      .then((res) => {
        setBlog(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const handleReadMore = () => {
    navigateTO("join/signup");
  };

  if (error) return <p>{error}</p>;

  return (
    <section id="blog" className="bg-background py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Heading2>Latest Blogs</Heading2>
          <Text>Stay updated with our latest articles and insights</Text>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestBlogs.map((blog, i) => (
            <BlogCard key={i} blog={blog} onReadMore={handleReadMore} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
