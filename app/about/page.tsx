"use client";
import { motion } from "framer-motion";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Amit Sharma",
      position: "CEO & Founder",
      experience: "20+ years",
      expertise: "IT Strategy & Leadership",
      image: "/team-amit.jpg",
    },
    {
      name: "Priya Gupta",
      position: "CTO",
      experience: "15+ years",
      expertise: "Cloud Architecture & DevOps",
      image: "/team-priya.jpg",
    },
    {
      name: "Rajesh Kumar",
      position: "Head of Development",
      experience: "12+ years",
      expertise: "Full Stack Development",
      image: "/team-rajesh.jpg",
    },
    {
      name: "Sanya Malik",
      position: "Training Director",
      experience: "10+ years",
      expertise: "Corporate Training & Development",
      image: "/team-sanya.jpg",
    },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Innovation",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions",
    },
    {
      icon: "🤝",
      title: "Partnership",
      description:
        "We work closely with clients to understand their unique needs",
    },
    {
      icon: "🔒",
      title: "Trust",
      description:
        "We build lasting relationships through transparency and reliability",
    },
    {
      icon: "📈",
      title: "Excellence",
      description: "We strive for perfection in every project we undertake",
    },
  ];

  const milestones = [
    { year: "2003", event: "Founded GennextIT in Noida" },
    { year: "2008", event: "Expanded to 50+ employees" },
    { year: "2012", event: "Opened Dubai office" },
    { year: "2016", event: "Launched training division" },
    { year: "2020", event: "Reached 100+ corporate clients" },
    { year: "2024", event: "5000+ professionals trained" },
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
              About GennextIT
            </h1>
            <p className="font-poppins text-xl text-gradient-black max-w-3xl mx-auto">
              Since 2003, we've been empowering businesses with innovative IT
              solutions, helping them achieve their digital transformation goals
              and stay competitive in today's market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section px-[7vw] py-[8vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-8"
          >
            <h2 className="font-manrope font-medium text-[4vmin] text-gradient-blue mb-6">
              Our Mission
            </h2>
            <p className="font-poppins text-lg text-gray-300 leading-relaxed">
              To provide innovative IT solutions that drive business growth and
              digital transformation. We are committed to delivering value-added
              services that help our clients achieve their strategic objectives
              through technology excellence and domain expertise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8"
          >
            <h2 className="font-manrope font-medium text-[4vmin] text-gradient-white mb-6">
              Our Vision
            </h2>
            <p className="font-poppins text-lg text-gray-300 leading-relaxed">
              To be the leading next-generation IT services provider, recognized
              for innovation, quality, and customer satisfaction. We envision a
              future where businesses seamlessly leverage technology to create
              value and drive sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section px-[7vw] py-[8vh] bg-gradient-to-br from-gray-900/50 to-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[6vh]"
        >
          <h2 className="font-manrope font-medium text-[6vmin] text-gradient-blue mb-[2vh]">
            Our Journey
          </h2>
          <p className="font-poppins text-lg text-gray-400 max-w-2xl mx-auto">
            From a small startup to a leading IT services company - here's our
            story
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center mb-8 relative"
            >
              <div className="flex-shrink-0 w-20 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-full font-outfit font-medium">
                  {milestone.year}
                </div>
              </div>
              <div className="flex-1 ml-8">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4">
                  <p className="font-poppins text-gray-300">
                    {milestone.event}
                  </p>
                </div>
              </div>
              {index < milestones.length - 1 && (
                <div className="absolute left-10 top-12 w-0.5 h-8 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="section px-[7vw] py-[8vh]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[6vh]"
        >
          <h2 className="font-manrope font-medium text-[6vmin] text-gradient-white mb-[2vh]">
            Our Values
          </h2>
          <p className="font-poppins text-lg text-gray-400 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-center hover:from-blue-900/30 hover:to-purple-900/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="font-outfit text-xl font-medium text-white mb-3">
                {value.title}
              </h3>
              <p className="font-poppins text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section px-[7vw] py-[8vh] bg-gradient-to-br from-gray-900/50 to-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[6vh]"
        >
          <h2 className="font-manrope font-medium text-[6vmin] text-gradient-blue mb-[2vh]">
            Leadership Team
          </h2>
          <p className="font-poppins text-lg text-gray-400 max-w-2xl mx-auto">
            Meet the experienced professionals driving our success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center hover:from-blue-900/30 hover:to-purple-900/30 transition-all duration-300"
            >
              <div className="relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const nextSibling = target.nextSibling as HTMLElement;
                    target.style.display = "none";
                    if (nextSibling) nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-blue-600 to-purple-600 items-center justify-center">
                  <span className="text-white text-2xl font-outfit font-medium">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>
              <h3 className="font-outfit text-lg font-medium text-white mb-1">
                {member.name}
              </h3>
              <p className="font-poppins text-blue-400 text-sm mb-2">
                {member.position}
              </p>
              <p className="font-poppins text-gray-400 text-xs mb-1">
                {member.experience}
              </p>
              <p className="font-poppins text-gray-500 text-xs">
                {member.expertise}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Presence */}
      <section className="section px-[7vw] py-[8vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-manrope font-medium text-[6vmin] text-gradient-white mb-[3vh]">
              Global Presence
            </h2>
            <p className="font-poppins text-lg text-gray-400 mb-6">
              With offices in India and Dubai, we serve clients across the
              globe, providing 24/7 support and leveraging our diverse talent
              pool to deliver exceptional results.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🇮🇳</span>
                </div>
                <div>
                  <h3 className="font-outfit text-lg font-medium text-white mb-1">
                    India Office
                  </h3>
                  <p className="font-poppins text-gray-400">
                    First Floor (C112-13), Building H-59, Sector 63, Noida
                    (UP)-201305
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🇦🇪</span>
                </div>
                <div>
                  <h3 className="font-outfit text-lg font-medium text-white mb-1">
                    Dubai Office
                  </h3>
                  <p className="font-poppins text-gray-400">
                    Trois Con International FZC SAIF Office, R3-07/A, PO Box
                    8692 Sharjah UAE
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
                src="/global-presence.jpg"
                alt="Global Presence"
                className="w-full h-64 object-cover rounded-lg mb-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  const nextSibling = target.nextSibling as HTMLElement;
                  target.style.display = "none";
                  if (nextSibling) nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden w-full h-64 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-lg items-center justify-center">
                <span className="text-6xl">🌍</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section px-[7vw] py-[8vh] bg-gradient-to-br from-gray-900/50 to-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[6vh]"
        >
          <h2 className="font-manrope font-medium text-[6vmin] text-gradient-blue mb-[2vh]">
            Awards & Recognition
          </h2>
          <p className="font-poppins text-lg text-gray-400 max-w-2xl mx-auto">
            Recognition for our commitment to excellence and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-outfit text-lg font-medium text-white mb-2">
              ISO 9001:2015
            </h3>
            <p className="font-poppins text-sm text-gray-400">
              Certified Quality Management
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-4xl mb-3">⭐</div>
            <h3 className="font-outfit text-lg font-medium text-white mb-2">
              Top IT Employer
            </h3>
            <p className="font-poppins text-sm text-gray-400">
              Best Workplace 2023
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-4xl mb-3">🥇</div>
            <h3 className="font-outfit text-lg font-medium text-white mb-2">
              Excellence Award
            </h3>
            <p className="font-poppins text-sm text-gray-400">
              Outstanding Service 2024
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="text-4xl mb-3">💎</div>
            <h3 className="font-outfit text-lg font-medium text-white mb-2">
              Innovation Leader
            </h3>
            <p className="font-poppins text-sm text-gray-400">
              Tech Innovation 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="section px-[7vw] py-[8vh] bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-manrope font-medium text-[6vmin] text-gradient-blue mb-[3vh]">
            Be Part of Our Story
          </h2>
          <p className="font-poppins text-lg text-gray-400 mb-8">
            Ready to contribute to the next chapter of GennextIT? Join our team
            of innovators and help us shape the future of technology solutions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-outfit text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Join Our Team
            </button>
            <span className="font-poppins text-gray-400">or</span>
            <button className="border border-blue-500 text-blue-400 px-8 py-3 rounded-full font-outfit text-lg hover:bg-blue-500/10 transition-all duration-300">
              Partner With Us
            </button>
          </div>
          <div className="mt-8">
            <p className="font-poppins text-sm text-gray-500">
              Questions? Contact us at{" "}
              <span className="text-blue-400">info@gennextit.com</span> or call{" "}
              <span className="text-blue-400">+91 1234567891</span>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
