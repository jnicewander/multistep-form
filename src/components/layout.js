import React from "react"
import styled, { createGlobalStyle } from 'styled-components'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const GlobalStyle = createGlobalStyle`
  ul, li {
    list-style-type: none;
    list-style-position: inside;
    margin: 0;
    padding: 0;
  }
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`

const Footer = styled.footer`
  margin-top: 2rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Multistep Form`} />
      <Container>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://github.com/jnicewander">Justin Nicewander</a>
        </Footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
