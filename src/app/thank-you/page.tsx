
  export default function ThankYou() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 p-6">
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md text-center">
          <svg
            className="mx-auto mb-6 w-24 h-24 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <h1 className="text-4xl font-extrabold text-green-700 mb-4">Thank You!</h1>
          <p className="text-lg text-gray-700 mb-6">
            We have received your message.<br />We will get back to you soon.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 shadow-md"
          >
            Go Back Home
          </a>
        </div>
      </div>
    );
  }
  