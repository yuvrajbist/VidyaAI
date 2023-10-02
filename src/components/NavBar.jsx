import React, { useState, useEffect, useRef } from 'react'
import { logo } from '../assets'
import {FreeTrialButton} from './index'

const navigation = [
  { name: 'Know your Water', href: '#' },
  { name: 'About Us', href: '#' }
]
const NavBar = () => {
  let menuRef = useRef();
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    let handle = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMenu(false);
      }
    }

    document.addEventListener('mousedown', handle)
  })

  return (
    <div>
      <div className="bg-white" >
        <header className="sticky inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between h-20 xl:px-8">
            <div className="flex p-5 xl:pl-0 xl:pr-5">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 max-[380px]:w-41 max-[380px]:h-auto"
                  src={logo}
                  alt="MediaAnalysis"
                />
              </a>
            </div>
            <div className="flex p-10 xl:hidden" onClick={() => setMenu(true)}>
              <span className="sr-only">Open main menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
            <div className="hidden xl:grow xl:flex ">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="px-8 py-6 text-sm font-semibold leading-6 text-themeGray border-2 border-transparent hover:text-theme1 hover:border-b-theme2">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden xl:flex w-[120px] justify-between">
              <FreeTrialButton />
            </div>
          </nav>
        </header>
      </div>
      <div
        className={`${menu ? 'right-0' : 'hidden'} flex flex-col fixed inset-y-0 z-50 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 xl:invisible transition duration-600`} ref={menuRef}
      >
        <div className="flex items-center justify-between p-4">
          <h5 className="mb-0 text-xl font-semibold leading-normal">
            Menu
          </h5>
          <button
            type="button"
            className="box-content rounded-none border opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            onClick={() => { setMenu(false) }}>
            <span
              className="w-[1em] focus:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>
        </div>
        <div className="flex flex-col">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="px-4 py-2 text-sm font-semibold leading-6 border-2 border-transparent hover:text-theme1 hover:border-b-theme2">
              {item.name}
            </a>
          ))}
          <div className="pl-4 pt-4"><FreeTrialButton/></div>
        </div>
      </div>
    </div>
  )
}

export default NavBar