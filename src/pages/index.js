import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import "../styles/index.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <h1>Hello.</h1>
      <h2>I'm Bajo, this shit is gatsby!</h2>
      <p>
        Need a Shithead? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
