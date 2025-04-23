import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiMysql,
    SiDocker,
    SiNodedotjs,
   // SiReactnative,
    SiFlutter,
    SiPhp,
    SiLaravel,
    SiMongodb,
    SiPostgresql,
  } from 'react-icons/si'
  
  const techStack = [
    {
      name: 'React',
      icon: <SiReact size={50} className="text-blue-500" />,
      description: 'A JavaScript library for building fast and interactive UIs.'
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs size={50} className="text-white" />,
      description: 'A React framework with server-side rendering and static site generation.'
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss size={50} className="text-sky-400" />,
      description: 'A utility-first CSS framework for creating modern, responsive designs.'
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript size={50} className="text-blue-600" />,
      description: 'A strongly typed superset of JavaScript for safer coding.'
    },
    {
      name: 'MySQL',
      icon: <SiMysql size={50} className="text-blue-800" />,
      description: 'A reliable relational database management system.'
    },
    {
      name: 'Docker',
      icon: <SiDocker size={50} className="text-cyan-400" />,
      description: 'An open platform to build, ship, and run applications in containers.'
    },
    {
      name: 'Node.js',
      icon: <SiNodedotjs size={50} className="text-green-500" />,
      description: 'A runtime environment for executing JavaScript on the server side.'
    },
    //{
    //  name: 'React Native',
    //  icon: <SiReactnative size={50} className="text-blue-400" />,
   //   description: 'A framework for building native mobile apps using React.'
   // },
    {
      name: 'Flutter',
      icon: <SiFlutter size={50} className="text-sky-500" />,
      description: 'Google’s UI toolkit for building natively compiled apps for mobile, web, and desktop.'
    },
    {
      name: 'PHP',
      icon: <SiPhp size={50} className="text-indigo-500" />,
      description: 'A popular scripting language especially suited for web development.'
    },
    {
      name: 'Laravel',
      icon: <SiLaravel size={50} className="text-red-500" />,
      description: 'A PHP framework for web artisans with expressive syntax and powerful tools.'
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb size={50} className="text-green-600" />,
      description: 'A NoSQL database program that uses flexible, JSON-like documents.'
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql size={50} className="text-blue-500" />,
      description: 'An advanced open-source relational database with enterprise features.'
    },
  ]
  
  export default function Technologies() {
    return (
      <section id="technologies" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="bg-gray-800 hover:bg-gray-700 transition duration-300 p-6 rounded-xl shadow-lg transform hover:-translate-y-2 hover:scale-105 flex flex-col items-center"
              >
                <div className="animate-pulse mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  