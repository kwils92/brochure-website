import * as React from "react"

import Header from '../components/header'
import '../styles/index.css'
import { Helmet } from "react-helmet"

// markup
const IndexPage = () => {
  return (
    <div>
    <Header /> 

    <main>
      <h2>Home</h2>
    </main>
    </div>
  )
}

export default IndexPage
