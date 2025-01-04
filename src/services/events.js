const events = [
  {
    title: "Hackathon 2024",
    date: "2025-01-15",
    location: "Online",
    description:
      "Join the coding extravaganza and showcase your skills in Hackathon 2024.",
    category: "Technology",
  },
  {
    title: "AI Webinar",
    date: "2024-02-20",
    location: "Virtual",
    description:
      "Explore the fascinating world of AI in this upcoming webinar with industry experts.",
    category: "Technology",
  },
  {
    title: "Tech Talk Series",
    date: "2024-03-10",
    location: "Campus Auditorium",
    description:
      "A series of tech talks covering trends in technology, innovation, and entrepreneurship.",
    category: "Technology",
  },
  {
    title: "Startup Workshop",
    date: "2024-04-05",
    location: "City Center",
    description:
      "Learn how to turn ideas into startups with practical insights and hands-on experience.",
    category: "Business",
  },
  {
    title: "Blockchain Basics",
    date: "2024-02-20",
    location: "Tech Auditorium",
    description:
      "Explore the world of blockchain technology, decentralized systems, and real-world use cases.",
    category: "Technology",
  },
  {
    title: "Art Gala 2024",
    date: "2024-05-12",
    location: "Art Gallery",
    description:
      "A celebration of art and creativity featuring local and international artists.",
    category: "Arts",
  },
  {
    title: "Classical Music Night",
    date: "2024-06-15",
    location: "Opera House",
    description:
      "Enjoy an evening of classical music performed by world-class musicians.",
    category: "Music",
  },
  {
    title: "Basketball Finals",
    date: "2024-07-20",
    location: "Sports Arena",
    description:
      "Witness the excitement as top teams compete in the championship game.",
    category: "Sports",
  },
  {
    title: "Career Fair 2024",
    date: "2024-08-10",
    location: "Convention Center",
    description:
      "Connect with employers, explore job opportunities, and grow your career network.",
    category: "Career",
  },
  {
    title: "Photography Workshop",
    date: "2024-09-05",
    location: "City Library",
    description:
      "Learn photography techniques from professionals in this hands-on workshop.",
    category: "Arts",
  },
  {
    title: "Yoga Retreat",
    date: "2024-10-10",
    location: "Mountain Resort",
    description:
      "Rejuvenate your mind and body with yoga sessions in a serene environment.",
    category: "Health",
  },
  {
    title: "Food Festival 2024",
    date: "2024-11-01",
    location: "Downtown",
    description:
      "Savor delicious cuisines from around the world at the annual food festival.",
    category: "Food",
  },
  {
    title: "Coding Bootcamp",
    date: "2024-12-01",
    location: "Online",
    description:
      "Enhance your programming skills with intensive coding sessions and expert mentorship.",
    category: "Technology",
  },
  {
    title: "Environmental Summit",
    date: "2024-12-15",
    location: "City Hall",
    description:
      "Discuss environmental issues and solutions with global leaders and activists.",
    category: "Environment",
  },
  {
    title: "Chess Championship",
    date: "2024-12-20",
    location: "Community Center",
    description:
      "Watch top players compete for the grand title in this exciting chess championship.",
    category: "Sports",
  },
  {
    title: "Cultural Fest 2024",
    date: "2024-09-15",
    location: "Town Square",
    description:
      "Experience diverse cultures through music, dance, and art at the cultural festival.",
    category: "Culture",
  },
  {
    title: "Mental Health Workshop",
    date: "2024-10-05",
    location: "Wellness Center",
    description:
      "Learn strategies to improve mental health and well-being in this interactive workshop.",
    category: "Health",
  },
  {
    title: "Film Screening: Indie Classics",
    date: "2024-11-20",
    location: "Cinema Hall",
    description:
      "A special screening of indie classic films with discussions and insights from filmmakers.",
    category: "Film",
  },
  {
    title: "Marathon 2024",
    date: "2024-11-25",
    location: "City Park",
    description:
      "Join the annual marathon and run for a cause while enjoying the scenic route.",
    category: "Sports",
  },
];

const trim = () => events.sort((a, b) => a.date - b.date).slice(0, 4);

const latestEvents = trim();

export default events;
export { latestEvents };
