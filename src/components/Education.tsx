import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Trophy, Calendar, MapPin, Award, Users } from 'lucide-react';
import profileImg from '../assets/profile.jpg'; // Adjust the path if needed

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Hackathon Finalist',
      description: 'Jaipur Hackathon 2025',
      detail: 'Competed among hundreds of developers',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Science Fair Developer',
      description: 'AI-based Emergency Traffic System',
      detail: 'Innovative solution for traffic management',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Active Contributor',
      description: 'Open Source Projects',
      detail: 'Contributing to community projects',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const interests = [
    '🌍 Economics & World Affairs',
    '📚 History & Culture',
    '🤖 Future of AI',
    '⚡ Intelligent Automation',
    '🌱 Sustainable Technology',
    '🎯 Problem Solving'
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-[#11efef] to-[#E9967A] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🎓 Education & <span className="bg-gradient-to-r from-[#11efef] to-[#E9967A] bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Academic journey and recognition for innovation and excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#11efef] to-[#E9967A] text-white">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    B.Tech in Computer Science
                  </h3>
                  <p className="text-[#E9967A] font-semibold text-lg">
                    Arya Institute of Engineering Technology
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <MapPin size={18} />
                  <span>Jaipur, Rajasthan</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <Calendar size={18} />
                  <span>2023 – 2027 (3rd Year)</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-[#11efef]/10 to-[#E9967A]/10 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Specializations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'DevOps', 'Generative AI', 'Automation'].map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1 text-sm font-medium bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              🏆 Achievements & Activities
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className={`transform transition-all duration-500 ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${400 + (index * 100)}ms` }}
                >
                  <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-[#E9967A] font-semibold mb-2">
                          {achievement.description}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {achievement.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div
          className={`mt-16 transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-r from-[#11efef]/10 to-[#E9967A]/10 rounded-2xl p-8 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              💡 Interests & Passions
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={interest}
                  className={`transform transition-all duration-500 ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${800 + (index * 100)}ms` }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:scale-105 transition-transform duration-200 border border-gray-200 dark:border-gray-700">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {interest}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 dark:text-gray-300 italic">
                "Always exploring the intersection of technology, society, and human potential"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;