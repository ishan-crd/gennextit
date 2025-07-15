"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Development",
      location: "Noida, India",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Join our dynamic development team to build cutting-edge web applications using modern technologies like React, Node.js, and cloud platforms.",
      requirements: [
        "Strong proficiency in JavaScript, React, and Node.js",
        "Experience with cloud platforms (AWS/Azure/GCP)",
        "Knowledge of database design and optimization",
        "Excellent problem-solving skills",
      ],
    },
    {
      id: 2,
      title: "IT Consultant",
      department: "Consulting",
      location: "Remote/Hybrid",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Lead IT transformation projects for enterprise clients, providing strategic guidance and technical expertise.",
      requirements: [
        "Proven experience in IT consulting",
        "Strong understanding of enterprise architecture",
        "Excellent communication and presentation skills",
        "Experience with digital transformation projects",
      ],
    },
    {
      id: 3,
      title: "Training Specialist",
      department: "Training",
      location: "Noida, India",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Design and deliver comprehensive training programs for emerging technologies and professional development.",
      requirements: [
        "Experience in corporate training or education",
        "Strong presentation and communication skills",
        "Knowledge of modern training methodologies",
        "Ability to adapt to new technologies quickly",
      ],
    },
    {
      id: 4,
      title: "Mobile App Developer",
      department: "Development",
      location: "Noida, India",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Develop innovative mobile applications for iOS and Android platforms using React Native and native technologies.",
      requirements: [
        "Experience with React Native or Flutter",
        "Knowledge of iOS/Android development",
        "Understanding of mobile app architecture",
        "Experience with mobile app deployment",
      ],
    },
  ];

  const benefits = [
    {
      icon: "🏥",
      title: "Health & Wellness",
      description:
        "Comprehensive medical, dental, and vision coverage for you and your family",
    },
    {
      icon: "🌱",
      title: "Growth & Learning",
      description:
        "Continuous learning opportunities, certifications, and professional development",
    },
    {
      icon: "⚖️",
      title: "Work-Life Balance",
      description:
        "Flexible working hours, remote work options, and generous PTO",
    },
    {
      icon: "💰",
      title: "Competitive Package",
      description:
        "Industry-leading salary, performance bonuses, and stock options",
    },
    {
      icon: "🎯",
      title: "Innovation Culture",
      description: "Work on cutting-edge projects with the latest technologies",
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description:
        "Collaborative environment with talented professionals worldwide",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 container mx-auto px-[7vw] py-[10vh]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-manrope font-medium text-[8vmin] text-gradient-blue mb-[3vh]">
              Join Our Team
            </h1>
            <p className="font-poppins text-xl text-gradient-black max-w-3xl mx-auto">
              Shape the future of technology with GennextIT. We're looking for
              passionate individuals who want to make a real impact in the world
              of IT consulting, development, and training.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section px-[7vw] py-[8vh]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[6vh]"
        >
          <h2 className="font-manrope font-medium text-[6vmin] text-gradient-white mb-[2vh]">
            Why Work With Us?
          </h2>
          <p className="font-poppins text-lg text-gray-400 max-w-2xl mx-auto">
            At GennextIT, we believe in empowering our team members to reach
            their full potential
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 hover:from-blue-900/30 hover:to-purple-900/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="font-outfit text-xl font-medium mb-3 text-white">
                {benefit.title}
              </h3>
              <p className="font-poppins text-gray-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="section px-[7vw] py-[8vh] bg-gradient-to-br from-gray-900/50 to-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[6vh]"
        >
          <h2 className="font-manrope font-medium text-[6vmin] text-gradient-blue mb-[2vh]">
            Current Openings
          </h2>
          <p className="font-poppins text-lg text-gray-400 max-w-2xl mx-auto">
            Explore exciting career opportunities and be part of our growing
            team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedJob(job)}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-outfit text-xl font-medium text-white mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">
                      {job.department}
                    </span>
                    <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                    <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full">
                      {job.experience}
                    </span>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">{job.location}</span>
              </div>
              <p className="font-poppins text-gray-400 mb-4">
                {job.description}
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="section px-[7vw] py-[8vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-manrope font-medium text-[6vmin] text-gradient-white mb-[3vh]">
              Our Culture
            </h2>
            <p className="font-poppins text-lg text-gray-400 mb-6">
              At GennextIT, we foster an environment of innovation,
              collaboration, and continuous learning. Our team is our greatest
              asset, and we invest in their growth and success.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="font-poppins text-gray-300">
                  Innovation-driven mindset
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="font-poppins text-gray-300">
                  Collaborative team environment
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="font-poppins text-gray-300">
                  Continuous learning opportunities
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="font-poppins text-gray-300">
                  Work-life balance focus
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-8 backdrop-blur-sm">
              <img
                src="/team-culture.jpg"
                alt="Team Culture"
                className="w-full h-64 object-cover rounded-lg mb-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  const nextSibling = target.nextSibling as HTMLElement;
                  target.style.display = "none";
                  if (nextSibling) nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden w-full h-64 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-lg items-center justify-center">
                <span className="text-4xl">👥</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="section px-[7vw] py-[8vh] bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-manrope font-medium text-[6vmin] text-gradient-blue mb-[3vh]">
            Ready to Join Us?
          </h2>
          <p className="font-poppins text-lg text-gray-400 mb-8">
            Take the next step in your career journey. Send us your resume and
            let's build something amazing together.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-outfit text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Send Your Resume
            </button>
            <span className="font-poppins text-gray-400">or</span>
            <button className="border border-blue-500 text-blue-400 px-8 py-3 rounded-full font-outfit text-lg hover:bg-blue-500/10 transition-all duration-300">
              View All Positions
            </button>
          </div>
          <div className="mt-8">
            <p className="font-poppins text-sm text-gray-500">
              Email:{" "}
              <span className="text-blue-400">careers@gennextit.com</span> |
              Phone: <span className="text-blue-400">+91 1234567891</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-outfit text-2xl font-medium text-white mb-2">
                  {selectedJob.title}
                </h3>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">
                    {selectedJob.department}
                  </span>
                  <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full">
                    {selectedJob.type}
                  </span>
                  <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full">
                    {selectedJob.experience}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="mb-6">
              <p className="font-poppins text-gray-400 mb-4">
                {selectedJob.description}
              </p>
              <p className="font-poppins text-sm text-gray-500">
                📍 {selectedJob.location}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-outfit text-lg font-medium text-white mb-3">
                Requirements:
              </h4>
              <ul className="space-y-2">
                {selectedJob.requirements.map((req, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="font-poppins text-gray-400">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-outfit hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Apply Now
              </button>
              <button
                onClick={() => setSelectedJob(null)}
                className="border border-gray-600 text-gray-400 px-6 py-3 rounded-full font-outfit hover:bg-gray-800 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CareerPage;
