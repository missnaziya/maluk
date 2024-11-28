'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FaArrowRightToBracket, FaRegUser } from 'react-icons/fa6'

const HeaderTop = () => {
  const { data: session }: any = useSession()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleLogout = () => {
    setTimeout(() => signOut({ callbackUrl: '/login' }), 1000)
    toast.success('Logout successful!')
  }

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev)
    setTimeout(() => {
      setDropdownOpen(false)
    }, 5000)
  }

  return (
    <div className='h-10 px-5 text-white bg-black max-lg:px-5 max-lg:h-16 max-[573px]:px-0'>
      <div className='flex justify-between h-full items-center gap-10 max-lg:flex-col max-lg:gap-4 max-lg:justify-center max-lg:items-center max-w-screen-2xl mx-auto max-[573px]:px-0'>
        <ul className='flex items-center h-full w-full gap-x-5 max-[370px]:text-sm max-[370px]:gap-x-2'>
          {/* Marquee for displaying offers */}
          <li className='font-semibold text-yellow-500 w-full overflow-hidden'>
            <div className='scrolling-text text-sm max-md:text-xs'>
              🎉 Flat 50% Off on Sheetmasks! | 🚚 Free Shipping on Orders Above $100 | 🛍️ New Arrivals in Fashion!
            </div>
          </li>
        </ul>
        <ul className='flex items-center gap-x-5 h-full max-[370px]:text-sm max-[370px]:gap-x-2 font-semibold'>
          {!session ? (
            <>
              <li className='flex items-center'>
                <Link
                  href='/login'
                  className='flex items-center gap-x-2 font-semibold'
                >
                  <FaRegUser className='text-white' />
                  <span>Login</span>
                </Link>
              </li>
              <li className='flex items-center'>
                <Link
                  href='/register'
                  className='flex items-center gap-x-2 font-semibold'
                >
                  <FaRegUser className='text-white' />
                  <span>Register</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <span className='ml-10 text-base'>{session.user?.email}</span>
              {session.user?.role == 'admin' && (
                <span className='ml-2 text-base'>
                  <Link href='/admin'>Admin</Link>
                </span>
              )}
              <div className='relative flex items-center'>
                <button onClick={toggleDropdown} className='flex items-center'>
                  <FaRegUser className='text-white' />
                </button>
                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className='absolute right-0 z-10 mt-10 w-48 bg-white text-black rounded-md shadow-lg'>
                    <ul className='py-1'>
                      <li>
                        <Link
                          href='/profile'
                          className='block px-4 py-2 hover:bg-gray-200'
                        >
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/orders'
                          className='block px-4 py-2 hover:bg-gray-200'
                        >
                          My Orders
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() => handleLogout()}
                          className='flex items-center text-left px-4 py-2 hover:bg-gray-200'
                        >
                          <FaArrowRightToBracket className='mr-2' />
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
          max-width: 100%;
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
  )
}

export default HeaderTop
