import React from "react";
import { useSignUpMutation } from "../../context/api/userApi";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signUp] = useSignUpMutation();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    signUp(values).then(() => navigate("/signin"));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            name="username"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
            placeholder="Enter username"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
            placeholder="Enter password"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md shadow-sm"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
