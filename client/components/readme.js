import React from 'react'
import Markdown from 'markdown-to-jsx'
import './readme.scss'

const Readme = (props) => {
  return <Markdown className="repo markdown-body">{props.readme}</Markdown>
}

export default Readme
