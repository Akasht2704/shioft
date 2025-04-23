'use client'

export default function StatsSection() {
  const stats = [
    { label: 'Years of Experience', value: '5+' },
    { label: 'Happy Clients', value: '120+' },
    { label: 'Team Members', value: '25+' },
    { label: 'Projects Completed', value: '200+' },
  ]

  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
            <p className="text-gray-700 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
