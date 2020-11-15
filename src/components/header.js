import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Container = styled.header`
  background: black;
  margin-bottom: 1.45rem;
`
const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`
const PageLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <Container>
    <Inner>
      <h1 style={{ margin: 0 }}>
        <PageLink to="/">
          {siteTitle}
        </PageLink>
      </h1>
    </Inner>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
