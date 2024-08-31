import React from 'react'

const Navbar = () => {
  return (
    <nav className="h-14 flex justify-between ">
        <p className=' text-teal-400 p-4 font-bold mx-5'>ToDo App</p>
        <ul className="flex gap-6 text-white p-4 font-bold mx-5">
            <li className="hover:text-teal-400"><a href="#">Home</a></li>
            <li className="hover:text-teal-400"><a href="#">Tasks</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
