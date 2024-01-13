import React from 'react'
import { Link } from 'react-router-dom'

export default function Head() {
  return (
    <div>
        <nav class="bg-white py-2 md:py-4">
    <div class="container px-4 mx-auto md:flex md:items-center">

      <div class="flex justify-between items-center">
        <a href="#" class="font-bold text-xl text-indigo-600">FWR</a>
        <button class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
        <Link to={'/'} class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Contact</Link>
        <Link  to={'/'} class="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Login</Link>
        <Link to={'/register'} class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Register</Link>
        <Link to={'/question'} class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Add Quiz</Link>
        <Link to={'/question'} class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">LogOut</Link>
      </div>
    </div>
  </nav>
    </div>
  )
}
