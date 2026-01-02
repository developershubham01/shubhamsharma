import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Clock, Award, CheckCircle, BarChart3, ArrowRight } from 'lucide-react';

const LeetCodeStats = () => {
  const stats = {
    totalSolved: 256,
    easy: 100,
    medium: 50,
    hard: 25,
    acceptanceRate: '78%',
    ranking: 'Rank 2,700,315',
    streak: 45
  };

  const categories = [
    {
      name: 'Java',
      problems: 50,
      color: 'from-blue-500 to-cyan-500',
      topics: ['Object Oriented', 'Collections', 'Syntax']
    },
    {
      name: 'MySQL',
      problems: 33,
      color: 'from-green-500 to-emerald-500',
      topics: ['SELECT', 'JOINs', 'Aggregations']
    },
    {
      name: 'Fundamentals',
      problems: 38,
      color: 'from-purple-500 to-pink-500',
      topics: ['Array x18', 'String x11', 'Two Pointers x9']
    },
    {
      name: 'Intermediate',
      problems: 21,
      color: 'from-orange-500 to-red-500',
      topics: ['Hash Table x9', 'Math x7', 'Binary Search x5']
    }
  ];

  const recentProblems = [
    { title: 'Two Sum', difficulty: 'Easy', date: '2 days ago' },
    { title: 'Valid Parentheses', difficulty: 'Easy', date: '4 days ago' },
    { title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', date: '5 days ago' },
    { title: 'Merge Two Sorted Lists', difficulty: 'Easy', date: '1 week ago' }
  ];

  return (
    <section id="leetcode" className="py-20 px-4">
      <div className="container mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-blue to-cyan-400 bg-clip-text text-transparent">
              LeetCode Progress
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {stats.totalSolved}+ problems solved (Updated with latest activities)
          </p>

          {/* 🔥 ANIMATED BUTTON */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.open('https://leetcode.com/u/shubhamsharma395/', '_blank')}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-primary-blue to-cyan-400 rounded-full text-black font-semibold flex items-center gap-2 mx-auto shadow-lg hover:shadow-primary-blue/50 transition"
          >
            View My LeetCode Profile
            <ArrowRight />
          </motion.button>
        </motion.div>

        {/* MAIN STATS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {[
            { icon: <Target />, label: 'Total Solved', value: stats.totalSolved },
            { icon: <CheckCircle />, label: 'Java', value: 50, color: 'text-green-500' },
            { icon: <TrendingUp />, label: 'MySQL', value: 33, color: 'text-yellow-500' },
            { icon: <Award />, label: 'Acceptance', value: stats.acceptanceRate },
            { icon: <BarChart3 />, label: 'Rank', value: stats.ranking },
            { icon: <Clock />, label: 'Streak', value: `${stats.streak} days` }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 text-center"
            >
              <div className={`text-3xl mb-2 ${stat.color || 'text-primary-blue'}`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* CATEGORIES */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-6">Problem Categories</h3>
            <div className="space-y-6">
              {categories.map((category, index) => (
                <div key={category.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{category.name}</span>
                    <span className="text-primary-blue">{category.problems} solved</span>
                  </div>

                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(category.problems / 50) * 100}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                    />
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {category.topics.map(topic => (
                      <span key={topic} className="px-3 py-1 bg-dark-blue rounded-full text-sm">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RECENT ACTIVITY */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-6">Recent Activity</h3>

            <div className="space-y-4">
              {recentProblems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-4 rounded-lg bg-dark-blue/50"
                >
                  <div>
                    <h4 className="font-medium mb-1">{problem.title}</h4>

                    <div className="flex items-center space-x-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        problem.difficulty === 'Easy'
                          ? 'bg-green-900/30 text-green-400'
                          : problem.difficulty === 'Medium'
                          ? 'bg-yellow-900/30 text-yellow-400'
                          : 'bg-red-900/30 text-red-400'
                      }`}>
                        {problem.difficulty}
                      </span>

                      <span className="text-gray-400 text-sm">
                        {problem.date}
                      </span>
                    </div>
                  </div>

                  <CheckCircle className="text-green-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeetCodeStats;
