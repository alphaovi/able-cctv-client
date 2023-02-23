import React, { useState } from 'react';

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        // You can replace the console.log statement with your API call to submit the form data
    };
    return (
        <div className="bg-gray-400 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-800 font-bold mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-800 font-bold mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-800 font-bold mb-2">
                Message:
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    );
};

export default ContactUs;