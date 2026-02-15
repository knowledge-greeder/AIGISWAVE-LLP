"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Radar, Phone, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-indigo-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <img
            src="logo.png"
            alt="AIGISWAVE LLP Logo"
            className="w-40 h-40 mb-6 drop-shadow-2xl"
          />
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide">AIGISWAVE LLP</h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300"
        >
          Next‑generation cybersecurity solutions protecting your digital world with intelligence, precision, and trust.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 transition shadow-2xl"
        >
          Secure Your Business
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="absolute -z-10 w-[500px] h-[500px] rounded-full border border-indigo-500/20"
        />
      </section>

      {/* Services */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold text-center mb-16"
        >
          Our VAPT & Cybersecurity Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[{ 
            icon: ShieldCheck,
            title: "Mobile Application VAPT",
            desc: "Comprehensive vulnerability assessment and penetration testing for Android & iOS apps covering OWASP Mobile Top 10."
          },{
            icon: ShieldCheck,
            title: "Web Application VAPT",
            desc: "In-depth security testing of web applications to identify vulnerabilities, misconfigurations, and logic flaws."
          },{
            icon: Lock,
            title: "API Security Testing",
            desc: "API VAPT covering authentication, authorization, rate limiting, and OWASP API Top 10 risks."
          },{
            icon: Radar,
            title: "Server & Infrastructure VAPT",
            desc: "Penetration testing of servers, networks, firewalls, and cloud infrastructure to uncover critical risks."
          },{
            icon: Lock,
            title: "Cloud Security Assessment",
            desc: "Security posture assessment for AWS, Azure, and GCP including IAM, storage, and network configurations."
          },{
            icon: Radar,
            title: "Continuous Security Monitoring",
            desc: "Ongoing monitoring, vulnerability scanning, and compliance-ready security reporting."
          }].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-8 shadow-xl hover:scale-105 transition"
            >
              <service.icon className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-28 px-6 bg-gradient-to-br from-black via-indigo-950 to-black">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-center mb-20"
        >
          How We Perform VAPT
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8 text-center">
          {[{
            step: "01",
            title: "Reconnaissance",
            desc: "Asset discovery, attack surface mapping, and intelligence gathering."
          },{
            step: "02",
            title: "Vulnerability Analysis",
            desc: "Manual + automated scanning to identify security weaknesses."
          },{
            step: "03",
            title: "Exploitation",
            desc: "Real-world attack simulation to validate critical vulnerabilities."
          },{
            step: "04",
            title: "Risk Assessment",
            desc: "Impact analysis with CVSS scoring and business risk context."
          },{
            step: "05",
            title: "Reporting & Re-test",
            desc: "Detailed VAPT report, remediation guidance, and validation testing."
          }].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-white/5 backdrop-blur p-8 rounded-2xl shadow-xl"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center text-xl font-bold">
                {item.step}
              </div>
              <h3 className="mt-10 text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-black/40">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl font-semibold mb-6">Why AIGISWAVE?</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            AIGISWAVE LLP is a trusted cybersecurity partner delivering end-to-end protection across networks, cloud, applications, and data. We combine automation, intelligence, and human expertise to safeguard businesses against modern cyber threats.
          </p>
        </motion.div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-center mb-12"
        >
          Contact Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-2xl shadow-lg"
          >
            <Phone className="w-8 h-8 text-indigo-400 mb-4" />
            <p className="text-xl font-semibold">Sanjeev Sarkar</p>
            <p className="text-lg text-gray-300">+91 6232695054</p>
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-2xl shadow-lg"
          >
            <MapPin className="w-8 h-8 text-indigo-400 mb-4" />
            <p className="text-gray-300">
              At Post Watephal Tal Paranda,<br />
              Dist Dharashiv – 413505
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-400 bg-black/60">
        © {new Date().getFullYear()} AIGISWAVE LLP. All rights reserved.
      </footer>
    </main>
  );
}
