
const jobPostings = [
  {
    title: "Frontend Developer",
    company: "Tech Innovators Inc.",
    location: "Bengaluru, India",
    description: "Looking for a passionate frontend developer proficient in React.js and TypeScript.",
    applyLink: "https://example.com/apply/frontend-developer"
  },
  {
    title: "Backend Developer",
    company: "CodeCraft Solutions",
    location: "Hyderabad, India",
    description: "Seeking an experienced backend developer with expertise in Node.js and Express.",
    applyLink: "https://example.com/apply/backend-developer"
  },
  {
    title: "Data Scientist",
    company: "AI Nexus",
    location: "Remote",
    description: "Join our AI team to analyze data and build predictive models using Python and TensorFlow.",
    applyLink: "https://example.com/apply/data-scientist"
  },
  {
    title: "DevOps Engineer",
    company: "CloudMasters",
    location: "Pune, India",
    description: "Looking for a DevOps engineer experienced in AWS, Docker, and Kubernetes.",
    applyLink: "https://example.com/apply/devops-engineer"
  },
  {
    title: "UI/UX Designer",
    company: "DesignPro Studio",
    location: "Chennai, India",
    description: "Creative UI/UX designer wanted to craft intuitive user experiences and wireframes.",
    applyLink: "https://example.com/apply/ui-ux-designer"
  },
];

const Careers = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-white font-bold mb-8 text-center">Careers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobPostings.map((job, index) => (
            <div key={index} className=" text-white bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
              <p className="text-lg text-white  mb-2">
                <strong>Company:</strong> {job.company}
              </p>
              <p className="text-lg text-white  mb-4">
                <strong>Location:</strong> {job.location}
              </p>
              <p className="text-white  mb-4">{job.description}</p>
              <a
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
