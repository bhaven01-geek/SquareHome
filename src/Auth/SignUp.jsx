import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// // import OAuth from '../components/OAuth';
import { useAuth } from '../AuthContext/AuthContext';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { signup } = useAuth();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log('fj');
  };



  const handleSubmit = async (e) => {
    console.log(formData);
    // e.preventDefault();
    try {
      // setLoading(true);
      const username = formData.username;
      const email = formData.email;
      const password = formData.password;

      const res = await signup(email, password);
      // const data = await createDisplayProfile(res, username)
      console.log(res);
      if (res.success === false) {
        // setLoading(false);
        // setError(data.message);
        return;
      }
      // setLoading(false);
      // setError(null);
      navigate('/login');
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />

        <button
          // disabled={loading}
          onClick={handleSubmit}
          className="bg-blue-700 text-white  p-3 rounded-lg uppercase hover:opacity-95 text-center"
        >
          {/* {loading ? 'Loading...' : 'Sign Up'} */}
          Sign Up
        </button>
        <div class="mt-7 grid grid-cols-3 items-center text-gray-500">
          <hr class="border-gray-500" />
          <p class="text-center text-sm">OR</p>
          <hr class="border-gray-500" />
        </div>

        <button class="bg-blue-700 text-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-center">
          <img
            height="50"
            width="50"
            src="https://www.outsystems.com/forge/DownloadResource.aspx?FileName=&ImageBinaryId=43951"
            alt="google btn"
          />
          <span class="ml-4">Login with Google</span>
        </button>

        {/* <OAuth /> */}
      </div>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={'/login'}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
      {/* {error && <p className="text-red-500 mt-5">{error}</p>} */}
    </div>
  );
}
