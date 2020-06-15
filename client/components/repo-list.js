import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Profile = (props) => {
  const [search, setSearch] = useState('')
  const filtered = props.repoList.filter((el) => el.name.includes(search))
  return (
    <div className="repo h-screen">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        className="search text-white"
        placeholder="Search..."
      />
      {filtered.map((el) => (
        <div key={el.name}>
          <div className="flex bg-gray-200 repo">
            <div className="flex-1 text-gray-700 text-center border border-red-500 repo px-4 py-2 m-2">
              <Link
                className="text-2xl text-black w-full ml-4 text-indigo-500 "
                to={`/${props.userName}/${el.name}`}
              >
                {' '}
                {el.name}{' '}
              </Link>{' '}
              <br />
              <span>{el.description}</span>
            </div>
            <div className="flex-1 text-white text-center repolist px-4 py-2 m-2 border border-red-500">
              <span>
                Create {el.created_at}, <br />
                Update {el.updated_at}, <br />
                Pushed {el.pushed_at}
              </span>
            </div>
            <div className="flex-1 text-gray-700 text-center repolist px-4 py-2 m-2 border border-red-500">
              <Link
                className="text-2xl text-black w-full ml-4 text-indigo-500 "
                to={`/${props.userName}/${el.name}`}
              >
                View <br />
                Readme
              </Link>{' '}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Profile
