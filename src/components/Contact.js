const Contact = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Contact Information</h1>
  
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-medium text-gray-600">Name</h2>
              <p className="text-lg text-gray-800">Vishnu Vardhan</p>
            </div>
  
            <div>
              <h2 className="text-xl font-medium text-gray-600">Email</h2>
              <p className="text-lg text-blue-600">ummadivishnuvardhan46@gmail.com</p>
            </div>
  
            <div>
              <h2 className="text-xl font-medium text-gray-600">Mobile Number</h2>
              <p className="text-lg text-gray-800">8317566265</p>
            </div>
  
            <div>
              <h2 className="text-xl font-medium text-gray-600">College</h2>
              <p className="text-lg text-gray-800">IIIT RK VALLEY</p>
            </div>
          </div>
  
          <div className="mt-8 flex justify-center">
            <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  