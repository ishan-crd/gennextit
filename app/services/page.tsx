"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "IT Consulting",
      category: "Strategy",
      icon: "🎯",
      shortDesc: "Strategic IT guidance to transform your business",
      description:
        "Our expert consultants help organizations navigate complex technology landscapes, optimize IT infrastructure, and align technology strategies with business objectives.",
      features: [
        "Digital Transformation Strategy",
        "Technology Assessment & Auditing",
        "IT Governance & Compliance",
        "Cloud Migration Planning",
        "Cybersecurity Strategy",
        "IT Cost Optimization",
      ],
      benefits: [
        "Reduced operational costs by 30-40%",
        "Improved system efficiency and performance",
        "Enhanced security posture",
        "Better alignment with business goals",
      ],
      process: [
        "Current State Assessment",
        "Gap Analysis & Roadmap Creation",
        "Implementation Planning",
        "Execution & Monitoring",
        "Continuous Optimization",
      ],
    },
    {
      id: 2,
      title: "Web Development",
      category: "Development",
      icon: "💻",
      shortDesc: "Modern, scalable web applications",
      description:
        "We build responsive, high-performance web applications using cutting-edge technologies like React, Node.js, and cloud platforms to deliver exceptional user experiences.",
      features: [
        "Custom Web Applications",
        "E-commerce Platforms",
        "Progressive Web Apps (PWA)",
        "API Development & Integration",
        "Content Management Systems",
        "Performance Optimization",
      ],
      benefits: [
        "50% faster loading times",
        "Mobile-first responsive design",
        "SEO optimized architecture",
        "Scalable cloud infrastructure",
      ],
      process: [
        "Requirements Gathering",
        "UI/UX Design & Prototyping",
        "Development & Testing",
        "Deployment & Launch",
        "Maintenance & Support",
      ],
    },
    {
      id: 3,
      title: "Mobile App Development",
      category: "Development",
      icon: "📱",
      shortDesc: "Native and cross-platform mobile solutions",
      description:
        "Create engaging mobile experiences with our native iOS, Android, and cross-platform app development services using React Native, Flutter, and Swift/Kotlin.",
      features: [
        "Native iOS & Android Apps",
        "Cross-platform Development",
        "UI/UX Design",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
      ],
      benefits: [
        "Reach wider audience across platforms",
        "Faster time-to-market",
        "Cost-effective development",
        "Consistent user experience",
      ],
      process: [
        "Concept & Strategy",
        "Design & Wireframing",
        "Development & Testing",
        "App Store Submission",
        "Launch & Marketing Support",
      ],
    },
    {
      id: 4,
      title: "Cloud Solutions",
      category: "Infrastructure",
      icon: "☁️",
      shortDesc: "Scalable cloud infrastructure and migration",
      description:
        "Leverage the power of cloud computing with our comprehensive cloud services including migration, architecture design, and managed cloud solutions on AWS, Azure, and GCP.",
      features: [
        "Cloud Migration & Strategy",
        "Infrastructure as Code",
        "DevOps & CI/CD Pipelines",
        "Monitoring & Analytics",
        "Backup & Disaster Recovery",
        "Cost Optimization",
      ],
      benefits: [
        "99.9% uptime guarantee",
        "Reduced infrastructure costs",
        "Auto-scaling capabilities",
        "Enhanced security & compliance",
      ],
      process: [
        "Cloud Readiness Assessment",
        "Migration Strategy & Planning",
        "Infrastructure Setup",
        "Application Migration",
        "Optimization & Monitoring",
      ],
    },
    {
      id: 5,
      title: "Data Analytics & AI",
      category: "Analytics",
      icon: "📊",
      shortDesc: "Transform data into actionable insights",
      description:
        "Unlock the power of your data with our advanced analytics and AI solutions. From business intelligence to machine learning models, we help you make data-driven decisions.",
      features: [
        "Business Intelligence Dashboards",
        "Predictive Analytics",
        "Machine Learning Models",
        "Data Warehouse Solutions",
        "Real-time Analytics",
        "AI Chatbots & Automation",
      ],
      benefits: [
        "Improved decision making",
        "Increased operational efficiency",
        "Better customer insights",
        "Competitive advantage",
      ],
      process: [
        "Data Assessment & Strategy",
        "Data Collection & Preparation",
        "Model Development & Training",
        "Implementation & Integration",
        "Monitoring & Optimization",
      ],
    },
    {
      id: 6,
      title: "Cybersecurity Services",
      category: "Security",
      icon: "🔒",
      shortDesc: "Comprehensive security solutions",
      description:
        "Protect your business with our end-to-end cybersecurity services including security assessments, implementation, monitoring, and incident response.",
      features: [
        "Security Assessment & Auditing",
        "Penetration Testing",
        "Security Architecture Design",
        "Compliance Management",
        "Incident Response",
        "Security Training",
      ],
      benefits: [
        "Reduced security risks",
        "Regulatory compliance",
        "Enhanced data protection",
        "Business continuity assurance",
      ],
      process: [
        "Security Assessment",
        "Vulnerability Analysis",
        "Security Implementation",
        "Monitoring & Alerting",
        "Continuous Improvement",
      ],
    },
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", clients: "50+" },
    { name: "Finance", icon: "🏦", clients: "40+" },
    { name: "E-commerce", icon: "🛒", clients: "60+" },
    { name: "Education", icon: "🎓", clients: "30+" },
    { name: "Manufacturing", icon: "🏭", clients: "25+" },
    { name: "Real Estate", icon: "🏢", clients: "35+" },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CTO, TechVision Solutions",
      company: "TechVision",
      text: "GennextIT transformed our legacy systems into a modern, cloud-based infrastructure. Their expertise and dedication were exceptional.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      position: "Product Manager, InnovateCorp",
      company: "InnovateCorp",
      text: "The mobile app they developed exceeded our expectations. The user engagement increased by 150% within the first month.",
      rating: 5,
    },
    {
      name: "David Wilson",
      position: "CEO, GlobalTech",
      company: "GlobalTech",
      text: "Their cybersecurity assessment revealed critical vulnerabilities we weren't aware of. They helped us secure our entire infrastructure.",
      rating: 5,
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
              Our Services
            </h1>
            <p className="font-poppins text-xl text-gradient-black max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions to drive your business forward. From
              consulting to development, we provide end-to-end technology
              services tailored to your needs.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-outfit text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Get Free Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section px-[7vw] py-[8vh]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[6vh]"
        >
          <h2 className="font-manrope font-medium text-[6vmin] text-gradient-white mb-[2vh]">
            What We Offer
          </h2>
          <p className="font-poppins text-lg text-gray-400 max-w-2xl mx-auto">
            Discover our comprehensive range of IT services designed to
            accelerate your digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 hover:from-blue-900/30 hover:to-purple-900/30 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedService(service)}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <div className="mb-4">
                <span className="bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded-full">
                  {service.category}
                </span>
              </div>
              <h3 className="font-outfit text-xl font-medium text-white mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="font-poppins text-gray-400 mb-6">
                {service.shortDesc}
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section px-[7vw] py-[8vh] bg-gradient-to-br from-gray-900/50 to-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[6vh]"
        >
          <h2 className="font-manrope font-medium text-[6vmin] text-gradient-blue mb-[2vh]">
            Industries We Serve
          </h2>
          <p className="font-poppins text-lg text-gray-400 max-w-2xl mx-auto">
            We have extensive experience working across diverse industries
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center hover:from-blue-900/30 hover:to-purple-900/30 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{industry.icon}</div>
              <h3 className="font-outfit text-sm font-medium text-white mb-2">
                {industry.name}
              </h3>
              <span className="text-xs text-blue-400">
                {industry.clients} clients
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section px-[7vw] py-[8vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-manrope font-medium text-[6vmin] text-gradient-white mb-[3vh]">
              Why Choose GennextIT?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">20+</span>
                </div>
                <div>
                  <h3 className="font-outfit text-lg font-medium text-white mb-1">
                    Years of Experience
                  </h3>
                  <p className="font-poppins text-gray-400">
                    Over two decades of delivering exceptional IT solutions
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">100+</span>
                </div>
                <div>
                  <h3 className="font-outfit text-lg font-medium text-white mb-1">
                    Expert Team Members
                  </h3>
                  <p className="font-poppins text-gray-400">
                    Skilled professionals with deep technical expertise
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">24/7</span>
                </div>
                <div>
                  <h3 className="font-outfit text-lg font-medium text-white mb-1">
                    Support Available
                  </h3>
                  <p className="font-poppins text-gray-400">
                    Round-the-clock support for all our services
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">98%</span>
                </div>
                <div>
                  <h3 className="font-outfit text-lg font-medium text-white mb-1">
                    Client Satisfaction Rate
                  </h3>
                  <p className="font-poppins text-gray-400">
                    Consistently exceeding client expectations
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
                src="/team-working.jpg"
                alt="Our Team Working"
                className="w-full h-64 object-cover rounded-lg mb-4"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden w-full h-64 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-lg items-center justify-center">
                <span className="text-6xl">💼</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section px-[7vw] py-[8vh] bg-gradient-to-br from-gray-900/50 to-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[6vh]"
        >
          <h2 className="font-manrope font-medium text-[6vmin] text-gradient-blue mb-[2vh]">
            What Our Clients Say
          </h2>
          <p className="font-poppins text-lg text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="font-poppins text-gray-300 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-outfit font-medium">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="font-outfit text-white font-medium">
                    {testimonial.name}
                  </div>
                  <div className="font-poppins text-sm text-gray-400">
                    {testimonial.position}
                  </div>
                  <div className="font-poppins text-xs text-blue-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
            Ready to Get Started?
          </h2>
          <p className="font-poppins text-lg text-gray-400 mb-8">
            Let's discuss your project and see how we can help transform your
            business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-outfit text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Start Your Project
            </button>
            <span className="font-poppins text-gray-400">or</span>
            <button className="border border-blue-500 text-blue-400 px-8 py-3 rounded-full font-outfit text-lg hover:bg-blue-500/10 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-blue-400">📞</span>
              <span className="text-gray-400">+91 1234567891</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-blue-400">✉️</span>
              <span className="text-gray-400">services@gennextit.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-blue-400">📍</span>
              <span className="text-gray-400">Noida, India</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 rounded-xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{selectedService.icon}</div>
                <div>
                  <h3 className="font-outfit text-3xl font-medium text-white mb-2">
                    {selectedService.title}
                  </h3>
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {selectedService.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-white text-3xl"
              >
                ×
              </button>
            </div>

            <div className="mb-6">
              <p className="font-poppins text-gray-400 text-lg">
                {selectedService.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="font-outfit text-xl font-medium text-white mb-4">
                  Key Features:
                </h4>
                <ul className="space-y-3">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-blue-400 mt-1">🔹</span>
                      <span className="font-poppins text-gray-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-outfit text-xl font-medium text-white mb-4">
                  Benefits:
                </h4>
                <ul className="space-y-3">
                  {selectedService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="font-poppins text-gray-400">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-outfit text-xl font-medium text-white mb-4">
                  Our Process:
                </h4>
                <ul className="space-y-3">
                  {selectedService.process.map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-purple-400 mt-1 text-sm font-bold">
                        {index + 1}.
                      </span>
                      <span className="font-poppins text-gray-400">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg p-6">
              <h5 className="font-outfit text-lg font-medium text-white mb-3">
                Ready to get started with {selectedService.title}?
              </h5>
              <p className="font-poppins text-gray-400 mb-4">
                Contact our experts today for a free consultation and see how we
                can help transform your business.
              </p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-outfit hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Get Free Quote
                </button>
                <button className="border border-blue-500 text-blue-400 px-6 py-3 rounded-full font-outfit hover:bg-blue-500/10 transition-all duration-300">
                  Schedule Call
                </button>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={() => setSelectedService(null)}
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

export default ServicesPage;
