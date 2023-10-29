import React from 'react'
import { FaSearch, FaHome } from 'react-icons/fa'; {/*font awesome icon */ }
import { Link, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Header() {
    // const { currentUser } = useSelector((state) => state.user);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('searchTerm', searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if (searchTermFromUrl) {
            setSearchTerm(searchTermFromUrl);
        }
    }, [location.search]);
    return (
        <header className=' shadow-md'> {/*good seo practice to have a header tag */}
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'> {/* flex-wrap is used to wrap the text in mobile view */}
                        {/* make FaHome bigger */}
                        <FaHome className='text-orange-500' />
                        <span className='text-black-400'>Square</span>
                        <span className='text-grey-100'>Home</span>
                        <span className='text-violet font-bold text-xl'>.</span>


                    </h1>
                </Link>
                {/* <form
                    //   onSubmit={handleSubmit}
                    className='bg-slate-100 p-3 rounded-lg flex items-center'
                >
                    <input
                        type='text'
                        placeholder='Search ..'
                        className='bg-transparent focus:outline-none w-24 sm:w-64'
                        // value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button>
                        <FaSearch className='text-slate-600' />
                    </button>
                </form> */}
                <ul className='flex gap-12'>

                <Link to='/Listings'>
                        <li className='hidden sm:inline text-slate-700 hover:text-violet'>
                            Search Property
                        </li>
                    </Link>
                  
                    <Link to='/emi'>
                        <li className='hidden sm:inline text-slate-700 hover:text-violet'>
                            EMI Calculator
                        </li>
                    </Link>

                    <Link to='/login'>
                        <li className='hidden sm:inline text-slate-700 hover:text-violet'>
                            Login
                        </li>
                    </Link>
                    <Link to='/signUp'>
                        <li className='hidden sm:inline text-slate-700 bg-violet hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'>
                            Signup
                        </li>
                    </Link>
                    {/* <Link to='/profile'>
                        dummy_login */}
                    {/* {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-700 hover:underline'> Login</li>
            )} */}
                    {/* </Link> */}
                </ul>
            </div>
        </header>
    )
}

export default Header