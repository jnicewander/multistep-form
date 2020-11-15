import React from "react"
import styled, { createGlobalStyle } from 'styled-components'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

// Sticky footer
const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`
const GlobalStyle = createGlobalStyle`
  ul, li {
    list-style-type: none;
    list-style-position: inside;
    margin: 0;
    padding: 0;
  }
`
// Sticky footer
const Main = styled.main`
  padding-bottom: 2.5rem;
`
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`
const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  color: white;
  padding: 2rem;
  background-color: black;
  margin-top: 2rem;
  
  > a {
    color: white;
  }
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
    <PageContainer>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Multistep Form`} />
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://github.com/jnicewander">Justin Nicewander</a>
        </Footer>
    </PageContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
