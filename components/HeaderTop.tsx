'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { FaArrowRightToBracket, FaRegUser } from 'react-icons/fa6';

const HeaderTop = () => {
  const { data: session }: any = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('visitCount');
    const count = storedCount ? parseInt(storedCount) + 1 : 1;
    setVisitCount(count);
    localStorage.setItem('visitCount', count.toString());
  }, []);

  const handleLogout = () => {
    setTimeout(() => signOut({ callbackUrl: '/login' }), 1000);
    toast.success('Logout successful!');
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
    setTimeout(() => {
      setDropdownOpen(false);
    }, 5000);
  };

  return (
    <div className="h-10 px-5 text-white bg-black max-lg:px-5 max-lg:h-16 max-[573px]:px-0">
      <div className="flex justify-between items-center h-full gap-5 max-lg:flex-col max-lg:gap-4 max-lg:justify-center max-w-screen-xl mx-auto">
        {/* Visit Count and Marquee */}
        <ul className="flex items-center gap-5 w-full max-[370px]:gap-2">
          <li className="flex gap-2 font-semibold text-white">
            Visits: <span>

         
{/* <a href="https://www.hitwebcounter.com" target="_blank"> */}
<img src="https://hitwebcounter.com/counter/counter.php?page=18513225&style=0025&nbdigits=5&type=page&initCount=24" title="Counter Widget" alt="Visit counter For Websites"  
 style={{ width: '80px', height: 'auto' }} />
 {/* </a>            */}
     
            </span>
          </li>
          <li className="flex-1 overflow-hidden">
            <div className="scrolling-text text-sm text-yellow-500 max-md:text-xs">
         Maluk Forever |  📧 Contact us: operations@malukforever.com | 📞 Call us now: +91 8588801711  </div>
            {/* <div className="scrolling-text text-sm text-yellow-500 max-md:text-xs">
              🎉 Flat 50% Off on Sheetmasks! | 🚚 Free Shipping on Orders Above $100 | 🛍️ New Arrivals in Fashion! | 📞 Call us now: +91 8588801711
            </div> */}
          </li>
        </ul>

        {/* Login/Register/Profile Section */}
        <ul className="flex items-center gap-5 font-semibold max-[370px]:gap-2">
          {!session ? (
            <>
              <li>
                <Link href="/login" className="flex items-center gap-2">
                  <FaRegUser className="text-white" />
                  <span>Login</span>
                </Link>
              </li>
              <li>
                <Link href="/register" className="flex items-center gap-2">
                  <FaRegUser className="text-white" />
                  <span>Register</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <span className="text-base">{session.user?.email}</span>
              {session.user?.role === 'admin' && (
                <span>
                  <Link href="/admin">Admin</Link>
                </span>
              )}
              <div className="relative">
                <button onClick={toggleDropdown}>
                  <FaRegUser className="text-white" />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 z-10 mt-2 w-48 bg-white text-black rounded shadow">
                    <ul>
                      <li>
                        <Link href="/profile" className="block px-4 py-2 hover:bg-gray-200">
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link href="/orders" className="block px-4 py-2 hover:bg-gray-200">
                          My Orders
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="flex items-center px-4 py-2 w-full hover:bg-gray-200"
                        >
                          <FaArrowRightToBracket className="mr-2" />
                          Log out
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </ul>
      </div>
      <style jsx>{`
        .scrolling-text {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          animation: scroll-left 25s linear infinite;
        }

        @keyframes scroll-left {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderTop;
