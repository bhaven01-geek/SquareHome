import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   signInStart,
//   signInSuccess,
//   signInFailure,
// } from '../redux/user/userSlice';
// import OAuth from '../components/OAuth';

import { useAuth } from '../AuthContext/AuthContext';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  // const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const { login } = useAuth();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const email = formData.email;
      const password = formData.password;
      const data = await login(email, password);
      console.log(data);
      if (data.success === false) {
        // dispatch(signInFailure(data.message));
        return;
      }
      navigate('/');
    } catch (error) {
      // dispatch(signInFailure(error.message));
      console.log(error);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 text-center"
        >
          {/* {loading ? 'Loading...' : 'Sign In'} */}
          Sign In
        </button>
        {/* <OAuth /> */}
        <div class="mt-7 grid grid-cols-3 items-center text-gray-500">
          <hr class="border-gray-500" />
          <p class="text-center text-sm">OR</p>
          <hr class="border-gray-500" />
        </div>

        <button class="bg-blue-400 text-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-center">
          <img
            height="50"
            width="50"
            src="https://www.outsystems.com/forge/DownloadResource.aspx?FileName=&ImageBinaryId=43951"
            alt="google btn"
          />
          <span class="ml-4">Login with Google</span>
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to={'/signup'}>
          <span className="text-blue-700">Sign up</span>
        </Link>
      </div>
      {/* {error && <p className="text-red-500 mt-5">{error}</p>} */}
    </div>
  );
}
