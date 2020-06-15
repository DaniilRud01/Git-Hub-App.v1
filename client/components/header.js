import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/scss/main.scss'

const Header = (props) => {
  return (
    <div className="h-32 header w-60 flex items-center pl-6 pr-6">
      <img src={`${props.user.avatar_url}`} alt="" className="w-24 avatar" />
      <h3 className="text-4xl text-gray-500 ml-6">{props.user.login}</h3>
      <div className="nav">
        <Link
          to="/"
          className="text-right border-red-700 hover:border-red-900 text-sm border-2 text-gray-500 py-1 px-2"
        >
          {' '}
          Back To Main
        </Link>
        {props.repositoryName && (
          <Link
            to={`/${props.userName}`}
            className="text-right border-red-700 hover:border-red-900 text-sm border-2 text-gray-500 py-1 ml-4 px-2"
          >
            {' '}
            Back Repo
          </Link>
        )}
      </div>
    </div>
  )
}
export default Header
