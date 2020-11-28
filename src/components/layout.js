import React from "react"
import styled, { createGlobalStyle } from 'styled-components'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

// Sticky footer
const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const GlobalStyle = createGlobalStyle`
  ul, li {
    list-style-type: none;
    list-style-position: inside;
    margin: 0;
    padding: 0;
  }
`
const Main = styled.main`
  flex: 1 0 auto;
`
const Footer = styled.footer`
  flex-shrink: 0;
  background-color: #000;
  color: white;
  padding: 2rem;
  >a {
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
      <Main>{children}</Main>
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
