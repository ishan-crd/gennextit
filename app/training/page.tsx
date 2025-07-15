"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const TrainingPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const trainingPrograms = [
    {
      id: 1,
      title: "Full Stack Development",
      category: "Development",
      duration: "6 months",
      level: "Beginner to Advanced",
      price: "₹75,000",
      image: "/course-fullstack.jpg",
      description:
        "Master modern web development with React, Node.js, and cloud technologies",
      modules: [
        "HTML5, CSS3, and Modern JavaScript",
        "React.js and Redux",
        "Node.js and Express.js",
        "Database Design (MongoDB, PostgreSQL)",
        "Cloud Deployment (AWS/Azure)",
        "DevOps and CI/CD",
      ],
      features: [
        "Live projects",
        "Industry mentorship",
        "Job placement assistance",
        "Certificate of completion",
      ],
    },
    {
      id: 2,
      title: "Cloud Computing (AWS/Azure)",
      category: "Infrastructure",
      duration: "4 months",
      level: "Intermediate",
      price: "₹60,000",
      image: "/course-cloud.jpg",
      description: "Become a cloud expert with hands-on AWS and Azure training",
      modules: [
        "Cloud Fundamentals",
        "AWS Core Services",
        "Azure Platform Services",
        "DevOps and Automation",
        "Security and Compliance",
        "Cost Optimization",
      ],
      features: [
        "AWS/Azure certification prep",
        "Hands-on labs",
        "Real-world scenarios",
        "Expert instructors",
      ],
    },
    {
      id: 3,
      title: "Data Science & AI",
      category: "Analytics",
      duration: "8 months",
      level: "Beginner to Advanced",
      price: "₹90,000",
      image: "/course-datascience.jpg",
      description: "Learn data science, machine learning, and AI with Python",
      modules: [
        "Python Programming",
        "Data Analysis with Pandas",
        "Machine Learning Algorithms",
        "Deep Learning with TensorFlow",
        "Natural Language Processing",
        "Computer Vision",
      ],
      features: [
        "Kaggle competitions",
        "Industry projects",
        "Research opportunities",
        "AI certification",
      ],
    },
    {
      id: 4,
      title: "Mobile App Development",
      category: "Development",
      duration: "5 months",
      level: "Beginner",
      price: "₹65,000",
      image: "/course-mobile.jpg",
      description: "Build native and cross-platform mobile apps",
      modules: [
        "React Native Fundamentals",
        "iOS Development with Swift",
        "Android Development with Kotlin",
        "Firebase Integration",
        "App Store Deployment",
        "Mobile UI/UX Design",
      ],
      features: [
        "App store publishing",
        "Portfolio development",
        "Freelancing guidance",
        "Industry networking",
      ],
    },
    {
      id: 5,
      title: "Cybersecurity",
      category: "Security",
      duration: "6 months",
      level: "Intermediate",
      price: "₹70,000",
      image: "/course-security.jpg",
      description: "Master cybersecurity fundamentals and advanced techniques",
      modules: [
        "Network Security",
        "Ethical Hacking",
        "Penetration Testing",
        "Security Auditing",
        "Incident Response",
        "Compliance and Governance",
      ],
      features: [
        "Hands-on labs",
        "Security tools training",
        "Industry certifications",
        "Expert mentorship",
      ],
    },
    {
      id: 6,
      title: "Digital Marketing",
      category: "Marketing",
      duration: "3 months",
      level: "Beginner",
      price: "₹35,000",
      image: "/course-marketing.jpg",
      description: "Learn modern digital marketing strategies and tools",
      modules: [
        "SEO and SEM",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "Analytics and Reporting",
        "PPC Advertising",
      ],
      features: [
        "Google Ads certification",
        "Real campaign experience",
        "Analytics tools training",
        "Portfolio building",
      ],
    },
  ];

  const corporateServices = [
    {
      icon: "🏢",
      title: "Corporate Training",
      description:
        "Customized training programs for your team's specific needs and technology stack",
    },
    {
      icon: "👥",
      title: "Team Workshops",
      description:
        "Interactive workshops on emerging technologies and best practices",
    },
    {
      icon: "🎯",
      title: "Skill Assessment",
      description:
        "Comprehensive evaluation of your team's current skills and development areas",
    },
    {
      icon: "📈",
      title: "Performance Tracking",
      description:
        "Monitor progress and measure ROI of your training investments",
    },
  ];

  const stats = [
    { number: "5000+", label: "Students Trained" },
    { number: "95%", label: "Job Placement Rate" },
    { number: "200+", label: "Corporate Clients" },
    { number: "50+", label: "Expert Trainers" },
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
              Professional Training
            </h1>
            <p className="font-poppins text-xl text-gradient-black max-w-3xl mx-auto mb-8">
              Empower your career with industry-leading training programs
              designed by experts. From development to data science, we've got
              you covered.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-outfit text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Explore Courses
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section px-[7vw] py-[6vh] bg-gradient-to-r from-gray-900 to-black">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-manrope font-bold text-[4vmin] text-gradient-blue mb-2">
                {stat.number}
              </div>
              <div className="font-poppins text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="section px-[7vw] py-[8vh]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[6vh]"
        >
          <h2 className="font-manrope font-medium text-[6vmin] text-gradient-white mb-[2vh]">
            Our Training Programs
          </h2>
          <p className="font-poppins text-lg text-gray-400 max-w-2xl mx-auto">
            Choose from our comprehensive range of training programs designed to
            advance your career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden hover:from-blue-900/30 hover:to-purple-900/30 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedCourse(program)}
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const nextSibling = target.nextSibling as HTMLElement;
                    target.style.display = "none";
                    if (nextSibling) nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center">
                  <span className="text-6xl">📚</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {program.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-outfit text-xl font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {program.title}
                </h3>
                <p className="font-poppins text-gray-400 text-sm mb-4">
                  {program.description}
                </p>

                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>⏱️ {program.duration}</span>
                  <span>📊 {program.level}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-outfit text-2xl font-bold text-gradient-blue">
                    {program.price}
                  </span>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Corporate Training Section */}
      <section className="section px-[7vw] py-[8vh] bg-gradient-to-br from-gray-900/50 to-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[6vh]"
        >
          <h2 className="font-manrope font-medium text-[6vmin] text-gradient-blue mb-[2vh]">
            Corporate Training Solutions
          </h2>
          <p className="font-poppins text-lg text-gray-400 max-w-2xl mx-auto">
            Customized training solutions to upskill your team and drive
            business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corporateServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center hover:from-blue-900/30 hover:to-purple-900/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-outfit text-lg font-medium text-white mb-3">
                {service.title}
              </h3>
              <p className="font-poppins text-gray-400 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Training Section */}
      <section className="section px-[7vw] py-[8vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-manrope font-medium text-[6vmin] text-gradient-white mb-[3vh]">
              Why Choose Our Training?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-outfit text-lg font-medium text-white mb-1">
                    Industry Expert Trainers
                  </h3>
                  <p className="font-poppins text-gray-400">
                    Learn from professionals with 10+ years of real-world
                    experience
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-outfit text-lg font-medium text-white mb-1">
                    Hands-on Learning
                  </h3>
                  <p className="font-poppins text-gray-400">
                    Work on real projects and build a portfolio that showcases
                    your skills
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-outfit text-lg font-medium text-white mb-1">
                    Job Placement Support
                  </h3>
                  <p className="font-poppins text-gray-400">
                    95% of our graduates get placed within 3 months of
                    completion
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-outfit text-lg font-medium text-white mb-1">
                    Flexible Learning
                  </h3>
                  <p className="font-poppins text-gray-400">
                    Choose from weekday, weekend, or online classes that fit
                    your schedule
                  </p>
                </div>
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
                src="/training-environment.jpg"
                alt="Training Environment"
                className="w-full h-64 object-cover rounded-lg mb-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  const nextSibling = target.nextSibling as HTMLElement;
                  target.style.display = "none";
                  if (nextSibling) nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden w-full h-64 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-lg items-center justify-center">
                <span className="text-6xl">🎓</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="section px-[7vw] py-[8vh] bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-manrope font-medium text-[6vmin] text-gradient-blue mb-[3vh]">
            Start Your Learning Journey
          </h2>
          <p className="font-poppins text-lg text-gray-400 mb-8">
            Ready to advance your career? Join thousands of professionals who
            have transformed their lives through our training programs.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-outfit text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Enroll Now
            </button>
            <span className="font-poppins text-gray-400">or</span>
            <button className="border border-blue-500 text-blue-400 px-8 py-3 rounded-full font-outfit text-lg hover:bg-blue-500/10 transition-all duration-300">
              Download Brochure
            </button>
          </div>
          <div className="mt-8">
            <p className="font-poppins text-sm text-gray-500">
              Questions? Call us at{" "}
              <span className="text-blue-400">+91 1234567891</span> or email{" "}
              <span className="text-blue-400">training@gennextit.com</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 rounded-xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-outfit text-3xl font-medium text-white mb-2">
                  {selectedCourse.title}
                </h3>
                <div className="flex flex-wrap gap-2 text-sm mb-4">
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">
                    {selectedCourse.category}
                  </span>
                  <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full">
                    {selectedCourse.duration}
                  </span>
                  <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full">
                    {selectedCourse.level}
                  </span>
                </div>
                <div className="font-outfit text-3xl font-bold text-gradient-blue">
                  {selectedCourse.price}
                </div>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="text-gray-400 hover:text-white text-3xl"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="font-poppins text-gray-400 mb-6">
                  {selectedCourse.description}
                </p>

                <h4 className="font-outfit text-xl font-medium text-white mb-4">
                  Course Modules:
                </h4>
                <ul className="space-y-3 mb-6">
                  {selectedCourse.modules.map((module, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-blue-400 mt-1">📚</span>
                      <span className="font-poppins text-gray-400">
                        {module}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-outfit text-xl font-medium text-white mb-4">
                  What You Get:
                </h4>
                <ul className="space-y-3 mb-6">
                  {selectedCourse.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="font-poppins text-gray-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg p-6">
                  <h5 className="font-outfit text-lg font-medium text-white mb-3">
                    Enrollment Benefits:
                  </h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-400">•</span>
                      <span className="text-gray-400">
                        Lifetime access to course materials
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-400">•</span>
                      <span className="text-gray-400">
                        1-on-1 mentorship sessions
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-400">•</span>
                      <span className="text-gray-400">
                        Interview preparation support
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-400">•</span>
                      <span className="text-gray-400">
                        Alumni network access
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-outfit text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Enroll Now
              </button>
              <button className="border border-blue-500 text-blue-400 px-8 py-3 rounded-full font-outfit text-lg hover:bg-blue-500/10 transition-all duration-300">
                Download Syllabus
              </button>
              <button
                onClick={() => setSelectedCourse(null)}
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

export default TrainingPage;
