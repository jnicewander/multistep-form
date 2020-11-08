import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from '../components/forms/form'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Form />
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
