// import {
//     SiGoogle,
//     //SiMicrosoft,
//     SiAmazon,
//     SiNetflix,
//     SiSpotify,
//     SiAirbnb,
//   } from 'react-icons/si'
  
//   export default function Clients() {
//     const clients = [
//       { name: "Google", icon: <SiGoogle /> },
//     //  { name: "Microsoft", icon: <SiMicrosoft /> },
//       { name: "Amazon", icon: <SiAmazon /> },
//       { name: "Netflix", icon: <SiNetflix /> },
//       { name: "Spotify", icon: <SiSpotify /> },
//       { name: "Airbnb", icon: <SiAirbnb /> },
//     ];
  
//     return (
//       <section id="clients" className="bg-gray-50 py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
//             Our Trusted Clients
//           </h2>
//           <p className="text-center text-gray-500 mb-12">
//             We are proud to have worked with some of the world's leading tech companies.
//           </p>
  
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 place-items-center">
//             {clients.map((client, index) => (
//               <div
//                 key={index}
//                 className="group flex flex-col items-center transition-transform transform hover:scale-110"
//               >
//                 <div className="text-5xl text-gray-500 group-hover:text-indigo-500 transition-colors duration-300">
//                   {client.icon}
//                 </div>
//                 <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-900">
//                   {client.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }
  


export default function Clients() {
  const clients = [
    {
      name: "Redberyl",
      img: "https://redberyl.co/images%20only/logoWhite.svg",
      bgColor: "#93141d", // dark gray
    },
    {
      name: "ByteCraftLabs",
      img: "https://bytecraftlabs.com/wp-content/uploads/2023/08/Untitled-design-2023-08-30T114635.953-225x41.png",
      bgColor: "#ffffff", // light gray
    },
    {
      name: "DesignAnswers",
      img: "https://www.designanswers.in/en/wp-content/uploads/2024/07/DA-logo@4x.png",
      bgColor: "#F3F4F6", // very light gray
    },
    {
      name: "C K Birla Hospital",
      img: "https://backend.ckbhospital.com/wp-content/uploads/2021/11/Logo_new.png",
      bgColor: "#F9FAFB", // off white
    },
    {
      name: "Saraf Partners",
      img: "https://sarafpartners.com/wp-content/uploads/2025/06/SarafAndPartnersLogo-1-768x111.png",
      bgColor: "#1F2937", // dark gray
    },
    {
      name: "Break Through",
      img: "https://inbreakthrough.org/wp-content/themes/breakthrough/dist/images/bt_new_logo.png",
      bgColor: "#c61d22", // dark gray
    },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 place-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              style={{ backgroundColor: client.bgColor }}
              className="group flex flex-col items-center justify-center w-40 h-40 rounded-xl p-4 transition-transform transform hover:scale-105 shadow-md"
            >
              <img
                src={client.img}
                alt={client.name}
                className="h-12 w-auto hover:grayscale-0 transition-all duration-300 mb-2"
              />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
