import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import './Navbar.css';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // State to track the open dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State to track mobile menu visibility

  const menuItems = [
    { name: 'HOME', path: '/' },
    {
      name: 'MARKETS',
      dropdown: [
        { name: 'Stocks', path: '/markets/stocks' },
        { name: 'Bonds', path: '/markets/bonds' },
        { name: 'Commodities', path: '/markets/commodities' },
      ],
    },
    {
      name: 'COMPLAINTS',
      dropdown: [
        { name: 'File a Complaint', path: '/complaints/file' },
        { name: 'Check Status', path: '/complaints/status' },
      ],
    },
    {
      name: 'TRADING WITH US',
      dropdown: [
        { name: 'How to Trade', path: '/trading/how-to-trade' },
        { name: 'Trading FAQs', path: '/trading/faqs' },
      ],
    },
    {
      name: 'MARKET WATCH',
      dropdown: [
        { name: 'Market Trends', path: '/market-watch/trends' },
        { name: 'Reports', path: '/market-watch/reports' },
      ],
    },
  ];

  const handleOutsideClick = (event) => {
    if (event.target.closest('.dropdown-menu')) return; // Ignore clicks inside dropdown
    setOpenDropdown(null); // Close dropdown
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-black p-2 w-full ">
      <div className=" mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="tailwind-logo"
            />
          </div>
          <div className="hidden sm:flex sm:ml-6">
            <ul className="flex gap-5 flex-wrap">
              {menuItems.map((item, index) => (
                <li key={index} className="relative dropdown-menu">
                  {  item.dropdown ? (
                    <DropdownMenu
                      item={item}
                      isOpen={openDropdown === index}
                      setOpenDropdown={setOpenDropdown}
                      index={index}
                    />
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `text-white px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-yellow-500' : ''}`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="sm:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              {mobileMenuOpen ? (
                <span className="block w-6 h-6 transform rotate-90">✖</span>
              ) : (
                <span className="block w-6 text-3xl  h-6">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={mobileMenuOpen}
        enter="transition ease-in duration-100"
        enterFrom="transform opacity-0 translate-y-[-20px]"
        enterTo="transform opacity-100 translate-y-0"
        leave="transition ease-out duration-100"
        leaveFrom="transform opacity-100 translate-y-0"
        leaveTo="transform opacity-0 translate-y-[-20px]"
      >
        <div className="sm:hidden bg-black rounded-md p-2">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="relative dropdown-menu">
                {item.dropdown ? (
                  <DropdownMenu
                    item={item}
                    isOpen={openDropdown === index}
                    setOpenDropdown={setOpenDropdown}
                    index={index}
                  />
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block text-white px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-yellow-500' : ''}`
                    }
                    onClick={toggleMobileMenu} // Close menu on link click
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </nav>
  );
};

const DropdownMenu = ({ item, isOpen, setOpenDropdown, index }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div
        onMouseEnter={() => setOpenDropdown(index)} // Open dropdown on hover
        onMouseLeave={() => setOpenDropdown(null)} // Close dropdown on mouse leave
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 text-xl font-semibold text-white shadow-sm cursor-pointer"
      >
        <span>{item.name}</span>
        <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute right-0 z-10 mt-2 w-30 origin-top-right rounded-md bg-yellow-500 shadow-lg ring-1 ring-black ring-opacity-5"
          onMouseEnter={() => setOpenDropdown(index)} // Keep open when hovering over dropdown
          onMouseLeave={() => setOpenDropdown(null)} // Close when leaving dropdown
        >
          {item.dropdown.map((subItem, subIndex) => (
            <Menu.Item key={subIndex}>
              {({ active }) => (
                <NavLink
                  to={subItem.path}
                  className={` flex items-center   justify-center px-2 py-2 text-sm 
                  ${active ? 'bg-yellow-500 ' : 'text-white hover:bg-black hover:text-white'}`}
                >
                  {subItem.name}
                </NavLink>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Navbar;
