import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../constants";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const EMAILJS_CONFIG = {
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
    TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
  };
  const isEmailConfigured =
    EMAILJS_CONFIG.SERVICE_ID &&
    EMAILJS_CONFIG.TEMPLATE_ID &&
    EMAILJS_CONFIG.PUBLIC_KEY &&
    !EMAILJS_CONFIG.SERVICE_ID.includes("your_service_id") &&
    !EMAILJS_CONFIG.TEMPLATE_ID.includes("your_template_id") &&
    !EMAILJS_CONFIG.PUBLIC_KEY.includes("your_public_key");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailConfigured) {
      // No EmailJS credentials set yet — fail gracefully with a clear
      // message instead of attempting a request that's guaranteed to fail.
      setSubmitStatus("not-configured");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: personalInfo.name,
        reply_to: formData.email,
        date: new Date().toLocaleDateString(),
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      Icon: FaEnvelope,
      title: "Email",
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      color: "from-blue-500 to-cyan-500",
    },
    {
      Icon: FaPhoneAlt,
      title: "Phone",
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
      color: "from-green-500 to-emerald-500",
    },
    {
      Icon: FaMapMarkerAlt,
      title: "Location",
      value: personalInfo.location,
      link: "#",
      color: "from-purple-500 to-pink-500",
    },
    {
      Icon: FaLinkedin,
      title: "LinkedIn",
      value: personalInfo.linkedin.replace(/^https?:\/\//, ""),
      link: personalInfo.linkedin,
      color: "from-orange-500 to-red-500",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      Icon: FaGithub,
      url: personalInfo.github,
      color: "hover:bg-gray-900",
    },
    {
      name: "LinkedIn",
      Icon: FaLinkedin,
      url: personalInfo.linkedin,
      color: "hover:bg-blue-600",
    },
    {
      name: "Facebook",
      Icon: FaFacebook,
      url: personalInfo.facebook,
      color: "hover:bg-sky-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900/30 relative overflow-hidden border-b border-gray-100 dark:border-gray-800/40"
    >
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            I'm always open to discussing new opportunities, collaborations,
            and interesting projects
          </p>
        </motion.div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-6 p-4 bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-400 rounded-xl text-center font-medium"
          >
            ✅ Thank you for your message! I'll get back to you soon.
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400 rounded-xl text-center font-medium"
          >
            ❌ Sorry, there was an error sending your message. Please try
            again or email me directly.
          </motion.div>
        )}

        {submitStatus === "not-configured" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-6 p-4 bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-400 rounded-xl text-center font-medium"
          >
            ✉️ The contact form isn't connected yet — please reach out
            directly via{" "}
            <a href={`mailto:${personalInfo.email}`} className="underline font-bold text-amber-900 dark:text-amber-300">
              email
            </a>{" "}
            in the meantime.
          </motion.div>
        )}

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-950 dark:text-white">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-medium">
                Whether you have a project in mind, want to collaborate, or
                just want to say hello, I'd love to hear from you. Feel free
                to reach out through any of the following channels.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 6, scale: 1.01 }}
                  className="flex items-center gap-4 p-4 bg-white/40 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-gray-250/50 dark:border-gray-800/80 hover:border-blue-500/20 dark:hover:border-cyan-500/20 transition-all duration-300 group cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300`}
                  >
                    <info.Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {info.title}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 break-all text-sm font-medium mt-0.5">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <h4 className="text-xl font-bold mb-4 text-gray-950 dark:text-white">
                Follow Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    aria-label={social.name}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-12 h-12 bg-white/40 dark:bg-gray-800/30 border border-gray-250/50 dark:border-gray-800/80 rounded-2xl flex items-center justify-center text-lg ${social.color} text-gray-600 dark:text-gray-300 hover:text-white transition-all duration-300 shadow-sm backdrop-blur-sm`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/40 dark:bg-gray-800/30 border border-gray-250/50 dark:border-gray-800/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-md"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-950 dark:text-white">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-1 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:border-transparent bg-white/70 dark:bg-gray-900/50 text-gray-950 dark:text-white transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-600 font-medium"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-1 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:border-transparent bg-white/70 dark:bg-gray-900/50 text-gray-955 dark:text-white transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-600 font-medium"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-1 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:border-transparent bg-white/70 dark:bg-gray-900/50 text-gray-955 dark:text-white transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-600 font-medium"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3.5 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-1 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:border-transparent bg-white/70 dark:bg-gray-900/50 text-gray-955 dark:text-white transition-all duration-300 resize-vertical placeholder-gray-400 dark:placeholder-gray-600 font-medium"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold shadow-md transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 dark:bg-gray-800 cursor-not-allowed text-gray-200 dark:text-gray-400"
                    : "bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 border border-blue-400/20 dark:border-cyan-400/10 hover:shadow-indigo-500/25 hover:shadow-lg text-white"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
