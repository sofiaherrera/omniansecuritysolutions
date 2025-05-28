'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import ScrollToTop from '@/components/scroll-to-top'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
}

const fadeInUp = {
  hidden: { 
    opacity: 0,
    y: 60
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const SectionDivider = () => (
  <div className="relative h-32 overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      <div className="absolute">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-12 h-12"
        >
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary-500/20">
            <path d="M16 0L21.2132 4.78678L28.2843 4.78678L28.2843 11.8579L33.0711 17.0711L28.2843 22.2843L28.2843 29.3553L21.2132 29.3553L16 34.1421L10.7868 29.3553L3.71573 29.3553L3.71573 22.2843L-1.02722e-06 17.0711L3.71573 11.8579L3.71573 4.78678L10.7868 4.78678L16 0Z" fill="currentColor"/>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  </div>
);

const ParticleBg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [industriesRef, industriesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [caseStudiesRef, caseStudiesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
      {/* Navigation */}
      <header className="fixed w-full z-50 bg-dark-100/80 backdrop-blur-sm border-b border-zinc-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="h-8 w-auto relative">
            <Image
              src="/oss-logo.svg"
              alt="Omnian Security Solutions Logo"
              width={160}
              height={32}
              className="text-white"
            />
          </div>
          <div className="flex space-x-8">
            <a href="#about" className="text-zinc-300 hover:text-white transition-colors">About</a>
            <a href="#services" className="text-zinc-300 hover:text-white transition-colors">Services</a>
            <a href="#industries" className="text-zinc-300 hover:text-white transition-colors">Industries</a>
            <a href="#case-studies" className="text-zinc-300 hover:text-white transition-colors">Case Studies</a>
            <a href="#contact" className="text-zinc-300 hover:text-white transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center pt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-dark-100/95 z-0" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-300">
                Elite Cybersecurity & Privacy Expertise.<br />Built for What's Next.
              </h1>
              <p className="text-xl sm:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto">
                Omnian Security Solutions is the partner of choice for visionary tech companies, automakers, and startups preparing for IPO. We secure your future—at every layer.
              </p>
              <a
                href="#contact"
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="py-20 bg-dark-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 text-white">
                  Led by Experience.<br />Driven by Mission.
                </h2>
                <p className="text-lg text-zinc-300">
                  At Omnian Security Solutions, we've sat in the CISO and CPO seat—at IPO-stage startups and global enterprises alike. We understand what's at stake. Our mission is to empower companies with practical, strategic cybersecurity and privacy guidance. We bring legal, operational, and technical clarity to complex risk environments.
                </p>
              </div>
              <div className="relative h-96">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-primary-900/20 rounded-2xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-48 h-48 rounded-full bg-gradient-to-tr from-primary-600/20 to-primary-400/20 blur-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" ref={servicesRef} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Our Expertise</h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Cybersecurity by Design",
                  description: "Secure infrastructure, systems, and software from the ground up—baking in security from day one.",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  )
                },
                {
                  title: "Privacy & Regulatory Compliance",
                  description: "Navigate laws like GDPR, CCPA, AI laws (such as DORA and EU AI Act) and industry frameworks with confidence.",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  )
                },
                {
                  title: "Executive & Board Advisory",
                  description: "Whether you're prepping for SOC 2, an IPO, or a breach response, we help you speak the language of business and risk.",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  )
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-dark-200 p-8 rounded-xl hover:bg-dark-300 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="h-12 w-12 bg-primary-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-800/30 transition-colors duration-300">
                    <svg className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {service.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-4">{service.title}</h3>
                  <p className="text-zinc-300">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Industries Section */}
        <section id="industries" ref={industriesRef} className="py-20 bg-dark-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-zinc-300 mb-12 max-w-3xl mx-auto">
                From emerging startups to established enterprises, we bring deep industry expertise to every engagement.
              </p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Crypto & DeFi",
                  description: "Secure your blockchain infrastructure, smart contracts, and DeFi protocols. We help you navigate regulatory compliance while maintaining innovation speed.",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  )
                },
                {
                  title: "Automotive & IoT",
                  description: "Protect connected vehicles and IoT ecosystems from emerging threats. Our expertise covers V2X security, OTA updates, and supply chain integrity.",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  )
                },
                {
                  title: "FinTech",
                  description: "Ensure compliance with financial regulations while protecting sensitive customer data. We specialize in PCI DSS, SOC 2, and open banking security.",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  )
                }
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-dark-300 p-8 rounded-xl hover:bg-dark-400 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="h-12 w-12 bg-primary-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-800/30 transition-colors duration-300">
                    <svg className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {industry.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-4">{industry.title}</h3>
                  <p className="text-zinc-300">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" ref={caseStudiesRef} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Success Stories</h2>
              <p className="text-lg text-zinc-300 mb-12 max-w-3xl mx-auto">
                Real results from our partnerships with industry leaders.
              </p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
              {[
                {
                  title: "Securing a Leading DeFi Protocol",
                  metrics: ["$2B+ TVL Protected", "0 Security Incidents", "48hr Audit Turnaround"],
                  description: "Implemented comprehensive security measures for a major DeFi protocol, including smart contract audits, incident response planning, and ongoing security monitoring.",
                },
                {
                  title: "Automotive OEM Security Program",
                  metrics: ["2M+ Vehicles Secured", "ISO 21434 Compliance", "5G V2X Security"],
                  description: "Developed and implemented a complete vehicle security program for a global automotive OEM, covering connected car services, OTA updates, and supply chain security.",
                }
              ].map((study, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-dark-200 p-8 rounded-xl hover:bg-dark-300 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-display font-bold mb-4">{study.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-6">
                    {study.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-900/20 text-primary-400 rounded-full text-sm font-medium"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                  <p className="text-zinc-300">
                    {study.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef} className="py-20 bg-dark-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-zinc-300 mb-8">
                Reach out to discuss your security and compliance needs.
              </p>
            </motion.div>
            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              action="mailto:info@omniansecuritysolutions.com"
              method="POST"
              encType="text/plain"
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-dark-300 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary-500 text-white placeholder-zinc-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-dark-300 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary-500 text-white placeholder-zinc-500"
                />
              </div>
              <div>
                <textarea
                  name="Message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-300 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary-500 text-white placeholder-zinc-500 resize-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark-100 py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-zinc-400">
                © {new Date().getFullYear()} Omnian Security Solutions. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="mailto:info@omniansecuritysolutions.com"
                className="text-sm text-zinc-400 hover:text-primary-400 transition-colors duration-200"
              >
                info@omniansecuritysolutions.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
} 