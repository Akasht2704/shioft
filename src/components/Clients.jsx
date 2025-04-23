import {
    SiGoogle,
    //SiMicrosoft,
    SiAmazon,
    SiNetflix,
    SiSpotify,
    SiAirbnb,
  } from 'react-icons/si'
  
  export default function Clients() {
    const clients = [
      { name: "Google", icon: <SiGoogle /> },
    //  { name: "Microsoft", icon: <SiMicrosoft /> },
      { name: "Amazon", icon: <SiAmazon /> },
      { name: "Netflix", icon: <SiNetflix /> },
      { name: "Spotify", icon: <SiSpotify /> },
      { name: "Airbnb", icon: <SiAirbnb /> },
    ];
  
    return (
      <section id="clients" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Our Trusted Clients
          </h2>
          <p className="text-center text-gray-500 mb-12">
            We are proud to have worked with some of the world's leading tech companies.
          </p>
  
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 place-items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group flex flex-col items-center transition-transform transform hover:scale-110"
              >
                <div className="text-5xl text-gray-500 group-hover:text-indigo-500 transition-colors duration-300">
                  {client.icon}
                </div>
                <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-900">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  