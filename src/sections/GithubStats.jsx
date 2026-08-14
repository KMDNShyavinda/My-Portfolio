import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";
import { personalInfo } from "../constants";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaUsers,
  FaBook,
  FaExternalLinkAlt,
  FaChartLine,
} from "react-icons/fa";

const GITHUB_USERNAME = "KMDNShyavinda";

const GithubStats = () => {
  const [stats, setStats] = useState({
    repos: 16,
    followers: 6,
    following: 14,
    stars: 1,
    languages: ["JavaScript", "TypeScript", "Python", "HTML/CSS"],
    loading: true,
  });

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const userRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        );
        const userData = await userRes.json();

        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`
        );
        const reposData = await reposRes.json();

        let totalStars = 0;
        const langMap = {};

        if (Array.isArray(reposData)) {
          reposData.forEach((repo) => {
            totalStars += repo.stargazers_count || 0;
            if (repo.language) {
              langMap[repo.language] = (langMap[repo.language] || 0) + 1;
            }
          });
        }

        const sortedLangs = Object.keys(langMap).sort(
          (a, b) => langMap[b] - langMap[a]
        );

        setStats({
          repos: userData.public_repos || 16,
          followers: userData.followers || 6,
          following: userData.following || 14,
          stars: totalStars || 1,
          languages: sortedLangs.length
            ? sortedLangs.slice(0, 5)
            : ["JavaScript", "TypeScript", "Python", "HTML/CSS"],
          loading: false,
        });
      } catch {
        setStats((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchGithubData();
  }, []);

  const statItems = [
    {
      label: "Public Repositories",
      value: stats.repos,
      icon: FaBook,
      color: "from-blue-500 to-indigo-600",
    },
    {
      label: "Total Stars Earned",
      value: stats.stars,
      icon: FaStar,
      color: "from-amber-400 to-yellow-500",
    },
    {
      label: "GitHub Followers",
      value: stats.followers,
      icon: FaUsers,
      color: "from-teal-400 to-emerald-500",
    },
    {
      label: "Following Developers",
      value: stats.following,
      icon: FaCodeBranch,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="github"
      className="py-20 bg-gray-50/50 dark:bg-gray-900/40 relative overflow-hidden border-b border-gray-100 dark:border-gray-800/40"
    >
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl mb-4">
            <FaGithub className="text-3xl bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent" />
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Live GitHub Activity & Stats
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Real-time insights into my open-source contributions, repositories, and coding activity on GitHub
          </p>
        </motion.div>

        {/* Dynamic Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {statItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/40 dark:bg-gray-800/30 backdrop-blur-sm p-6 rounded-3xl border border-gray-200/50 dark:border-gray-800/80 shadow-md hover:border-blue-500/20 dark:hover:border-cyan-500/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="text-xl" />
                  </div>
                  <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    Live
                  </span>
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-gray-950 dark:text-white mb-1">
                  {stats.loading ? (
                    <span className="animate-pulse">...</span>
                  ) : (
                    item.value
                  )}
                </div>
                <div className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Visual Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
          {/* GitHub Stats Overview Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/40 dark:bg-gray-800/30 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-gray-200/50 dark:border-gray-800/80 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <FaChartLine className="text-2xl text-blue-500 dark:text-cyan-400" />
                  <h3 className="text-xl font-bold text-gray-950 dark:text-white">
                    GitHub Metrics Overview
                  </h3>
                </div>
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-cyan-400 rounded-full text-xs font-bold border border-blue-100 dark:border-blue-900/40">
                  @{GITHUB_USERNAME}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3.5 bg-white/60 dark:bg-gray-900/40 rounded-2xl border border-gray-100 dark:border-gray-800">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Primary Languages
                  </span>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {stats.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-2.5 py-1 bg-blue-50 dark:bg-cyan-950/40 text-blue-600 dark:text-cyan-400 text-xs font-semibold rounded-lg border border-blue-100 dark:border-cyan-900/40"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-white/60 dark:bg-gray-900/40 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-2">
                  <div className="flex justify-between text-xs font-bold text-gray-500 dark:text-gray-400">
                    <span>Developer Activity</span>
                    <span className="text-green-500 dark:text-green-400 font-semibold">
                      ● Active Contributor
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                    Regularly committing full-stack web applications, microservices, and UI/UX projects on GitHub.
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded GitHub Card Image */}
            <div className="overflow-hidden rounded-2xl border border-gray-200/60 dark:border-gray-800">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=dark&hide_border=true&bg_color=0D1117&title_color=58A6FF&icon_color=58A6FF&text_color=8B949E`}
                alt="GitHub Readme Stats"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Top Languages & Streak Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/40 dark:bg-gray-800/30 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-gray-200/50 dark:border-gray-800/80 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <FaGithub className="text-2xl text-indigo-500 dark:text-indigo-400" />
                  <h3 className="text-xl font-bold text-gray-950 dark:text-white">
                    Languages & Contributions
                  </h3>
                </div>
                <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold border border-indigo-100 dark:border-indigo-900/40">
                  Live Sync
                </span>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-200/60 dark:border-gray-800 mb-6">
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=dark&hide_border=true&bg_color=0D1117&title_color=58A6FF&text_color=8B949E`}
                  alt="Top Languages"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 text-white font-semibold rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
              >
                <FaGithub className="text-xl mr-3" />
                <span>Visit GitHub Profile (@{GITHUB_USERNAME})</span>
                <FaExternalLinkAlt className="ml-2 text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
