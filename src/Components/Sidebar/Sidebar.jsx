import React from 'react'

const Sidebar = () => {
  return (
    <>
    <div className="siderbar-container flex items-center justify-center flex-col text-center bg-amber-500 p-20  m-8 w-96 border rounded-xl text-yellow-700 h-4/5">
    <div className="logo pb-5">Logo</div>
    <div className="profile w-56 h-56 rounded-full border flex items-center justify-center  ">
        <img src="/contact.png" alt="" />
    </div>
    <h1 className='text-3xl '>Welcome Back</h1>
    <h1 className='text-3xl'>NAME</h1>
    <p className='pt-5'>$ 000,000,000</p>
    <p>Monthly Budget</p>
    <h3 className=''>Dashboard</h3>
    </div>
    </>
  )
}

export default Sidebar