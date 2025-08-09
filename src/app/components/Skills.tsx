'use client'

import { skills } from '@/contents/skills';

export default function Skills() {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Skills Progress
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 flex flex-col items-start"
            >
              <h3 className="text-xl font-semibold mb-4">
                {skill.title}
              </h3>
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
          ))}
        </div>
      </div>
    </section>
  );
}