import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-teal-400">
          Login to Your Account
        </h2>
        <form onSubmit={submitHandler} className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required
             className="w-full px-4 py-2 mt-2 text-gray-300 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition duration-300 ease-in-out"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              required
              className="w-full px-4 py-2 mt-2 text-gray-300 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition duration-300 ease-in-out"

            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-6 text-white bg-teal-500 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;