import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Head from './head'
import Profile from './repo-list'
import Readme from './readme'
import Header from './header'

const Home = () => {
  const { userName, repositoryName } = useParams()
  const [repoList, setRepoList] = useState([])
  const [user, setUser] = useState({})
  const [readme, setReadme] = useState('')
  useEffect(() => {
    if (typeof repositoryName !== 'undefined') {
      axios(
        `https://api.github.com/repos/${userName}/${repositoryName}/readme`,
        {
          headers: { Accept: 'application/vnd.github.VERSION.raw' }
        },
        []
      ).then(({ data }) => setReadme(data))
    }
  }, [repositoryName, userName])

  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) => setRepoList(data))
    axios(`https://api.github.com/users/${userName}`).then(({ data }) => setUser(data))
  }, [userName])
  return (
    <div>
      <Header user={user} repositoryName={repositoryName} userName={userName} />
      <Route
        exact
        path="/:userName"
        component={() => <Profile repoList={repoList} userName={userName} />}
      />
      <Route exact path="/:userName/:repositoryName" component={() => <Readme readme={readme} />} />
      <Head title="GITHUB APP" />
    </div>
  )
}

Home.propTypes = {}

export default Home
