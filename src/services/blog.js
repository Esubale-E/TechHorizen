const blogs = [
  {
    title: "The Future of AI",
    category: "Technology",
    author: "John Doe",
    date: "Dec 1, 2024",
    description:
      "An exploration of how AI is shaping industries and daily life.",
    image: "https://via.placeholder.com/300x200?text=AI+Future",
  },
  {
    title: "Effective Study Techniques",
    category: "Education",
    author: "Jane Smith",
    date: "Nov 25, 2024",
    description:
      "Learn practical and efficient ways to improve your study habits.",
    image: "https://via.placeholder.com/300x200?text=Study+Techniques",
  },
  {
    title: "Breaking Down React",
    category: "Web Development",
    author: "Michael Brown",
    date: "Nov 20, 2024",
    description:
      "Understanding the core concepts of React for modern web apps.",
    image: "https://via.placeholder.com/300x200?text=React+Basics",
  },
  {
    title: "Mental Health Tips for Students",
    category: "Health",
    tag: "#helth #mentalhelth ",
    description: "Simple and effective ways to prioritize mental health.",
    image: "https://via.placeholder.com/300x200?text=Mental+Health",
  },
  {
    title: "5 Emerging Technologies to Watch in 2025",
    category: "Technology",
    tag: "#technology #innovation #emergingtrends",
    description:
      "The world of technology is evolving at an unprecedented pace, introducing innovations that are set to redefine industries and transform everyday life. From advancements in artificial intelligence to breakthroughs in quantum computing, this blog post dives into five of the most exciting emerging technologies in 2025. Learn how these innovations are impacting healthcare, education, energy, and beyond, and explore their potential to solve global challenges, enhance efficiency, and open up new opportunities. Whether you're a tech enthusiast, a professional, or simply curious, this post provides insights into the future of technology and why staying informed about these trends is essential.",
    image: "https://via.placeholder.com/300x200?text=Emerging+Technologies",
  },
  {
    title: "The Future of Artificial Intelligence in Everyday Life",
    category: "Technology",
    tag: "#AI #Technology #Future",
    description: `
    Artificial Intelligence (AI) is no longer a futuristic concept; it is an integral part of our daily lives. From virtual assistants like Siri and Alexa to recommendation algorithms on streaming platforms, AI is shaping how we interact with technology. 
    This blog explores the current advancements in AI, including machine learning, natural language processing, and computer vision, and discusses their applications in healthcare, education, finance, and smart homes. 
    We delve into how AI-powered tools are making life more convenient, while also addressing the ethical challenges such as privacy concerns and potential job displacement. 
    Join us as we envision the limitless possibilities of AI in creating smarter cities, personalized experiences, and solving some of humanity’s most pressing challenges. 
  `,
    image: "https://via.placeholder.com/300x200?text=Artificial+Intelligence",
  },
];

const trim = () =>
  blogs
    .sort((blog) => {
      blog.date < 1 ? 1 : -1;
      blog.date > 1 ? -1 : 1;
    })
    .slice(0, 3);

const latestBlogs = trim();

export default blogs;
export { latestBlogs };
