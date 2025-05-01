import {
    FaLaptopCode,
    FaMobileAlt,
    FaCloud,
    FaShoppingCart,
    FaRobot,
    FaPaintBrush,
    FaHeadset,
    FaCheckCircle,
    FaBrain,
    FaMicrochip,
    FaSearch,
  } from 'react-icons/fa'
  
  const services = [
    {
      slug: 'web-development',
      title: 'Web Development',
      description: 'Modern, responsive, and secure web apps.',
      fullDescription:
        'We build secure, scalable, and fast web applications using the latest technologies like React, Next.js, Node.js, and more.',
      icon: <FaLaptopCode className="text-5xl text-blue-600 mb-4" />,
    },
    {
      slug: 'mobile-app-development',
      title: 'Mobile App Development',
      description: 'Cross-platform apps for Android & iOS.',
      fullDescription:
        'Our mobile solutions ensure smooth performance on both iOS and Android using Flutter and React Native.',
      icon: <FaMobileAlt className="text-5xl text-green-600 mb-4" />,
    },
    {
      slug: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable and cost-effective cloud architecture.',
      fullDescription:
        'We help businesses scale with AWS, Azure, or Google Cloud for better availability and cost efficiency.',
      icon: <FaCloud className="text-5xl text-purple-600 mb-4" />,
    },
    {
      slug: 'ecommerce-app-development',
      title: 'E-commerce App Development',
      description: 'Custom online store platforms and integrations.',
      fullDescription:
        'We develop secure and feature-rich e-commerce platforms with shopping carts, payment gateways, and admin dashboards.',
      icon: <FaShoppingCart className="text-5xl text-pink-500 mb-4" />,
    },
    {
      slug: 'ai-machine-learning',
      title: 'AI / Machine Learning',
      description: 'Smart solutions using AI/ML for automation.',
      fullDescription:
        'Implement intelligent systems for predictions, automation, and insights with Python, TensorFlow, and more.',
      icon: <FaRobot className="text-5xl text-yellow-500 mb-4" />,
    },
    {
      slug: 'natural-language-processing',
      title: 'Natural Language Processing (NLP)',
      description: 'AI models that understand and generate human language.',
      fullDescription:
        'We create chatbots, language translation tools, and sentiment analyzers using NLP libraries and models.',
      icon: <FaBrain className="text-5xl text-teal-500 mb-4" />,
    },
    {
      slug: 'computer-vision',
      title: 'Computer Vision',
      description: 'AI that interprets and analyzes images and videos.',
      fullDescription:
        'We build vision models for object detection, facial recognition, and image processing.',
      icon: <FaMicrochip className="text-5xl text-indigo-500 mb-4" />,
    },
    {
      slug: 'ai-consulting',
      title: 'AI Consulting',
      description: 'Strategy, planning, and implementation of AI projects.',
      fullDescription:
        'Our experts help you plan and execute AI-powered solutions that align with your business goals.',
      icon: <FaSearch className="text-5xl text-emerald-500 mb-4" />,
    },
    {
      slug: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'Beautiful and user-friendly interface designs.',
      fullDescription:
        'Our design team crafts engaging user experiences with Figma, Adobe XD, and modern UI practices.',
      icon: <FaPaintBrush className="text-5xl text-red-500 mb-4" />,
    },
    {
      slug: 'qa-testing',
      title: 'QA & Testing',
      description: 'Thorough testing for bug-free performance.',
      fullDescription:
        'We ensure software quality using manual and automated testing methods like Selenium and Jest.',
      icon: <FaCheckCircle className="text-5xl text-indigo-600 mb-4" />,
    },
    {
      slug: 'support-maintenance',
      title: 'Support & Maintenance',
      description: 'Ongoing support for your apps and services.',
      fullDescription:
        'We provide continuous monitoring, performance optimization, and support to keep your app running smoothly.',
      icon: <FaHeadset className="text-5xl text-orange-600 mb-4" />,
    },
  ]
  
  export default services
  