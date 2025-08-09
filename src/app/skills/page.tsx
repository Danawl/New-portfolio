'use client'

import { skills } from '@/contents/skills'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'

export default function Skills() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills Progress
      </motion.h1>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {skills.map((skill, index) => (
          <motion.article
            key={index}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <div className="p-6 flex flex-col items-start">
              <h2 className="text-xl font-semibold mb-4">{skill.title}</h2>
              <div className="w-full">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-2">
                  <div
                    className="bg-blue-500 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">{skill.progress}%</span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  )
}