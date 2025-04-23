/*export default function About() {
    return (
      <section className="max-w-5xl mx-auto py-16 px-4" id="about">
        <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          We are a tech company committed to solving real-world problems using innovative technologies.
          With a team of experienced engineers and designers, we deliver top-tier solutions for businesses of all sizes.
        </p>
      </section>
    )
  }

 */ 

  import { FaLightbulb, FaUsers, FaCogs } from 'react-icons/fa'

export default function About() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4" id="about">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">About Us</h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We are a tech-driven company committed to solving real-world problems through innovative, scalable, and reliable technology.
            Our team of passionate engineers, creative designers, and solution architects work together to bring ideas to life.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you're a startup or an enterprise, we have the expertise to transform your vision into a powerful digital solution.
          </p>
        </div>

        {/* Icon + Highlighted Features */}
        <div className="grid gap-6">
          <div className="flex items-start gap-4">
            <FaLightbulb className="text-yellow-500 text-3xl mt-1" />
            <div>
              <h4 className="text-xl font-semibold text-gray-800">Innovation First</h4>
              <p className="text-gray-600 text-sm">
                We bring fresh ideas to the table and love building future-ready solutions.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaUsers className="text-blue-500 text-3xl mt-1" />
            <div>
              <h4 className="text-xl font-semibold text-gray-800">Team of Experts</h4>
              <p className="text-gray-600 text-sm">
                A collaborative team of skilled professionals passionate about tech.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaCogs className="text-green-500 text-3xl mt-1" />
            <div>
              <h4 className="text-xl font-semibold text-gray-800">End-to-End Solutions</h4>
              <p className="text-gray-600 text-sm">
                From idea to launch, we handle everything with precision and care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

