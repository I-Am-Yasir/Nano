import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar-container mb-4 flex flex-col items-center justify-between text-center bg-[#464646] p-5 mt-5 mx-4 md:mx-8 w-full max-w-[300px] border border-gray-700 rounded-xl text-yellow-300 h-[85vh]">
      {/* Top Section */}
      <div className="flex flex-col items-center">
        <div className="logo pb-5 text-yellow-300">Logo</div>
        <div className="profile w-44 h-44 md:w-56 md:h-56 rounded-full border border-yellow-500 flex items-center justify-center bg-yellow-600 mb-4">
          <img src="/contact.png" alt="Profile" className="rounded-full w-full h-full object-cover" />
        </div>
        <div className="sideheading text-white mb-5">
          <h1 className='text-2xl md:text-3xl'>Welcome Back</h1>
          <h1 className='text-2xl md:text-3xl'>NAME</h1>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-auto">
        <p className='pt-10 text-yellow-300 text-xl'>$ 000,000,000</p>
        <p className='pt-1 text-yellow-200'>Monthly Budget</p>
        <h3 className='pt-1 text-yellow-200'>Dashboard</h3>
      </div>
    </div>
  );
};

export default Sidebar;
