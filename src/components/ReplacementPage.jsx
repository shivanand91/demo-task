import React from 'react'
import { Link } from 'react-router-dom'

const ReplacementPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-xl min-h-screen bg-gray-100 p-4">
           Page is replaced with the current page.
          <Link to={"/"} className='px-4 py-1 text-green-400 border border-green-400 mt-4 rounded-md'>Back to the Home</Link>
          
    </div>
  )
}

export default ReplacementPage
