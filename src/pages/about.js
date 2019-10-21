import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Bajo, a shithead from shitland.</h2>
      <p>
        Need a shithead? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
