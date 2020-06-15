import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MainElem = () => {
  const [user, setUser] = useState('')
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <form className="w-full max-w-sm">
          <div className="flex items-center border-b border-b-2 border-red-700 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter username:"
              onChange={(event) => setUser(event.target.value)}
            />
            <Link
              className="flex-shrink-0 border-red-700 hover:border-red-900 text-sm border-2 text-gray-500 py-1 px-2 rounded"
              type="button"
              to={`/${user}`}
            >
              View{' '}
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MainElem
