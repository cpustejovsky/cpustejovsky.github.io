/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import { Container } from "@material-ui/core"
import "../scss/layout.scss"

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
      <Header siteTitle={data.site.siteMetadata.title} show={true}/>
      <div className="site">
        <main className="site__content">
          {children}{" "}
          <footer className="site__footer">
            <Container>
              cpustejovsky <i className="far fa-thumbs-up"></i>{" "}|{" "}
              {new Date().getFullYear()}
            </Container>
          </footer>
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
